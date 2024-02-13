import { pages } from "@/lib/data";
import { headers } from "next/headers";
import { Description } from "@/components/items/description";
import { PreviewImage } from "@/components/items/image";
import { Title } from "@/components/items/title";
import { Wrapper } from "@/components/items/wrapper";

export default function Page(): JSX.Element {
  // const item = pages.examples.items.filter(
  //   (item) => item.link === window.location.pathname,
  // )[0];
  const item = pages.examples.items.filter(
    (item) => item.link === headers().get("next-url"),
  )[0];
  return (
    <Wrapper>
      <Title text={item?.label} />
      <Description text="The following error is displayed when the user had an expired password." />
      <PreviewImage url={item?.imageUrl ?? ""} />
    </Wrapper>
  );
}
