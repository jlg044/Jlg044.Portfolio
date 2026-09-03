export function SectionHeading({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="whitespace-nowrap font-mono text-sm text-emerald-400">
        <span className="text-neutral-600">{index}.</span> {title}
      </h2>
      <span className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent" />
    </div>
  );
}
