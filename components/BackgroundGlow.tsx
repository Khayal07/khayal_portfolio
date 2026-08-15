export function BackgroundGlow() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-accent-violet/20 blur-[140px]" />
      <div className="absolute top-1/3 -left-40 h-[420px] w-[420px] rounded-full bg-accent-cyan/10 blur-[130px]" />
      <div className="absolute bottom-0 -right-40 h-[420px] w-[420px] rounded-full bg-accent-violet/10 blur-[130px]" />
    </div>
  );
}