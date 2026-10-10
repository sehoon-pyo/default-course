import { Paragraph, Slide, Title } from "../../elements";

const text = {
  title: "default 마스터 미리보기",
  subtitle: "마스터의 layout, 색, 요소를 실제 슬라이드로 확인한다",
};

export default function ChapterTitle() {
  return (
    <Slide layout="title">
      <Title value={text.title} />
      <Paragraph value={text.subtitle} />
    </Slide>
  );
}
