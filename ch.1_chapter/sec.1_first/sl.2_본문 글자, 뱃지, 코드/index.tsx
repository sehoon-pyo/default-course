import { Bullets, Slide, Title, badge, code, t } from "../../../elements";

const text = {
  title: "본문 글자, 뱃지, 코드",
  items: [
    "본문은 --size-body 크기로 그려진다",
    t`뱃지: ${badge("green", "green")} ${badge("red", "red")} ${badge("blue", "blue")} ${badge("gray", "gray")}`,
    t`코드는 ${code("const a = 1;")} 처럼 쓴다`,
    "문단 사이의 간격은 --slot-gap이 정한다",
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
