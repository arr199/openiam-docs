"use client";
import { pages } from "@/lib/data";
import Image from "next/image";

export default function Page(): JSX.Element {
  const item = pages.examples.items.filter(
    (item) => item.link === window.location.pathname,
  )[0];
  // const item = pages.examples.items.filter( (item) => item.link === headers().get("next-url")  )[0]
  return (
    <div className="px-12 py-8 max-w-3xl ">
      <div>
        <h1 className="text-3xl font-bold capitalize ">{item?.label}</h1>
      </div>
      <p className="mt-4">
        The following error is displayed when the user had an expired password.
      </p>

      <div className="mt-10 w-120 aspect-square relative">
        <Image className="rounded" fill src={item?.imageUrl ?? ""} alt="" />
      </div>
    </div>
  );
}
