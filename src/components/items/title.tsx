"use client";
export function Title({ text }: { text: string }): React.ReactElement {
  return <h1 className="text-3xl font-bold capitalize ">{text}</h1>;
}
