import { Paragraph, Slide, Title } from "../../elements";

const text = {
  title: "강의 제목",
  subtitle: "부제 또는 chapter 이름",
};

export default function ChapterTitle() {
  return (
    <Slide layout="title">
      <Title value={text.title} />
      <Paragraph value={text.subtitle} />
    </Slide>
  );
}