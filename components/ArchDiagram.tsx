import { useId } from "react";
import type { Diagram, DiagramNode } from "@/data/portfolio";

const NODE_H = 22;
const DEFAULT_W = 62;

function box(node: DiagramNode) {
  const w = node.w ?? DEFAULT_W;
  return { x: node.x, y: node.y, w, h: NODE_H, cx: node.x + w / 2, cy: node.y + NODE_H / 2 };
}

function edgePath(from: DiagramNode, to: DiagramNode) {
  const a = box(from);
  const b = box(to);

  if (b.x >= a.x + a.w) return `M${a.x + a.w} ${a.cy} L${b.x - 2} ${b.cy}`;
  if (b.x + b.w <= a.x) return `M${a.x} ${a.cy} L${b.x + b.w + 2} ${b.cy}`;
  if (b.y >= a.y + a.h) return `M${a.cx} ${a.y + a.h} L${b.cx} ${b.y - 2}`;
  return `M${a.cx} ${a.y} L${b.cx} ${b.y + b.h + 2}`;
}

export function ArchDiagram({ diagram, title }: { diagram: Diagram; title: string }) {
  const markerId = `arrow-${useId().replace(/:/g, "")}`;
  const byId = new Map(diagram.nodes.map((n) => [n.id, n]));

  return (
    <svg
      viewBox="0 0 300 160"
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
      </defs>

      <g fill="none" strokeWidth="1" className="stroke-silver/70">
        {diagram.edges.map(([fromId, toId]) => {
          const from = byId.get(fromId);
          const to = byId.get(toId);
          if (!from || !to) return null;
          return (
            <path
              key={`${fromId}-${toId}`}
              d={edgePath(from, to)}
              markerEnd={`url(#${markerId})`}
            />
          );
        })}
      </g>

      {diagram.nodes.map((node) => {
        const b = box(node);
        return (
          <g key={node.id}>
            <rect
              x={b.x}
              y={b.y}
              width={b.w}
              height={b.h}
              rx="3"
              className={
                node.accent
                  ? "fill-accent-soft stroke-accent"
                  : "fill-card stroke-line"
              }
              strokeWidth="1"
            />
            <text
              x={b.cx}
              y={b.cy + 3.2}
              textAnchor="middle"
              className={`font-mono text-[9.5px] ${node.accent ? "fill-accent" : "fill-ink"}`}
            >
              {node.label}
            </text>
          </g>
        );
      })}

      {diagram.caption && (
        <text x="8" y="152" className="fill-silver font-mono text-[8.5px]">
          {diagram.caption}
        </text>
      )}
    </svg>
  );
}
