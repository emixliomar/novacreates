export function BackgroundGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute -top-24 left-1/2 h-80 w-[56rem] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute top-40 left-0 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-cyan-400/10 blur-3xl" />
    </div>
  );
}
