import { Description } from "@/components/items/description";
import { Title } from "@/components/items/title";
import { Wrapper } from "@/components/items/wrapper";
import { pages } from "@/lib/data";
import { headers } from "next/headers";
import Link from "next/link";

export default function Page(): JSX.Element {
  const item = pages.gettingStarted.items.filter(
    (item) => item.link === headers().get("next-url"),
  )[0];
  return (
    <Wrapper>
      <Title text={item?.label} />
      <Description
        text="OpenIAM is an identity and access management platform providing end
        customer with the following capabilities:"
      />

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
    </Wrapper>
  );
}
