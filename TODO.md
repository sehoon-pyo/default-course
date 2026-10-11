# 해야 할 일

이 template에 아직 반영하지 않은 도구(course-maker)의 변경이다. 반영하면 항목을 지우고, 항목이 없으면 이 파일도 지운다.
template을 복사하면 이 파일도 따라가므로, 반영하기 전에 복사한 강의에서는 같은 수정을 그 강의에 직접 한다.

## 1. 슬라이드 번호 슬롯 추가 (2026-10-12)

- 근거: course-maker PR #41(이슈 #39), `docs/adr/[261012_004]_adr.md`의 "강의에 필요한 수정", `docs/adr/[261008_003]_adr.md` ADR-16
- 현상: 도구에 번호 슬롯(`type: "number"`)이 생겼다. 슬롯을 선언한 layout의 오른쪽 아래에 `n / N`이 그려진다. 이 template의 마스터에는 번호 슬롯이 없어서 미리보기와 HTML 내보내기에 번호가 나오지 않는다. 깨지는 것은 없다.

### 고칠 곳: `masters/default/index.tsx`

1. types import에 `NumberSlot`을 더한다.
   ```ts
   import type { Layer, NumberSlot, TextSlot } from "@/masters/types";
   ```
2. `contentTitle` 아래에 번호 슬롯을 정의한다. 값은 ADR-16을 따르고, `--color-muted`는 이미 tokens에 있다.
   ```ts
   /** 컨텐츠 계열 layout의 오른쪽 아래 슬라이드 번호(`n / N`). 기존 PPTX의 번호 자리이다. */
   const slideNumber: NumberSlot = { id: "number", type: "number", x: 1356, y: 1001, w: 432, h: 58, size: 24, color: "muted", align: "right", anchor: "middle" };
   ```
3. `content`, `content-title-only` layout의 `slots` 배열 끝에 `slideNumber`를 넣는다. `title`, `section-divider`, `toc`에는 넣지 않는다(ADR-16).

### 같이 고칠 것

- `README.md`의 "처음 열면 보이는 것" 또는 "내 강의로 바꾸기"에 번호 설명을 한 줄 더한다. 번호는 `content`, `content-title-only` 장의 오른쪽 아래에 나오고, 숨김 슬라이드에서는 "숨김"으로 보이며, 한 장에서 빼려면 `<Slide number={false}>`를 쓴다.

### 확인

- course-maker 폴더에서 `npm run typecheck`
- 미리보기에서 `content`, `content-title-only` 장의 오른쪽 아래에 `n / N`이 보이고, `title`, `section-divider`, `toc` 장에는 없는지 본다.
- 내보내기로 `ch.1_chapter`를 HTML로 내보내 번호가 보이는지 본다.
- 번호가 본문이나 `at`으로 놓은 요소에 가리는 장이 없는지 본다.
