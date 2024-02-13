"use client";
export function Wrapper({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return <div className="px-12 pt-8 max-w-3xl">{children}</div>;
}
