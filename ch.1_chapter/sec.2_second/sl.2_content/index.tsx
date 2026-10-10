import { Bullets, Slide, Title, badge, t } from "../../../elements";

const text = {
  title: "컨텐츠 슬라이드 제목",
  items: [
    "제목 슬롯과 본문 슬롯이 있는 기본 layout이다",
    t`문장 안에서 ${badge("서식", "blue")}을 섞을 수 있다`,
    "layout을 생략하면 이 layout으로 그려진다",
  ],
};

export default function Content() {
  return (
    <Slide>
      <Title value={text.title} />
      <Bullets items={text.items} />
    </Slide>
  );
}