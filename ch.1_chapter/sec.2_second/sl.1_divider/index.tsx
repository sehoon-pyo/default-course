import { Paragraph, Slide, Title } from "../../../elements";

const text = {
  label: "SECTION 2",
  title: "두 번째 section",
  desc: "이 section에서 다룰 내용을 한 줄로 쓴다",
};

export default function SectionDivider() {
  return (
    <Slide layout="section">
      <Paragraph slot="label" value={text.label} />
      <Title value={text.title} />
      <Paragraph value={text.desc} />
    </Slide>
  );
}
