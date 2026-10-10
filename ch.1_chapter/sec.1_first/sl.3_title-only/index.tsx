import { IconChip, Slide, Text, Title } from "../../../elements";

const text = {
  title: "제목만 있는 슬라이드",
  note: "본문은 at={{ x, y, w, h }}로 자유롭게 배치한다.",
  chip: "앞에 이미지가 붙는 칩",
};

export default function TitleOnly() {
  return (
    <Slide layout="title-only">
      <Title value={text.title} />
      <Text at={{ x: 120, y: 240, w: 1500 }} size={36} value={text.note} />
      <IconChip at={{ x: 120, y: 340 }} value={text.chip} />
    </Slide>
  );
}