import { Chip, type ChipProps } from "@/elements";
import defaultIcon from "../assets/icon-default.svg";

/**
 * 앞에 이미지가 붙고 내용을 넣을 수 있는 칩. 도구의 `Chip`에 이 강의의 기본 아이콘을 정해 둔 일반형이다.
 * `icon`을 주면 그 이미지로 바뀌므로, 아이콘이 정해진 칩(예: `ClaudeChip`)은 이것을 감싸서 만든다.
 */
export function IconChip({ icon = defaultIcon, ...props }: ChipProps) {
  return <Chip {...props} icon={icon} />;
}
// 래퍼는 자기가 들어갈 슬롯 종류를 원래 요소와 같게 알린다.
IconChip.slotKinds = Chip.slotKinds;