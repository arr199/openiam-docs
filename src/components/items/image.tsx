import Image from "next/image";

export function PreviewImage({ url }: { url: string }): React.ReactElement {
  return (
    <div className="mt-10 w-120 aspect-square relative">
      <Image className="rounded" fill src={url} alt="error image" />
    </div>
  );
}
