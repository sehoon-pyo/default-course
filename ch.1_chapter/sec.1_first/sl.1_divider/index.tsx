import { Paragraph, Slide, Title } from "../../../elements";

const text = {
  label: "SECTION 1",
  title: "첫 번째 section",
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
