import { Shape, Slide, Text, Title } from "../../../elements";

const text = {
  title: "공통 색",
  primary: "--color-primary",
  primaryDark: "--color-primary-dark",
  surface: "--color-surface",
  muted: "--color-muted",
  body: "--color-text",
  codeBg: "--color-code-bg",
};

export default function Colors() {
  return (
    <Slide layout="content-title-only">
      <Title value={text.title} />
      <Shape kind="rect" at={{ x: 77, y: 230, w: 556, h: 200 }} fill="primary" />
      <Text at={{ x: 77, y: 440, w: 556 }} size={32} value={text.primary} />
      <Shape kind="rect" at={{ x: 683, y: 230, w: 556, h: 200 }} fill="primary-dark" />
      <Text at={{ x: 683, y: 440, w: 556 }} size={32} value={text.primaryDark} />
      <Shape kind="rect" at={{ x: 1289, y: 230, w: 556, h: 200 }} fill="surface" />
      <Text at={{ x: 1289, y: 440, w: 556 }} size={32} value={text.surface} />
      <Shape kind="rect" at={{ x: 77, y: 590, w: 556, h: 200 }} fill="muted" />
      <Text at={{ x: 77, y: 800, w: 556 }} size={32} value={text.muted} />
      <Shape kind="rect" at={{ x: 683, y: 590, w: 556, h: 200 }} fill="text" />
      <Text at={{ x: 683, y: 800, w: 556 }} size={32} value={text.body} />
      <Shape kind="rect" at={{ x: 1289, y: 590, w: 556, h: 200 }} fill="code-bg" line={{ color: "muted", width: 2 }} />
      <Text at={{ x: 1289, y: 800, w: 556 }} size={32} value={text.codeBg} />
    </Slide>
  );
}
