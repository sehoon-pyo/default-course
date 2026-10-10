import { IconChip, PromptBox, Slide, Text, Title } from "../../../elements";
import claude from "../../../assets/icon-claude.svg";

const text = {
  title: "Chip과 PromptBox",
  chipLabel: "Chip: icon에 파일 이름을 주면 아이콘이 붙고, 생략하면 글자만 있다",
  fileChip: "파일.txt",
  claudeChip: "/clear",
  terminalChip: "npm run dev",
  textChip: "아이콘 없는 칩",
  promptLabel: "PromptBox: 프롬프트를 보여 주는 상자",
  prompt: "프롬프트 내용이 여기에 들어간다.",
};

export default function ChipAndPromptBox() {
  return (
    <Slide layout="content-title-only">
      <Title value={text.title} />
      <Text at={{ x: 77, y: 230, w: 1500 }} size={36} value={text.chipLabel} />
      <IconChip at={{ x: 77, y: 300 }} icon="icon-file.svg" value={text.fileChip} />
      <IconChip at={{ x: 350, y: 300 }} icon="icon-claude.svg" value={text.claudeChip} />
      <IconChip at={{ x: 575, y: 300 }} icon="icon-terminal.svg" value={text.terminalChip} />
      <IconChip at={{ x: 920, y: 300 }} value={text.textChip} />
      <Text at={{ x: 77, y: 470, w: 1500 }} size={36} value={text.promptLabel} />
      <PromptBox at={{ x: 77, y: 540, w: 570, h: 150 }} icon={claude} value={text.prompt} />
    </Slide>
  );
}
