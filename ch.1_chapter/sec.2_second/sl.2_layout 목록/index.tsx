import { Bullets, Slide, Title, code, t } from "../../../elements";

const text = {
  title: "layout 목록",
  items: [
    t`${code("title")}: 대제목`,
    t`${code("section-divider")}: section 구분(소제목)`,
    t`${code("content")}: 제목과 본문 (기본)`,
    t`${code("content-title-only")}: 제목만 있고 본문은 자유 배치`,
    t`${code("toc")}: 목차`,
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
