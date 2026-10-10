import { Paragraph, Slide, Title } from "../../../elements";

const text = {
  label: "SECTION 1",
  title: "색과 글자",
  desc: "마스터 tokens의 색과 글자 크기, 뱃지, 코드",
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
