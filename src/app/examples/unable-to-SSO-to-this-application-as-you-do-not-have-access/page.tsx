import { pages } from "@/lib/data";
import { headers } from "next/headers";
import Image from "next/image";

export default function Page(): JSX.Element {
  const item = pages.examples.items.filter(
    (item) => item.link === headers().get("next-url"),
  )[0];
  return (
    <div className="px-12 py-8 max-w-3xl ">
      <div>
        <h1 className="text-3xl font-bold capitalize ">{item?.label}</h1>
      </div>
      <p className="mt-4">
        The following error points to a problem with access rights of the user
        to an specific application. Example: user1 is entitled to access app1
        but not app2 and the requested application was app2.
      </p>
      <div className="mt-10 w-120 aspect-square relative">
        <Image className="rounded" fill src={item.imageUrl ?? ""} alt="" />
      </div>
    </div>
  );
}
