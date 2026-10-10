# default-course

[course-maker](https://github.com/sehoon-pyo/course-maker)의 강의 template입니다. 새 강의를 만들 때 이 저장소를 복사해서 시작합니다. 복사한 시점의 내용이 내 강의의 초깃값이 되고, 이후 이 저장소가 바뀌어도 내 강의에는 반영되지 않습니다.

## 가져가서 시작하기
먼저 course-maker를 설치합니다(설치 방법은 course-maker의 README를 따릅니다).

1. 이 저장소에서 **Use this template**를 눌러 내 강의 저장소를 만듭니다.
2. course-maker를 clone한 폴더의 `courses/` 안에 내 강의 저장소를 clone합니다.
   ```
   cd course-maker/courses
   git clone https://github.com/{내 계정}/{내 강의}.git
   ```
3. course-maker 폴더에서 `npm run dev`를 실행합니다.
4. 브라우저의 미리보기에서 강의 목록의 **새 강의**를 고르면 이 template이 보입니다.

`Use this template` 없이 이 저장소를 그대로 clone했다면 `origin`이 이 저장소를 가리킵니다. 내 저장소를 만든 뒤 `git remote set-url origin {내 저장소 주소}`로 바꿉니다.

## 처음 열면 보이는 것
미리보기 chapter 하나가 들어 있습니다. 마스터(디자인)가 슬라이드에서 어떻게 보이는지 실제 슬라이드로 확인하는 용도입니다.

| 슬라이드 | layout | 보여 주는 것 |
|---|---|---|
| `sl.1_표지` | `title` | 대제목 |
| `sl.2_목차` | `toc` | 목차 (section으로 자동으로 채움) |
| `sec.1/sl.1_색과 글자(표지)`, `sec.2/sl.1_요소와 이미지(표지)` | `section-divider` | section 구분(소제목) |
| `sec.1/sl.2_본문 글자, 뱃지, 코드` | `content` | 본문 글자, 뱃지, 코드 |
| `sec.1/sl.3_공통 색` | `content-title-only` | 공통 색 6개 (토큰 이름 표기) |
| `sec.2/sl.2_layout 목록` | `content` | layout 목록 |
| `sec.2/sl.3_칩과 프롬프트 상자` | `content-title-only` | `IconChip`, `PromptBox` |
| `sec.2/sl.4_이미지` | `content-title-only` | 마스터와 강의가 쓰는 이미지 |

슬라이드 폴더 이름은 `sl.{번호}_{슬라이드 이름}` 형식이고, 슬라이드 이름이 사이드바에 그대로 보입니다.

## 내 강의로 바꾸기
- **강의 제목**: `meta.ts`의 `title`을 바꿉니다. 미리보기의 강의 목록에 이 이름이 나옵니다.
- **chapter, section, slide 추가와 삭제**: 폴더를 만들거나 지우고, 상위 `meta.ts`의 배열도 같이 고칩니다. **순서는 폴더 이름의 번호가 아니라 `meta.ts`의 배열이 정합니다.** 둘이 어긋나면 콘솔에 경고가 나오고 배열에 없는 폴더는 보이지 않습니다.
  - course: `meta.ts`의 `chapters`
  - chapter: `meta.ts`의 `sections`, 그리고 section 앞뒤 슬라이드는 `head`, `tail`
  - section: `meta.ts`의 `slides`
- **미리보기용 슬라이드 정리**: `ch.1_chapter` 안의 슬라이드를 내 내용으로 바꾸거나 지웁니다. 슬라이드는 TSX 파일 하나(`index.tsx`)이고, 문구는 파일 맨 위 `text` 객체에 모아 둡니다.
- **layout 고르기**: 슬라이드에서 `<Slide layout="...">`로 고릅니다. layout은 `title`, `content`(생략하면 이것), `content-title-only`, `section-divider`, `toc`입니다.
- **디자인(색, 글자 크기, 로고, layout)**: `masters/default/index.tsx`가 정합니다. 로고는 `masters/default/assets/logo.svg`입니다.
- **칩의 아이콘**: 아이콘 이미지를 `assets/`에 `icon-{이름}.svg`로 넣고, 슬라이드에서 `<IconChip icon="icon-{이름}.svg" value="…" />`로 씁니다. `icon`을 생략하면 아이콘 없이 글자만 있는 칩이 됩니다. 기본으로 `icon-file.svg`, `icon-claude.svg`, `icon-terminal.svg`가 들어 있습니다.
- **강의에서만 쓰는 요소**: `elements/`에 만들고 `elements/index.ts`에서 내보냅니다. 슬라이드는 `../../../elements`(section 안), `../../elements`(chapter 바로 아래)에서 가져오면 도구의 요소와 이 강의의 요소를 한 줄로 쓸 수 있습니다.

## 내보내기
미리보기 상단 바의 `내보내기` 버튼에서 강의와 chapter를 고르면 `export/{연월일시분초}/` 폴더에 chapter마다 HTML 파일이 저장됩니다. 숨김 슬라이드(`{ id, hidden: true }`)는 미리보기에는 보이고 내보내기에서는 빠집니다. `export/`는 git이 추적하지 않습니다.

## 도구를 업데이트할 때
course-maker를 `git pull`로 업데이트하면 이미 만든 강의가 동작하지 않을 수 있습니다. 필요한 수정은 course-maker의 `docs/adr/`에 있는 해당 ADR의 "강의에 필요한 수정"에 적혀 있습니다.
