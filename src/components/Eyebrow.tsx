export default function Eyebrow({ children }: { children: string }) {
  return (
    <p className="eyebrow">
      <span className="slice inline-block h-3 w-7 bg-primary [--slice-cut:30%]" aria-hidden />
      {children}
    </p>
  );
}
