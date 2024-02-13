import Link from "next/link";
import { pages } from "@/lib/data";
import { headers } from "next/headers";
import { Title } from "@/components/items/title";
import { Description } from "@/components/items/description";
import { Wrapper } from "@/components/items/wrapper";

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
      <ul className="list-disc mt-2 pl-4">
        <li>
          Unified view of identity across all application (both on-premise and
          in the cloud)
        </li>
        <li>Flexible role based access control (RBAC) model</li>
        <li>
          User life cycle management with the ability to provision / deprovision
          identites and the permissions across applications
        </li>
        <li>Self-service portal supporting</li>
      </ul>
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
