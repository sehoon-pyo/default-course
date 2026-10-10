# default-course

[course-maker](https://github.com/sehoon-pyo/course-maker)의 강의 template입니다. 새 강의의 초깃값으로 쓰며, 복사한 시점에 고정됩니다.

## 사용법
1. 이 저장소에서 **Use this template**로 내 강의 저장소를 만듭니다.
2. course-maker를 clone한 폴더의 `courses/` 안에 내 강의 저장소를 clone합니다.
   ```
   cd course-maker/courses
   git clone https://github.com/{내 계정}/{내 강의}.git
   ```
3. course-maker에서 `npm run dev`를 실행하면 미리보기의 강의 목록에 나타납니다.

## 들어 있는 것
| 슬라이드 | layout | 설명 |
|---|---|---|
| `sl.1_title` | `title` | 대제목 |
| `sl.2_toc` | `toc` | 목차 (section으로 자동으로 채움) |
| `sec.N/sl.1_divider` | `section` | section 구분(소제목) |
| `sec.N/sl.2_content` | `content` | 제목과 본문 |
| `sec.N/sl.3_title-only` | `title-only` | 제목만 있고 본문은 자유 배치 (`IconChip` 예시) |

- 순서는 `meta.ts`의 배열이 정합니다. chapter, section, slide를 추가하면 폴더와 상위 `meta.ts`의 배열을 둘 다 고칩니다.
- `masters/default/`가 슬라이드의 디자인(색, 크기, layout)을 정합니다. layout은 `title`, `content`, `title-only`, `section`, `toc`입니다.
- `elements/IconChip.tsx`는 앞에 이미지가 붙는 칩입니다. `assets/icon-default.svg`가 기본 이미지이고, `icon`으로 바꿀 수 있습니다.
- `export/`는 내보내기 산출물이 쌓이는 폴더이며 git이 추적하지 않습니다.

## 확인하지 못한 것
- 이 template이 만들어진 시점의 course-maker 도구에서만 확인했습니다. 도구가 바뀌어 깨지면 course-maker의 `docs/adr/`에 적힌 "강의에 필요한 수정"을 따릅니다.
