import { Chip, type ChipProps } from "@/elements";

/** `assets/`의 아이콘 이미지. 키는 파일 이름(`icon-file.svg`)이다. */
const icons = Object.fromEntries(
  Object.entries(import.meta.glob<string>("../assets/icon-*.svg", { eager: true, query: "?url", import: "default" })).map(
    ([path, url]) => [path.split("/").pop()!, url],
  ),
);

/**
 * 앞에 이미지가 붙고 내용을 넣을 수 있는 칩. `icon`에 `assets/`의 파일 이름(`icon-claude.svg`)을 주면 그 이미지가 붙는다.
 * 생략하면 아이콘 없이 글자만 있는 칩이 된다. 이름에 맞는 파일이 없으면 오류로 알린다.
 */
export function IconChip({ icon, ...props }: ChipProps) {
  if (icon === undefined) return <Chip {...props} />;
  const src = icons[icon];
  if (!src) throw new Error(`[IconChip] 아이콘 "${icon}"을 찾을 수 없습니다. assets/의 파일 이름: ${Object.keys(icons).join(", ")}`);
  return <Chip {...props} icon={src} />;
}
// 래퍼는 자기가 들어갈 슬롯 종류를 원래 요소와 같게 알린다.
IconChip.slotKinds = Chip.slotKinds;
