import { useId, type ReactNode } from "react";
import type { Diagram, DiagramNode } from "@/data/portfolio";

const NODE_H = 22;
const CHAR_W = 5.4;

export function box(node: DiagramNode) {
  const w = node.w ?? Math.round(node.label.length * CHAR_W + 14);
  return { x: node.x, y: node.y, w, h: NODE_H, cx: node.x + w / 2, cy: node.y + NODE_H / 2 };
}

/** Start and end point of the straight connector between two nodes */
export function edgeLine(from: DiagramNode, to: DiagramNode) {
  const a = box(from);
  const b = box(to);

  if (b.x >= a.x + a.w) return { x1: a.x + a.w, y1: a.cy, x2: b.x - 2, y2: b.cy };
  if (b.x + b.w <= a.x) return { x1: a.x, y1: a.cy, x2: b.x + b.w + 2, y2: b.cy };
  if (b.y >= a.y + a.h) return { x1: a.cx, y1: a.y + a.h, x2: b.cx, y2: b.y - 2 };
  return { x1: a.cx, y1: a.y, x2: b.cx, y2: b.y + b.h + 2 };
}

/** Highlight state used by the animated flow on the project page */
export interface DiagramState {
  /** Nodes of the current step */
  active: Set<string>;
  /** Nodes already reached; the rest are dimmed */
  seen: Set<string>;
  /** Edges already travelled, keyed "from>to" as declared in the diagram */
  edges: Set<string>;
}

export function ArchDiagram({
  diagram,
  title,
  state,
  children,
}: {
  diagram: Diagram;
  title: string;
  state?: DiagramState;
  children?: ReactNode;
}) {
  const markerId = `arrow-${useId().replace(/:/g, "")}`;
  const byId = new Map(diagram.nodes.map((n) => [n.id, n]));
  const fade = "transition-[fill,stroke,opacity] duration-300";

  return (
    <svg
      viewBox="0 0 320 200"
      className="h-full w-full"
      role="img"
      aria-label={`${title} architecture diagram`}
    >
      <defs>
        <marker
          id={markerId}
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="5"
          markerHeight="5"
          orient="auto-start-reverse"
        >
          <path d="M0 0L10 5L0 10z" className="fill-silver" />
        </marker>
        <marker
          id={`${markerId}-on`}
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="5"
          markerHeight="5"
          orient="auto-start-reverse"
        >
          <path d="M0 0L10 5L0 10z" className="fill-accent" />
        </marker>
      </defs>

      <g fill="none" strokeWidth="1">
        {diagram.edges.map(([fromId, toId]) => {
          const from = byId.get(fromId);
          const to = byId.get(toId);
          if (!from || !to) return null;
          const l = edgeLine(from, to);
          const on = state?.edges.has(`${fromId}>${toId}`) ?? false;
          const dim = state && !on;
          return (
            <path
              key={`${fromId}-${toId}`}
              d={`M${l.x1} ${l.y1} L${l.x2} ${l.y2}`}
              markerEnd={`url(#${markerId}${on ? "-on" : ""})`}
              className={`${fade} ${on ? "stroke-accent" : "stroke-silver/70"}`}
              opacity={dim ? 0.45 : 1}
            />
          );
        })}
      </g>

      {diagram.nodes.map((node) => {
        const b = box(node);
        const hot = state ? state.active.has(node.id) : node.accent;
        const dim = state ? !state.seen.has(node.id) && !hot : false;
        return (
          <g key={node.id} opacity={dim ? 0.4 : 1} className={fade}>
            <rect
              x={b.x}
              y={b.y}
              width={b.w}
              height={b.h}
              rx="3"
              className={`${fade} ${hot ? "fill-accent-soft stroke-accent" : "fill-card stroke-line"}`}
              strokeWidth="1"
            />
            <text
              x={b.cx}
              y={b.cy + 3.2}
              textAnchor="middle"
              className={`font-mono text-[9px] ${fade} ${hot ? "fill-accent" : "fill-ink"}`}
            >
              {node.label}
            </text>
          </g>
        );
      })}

      {children}

      {diagram.caption && (
        <text x="8" y="192" className="fill-silver font-mono text-[8.5px]">
          {diagram.caption}
        </text>
      )}
    </svg>
  );
}
