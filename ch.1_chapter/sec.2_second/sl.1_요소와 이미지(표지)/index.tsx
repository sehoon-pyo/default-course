import { Paragraph, Slide, Title } from "../../../elements";

const text = {
  label: "SECTION 2",
  title: "요소와 이미지",
  desc: "Chip, PromptBox와 마스터가 쓰는 이미지",
};

export default function SectionDivider() {
  return (
    <Slide layout="section-divider">
      <Paragraph slot="label" value={text.label} />
      <Title value={text.title} />
      <Paragraph value={text.desc} />
    </Slide>
  );
}
