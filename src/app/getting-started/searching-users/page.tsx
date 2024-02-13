import { pages } from "@/lib/data";
import { headers } from "next/headers";
import Link from "next/link";

export default function Page(): JSX.Element {
  const item = pages.gettingStarted.items.filter(
    (item) => item.link === headers().get("next-url"),
  )[0];
  return (
    <div className="px-12 pt-8 max-w-3xl ">
      <div>
        <h1 className="text-3xl font-bold capitalize ">{item?.label}</h1>
      </div>
      <p className="mt-10">
        OpenIAM is an identity and access management platform providing end
        customer with the following capabilities:
      </p>

      <p className="mt-4">
        For more information visit
        <Link
          className="font-bold hover:underline"
          href="https://docs.openiam.com/docs-4.2.1.2/getting-started/1-what_is_openiam"
        >
          {" "}
          openaim documentation &rarr;
        </Link>
      </p>
    </div>
  );
}
