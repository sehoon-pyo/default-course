import { Image, Shape, Slide, Text, Title } from "../../../elements";
import logo from "../../../masters/default/assets/logo.svg";
import iconFile from "../../../assets/icon-file.svg";
import iconClaude from "../../../assets/icon-claude.svg";
import iconTerminal from "../../../assets/icon-terminal.svg";

const text = {
  title: "이미지",
  logo: "masters/default/assets/logo.svg (title layout의 로고)",
  iconFile: "assets/icon-file.svg (IconChip의 기본 아이콘)",
  iconClaude: "assets/icon-claude.svg (ClaudeChip, PromptBox)",
  iconTerminal: "assets/icon-terminal.svg (TerminalChip)",
};

const frame = { color: "surface", width: 3 };

export default function Assets() {
  return (
    <Slide layout="content-title-only">
      <Title value={text.title} />
      <Shape kind="rect" at={{ x: 77, y: 260, w: 400, h: 240 }} fill="#ffffff" line={frame} />
      <Image src={logo} at={{ x: 117, y: 330, w: 320, h: 100 }} />
      <Text at={{ x: 77, y: 520, w: 400 }} size={26} value={text.logo} />
      <Shape kind="rect" at={{ x: 497, y: 260, w: 400, h: 240 }} fill="#ffffff" line={frame} />
      <Image src={iconFile} at={{ x: 637, y: 320, w: 120, h: 120 }} />
      <Text at={{ x: 497, y: 520, w: 400 }} size={26} value={text.iconFile} />
      <Shape kind="rect" at={{ x: 917, y: 260, w: 400, h: 240 }} fill="#ffffff" line={frame} />
      <Image src={iconClaude} at={{ x: 1057, y: 320, w: 120, h: 120 }} />
      <Text at={{ x: 917, y: 520, w: 400 }} size={26} value={text.iconClaude} />
      <Shape kind="rect" at={{ x: 1337, y: 260, w: 400, h: 240 }} fill="#ffffff" line={frame} />
      <Image src={iconTerminal} at={{ x: 1477, y: 320, w: 120, h: 120 }} />
      <Text at={{ x: 1337, y: 520, w: 400 }} size={26} value={text.iconTerminal} />
    </Slide>
  );
}
