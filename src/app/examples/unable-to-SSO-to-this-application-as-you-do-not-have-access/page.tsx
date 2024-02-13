import { Description } from "@/components/items/description";
import { PreviewImage } from "@/components/items/image";
import { Title } from "@/components/items/title";
import { Wrapper } from "@/components/items/wrapper";
import { pages } from "@/lib/data";
import { headers } from "next/headers";

export default function Page(): JSX.Element {
  const item = pages.examples.items.filter(
    (item) => item.link === headers().get("next-url"),
  )[0];
  return (
    <Wrapper>
      <Title text={item?.label} />
      <Description
        text="The following error points to a problem with access rights of the user
        to an specific application. Example: user1 is entitled to access app1
        but not app2 and the requested application was app2."
      />
      <PreviewImage url={item?.imageUrl ?? ""} />
    </Wrapper>
  );
}
