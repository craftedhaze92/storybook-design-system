# Storybook Design System

실무에서 Storybook을 도입하기 위해 강의를 따라가며 학습한 디자인 시스템 프로젝트입니다.
React + TypeScript + Tailwind CSS로 UI 컴포넌트를 만들고, Storybook으로 문서화·시각적 테스트·접근성 점검까지 해 보는 것을 목표로 합니다.

## 기술 스택

| 구분 | 사용 기술 |
| --- | --- |
| UI | React 19, TypeScript 5.9 |
| 스타일 | Tailwind CSS 4 (`@theme` 기반 디자인 토큰), Noto Sans KR |
| 빌드 | Vite 8 |
| 문서화 | Storybook 10 (`@storybook/react-vite`) |
| 테스트 | Vitest + Playwright (`@storybook/addon-vitest`, 브라우저 모드) |
| 애드온 | addon-docs, addon-a11y, addon-vitest, addon-mcp, Chromatic |

## 시작하기

```bash
npm install

npm run storybook        # Storybook 개발 서버 (http://localhost:6006)
npm run build-storybook  # Storybook 정적 빌드 (storybook-static/)

npm run dev              # Vite 앱 개발 서버
npm run build            # 타입 체크 + 앱 빌드
npm run lint             # ESLint

npx vitest --project=storybook  # 모든 스토리를 브라우저에서 테스트로 실행
```

## 컴포넌트

| 분류 (Storybook 경로) | 컴포넌트 | 설명 |
| --- | --- | --- |
| Buttons | `PrimaryButton` | `dark` / `light` / `social` / `text` 4가지 테마와 비활성 상태를 지원하는 기본 버튼 |
| Buttons | `IconButton` | 아이콘 이미지만 표시하는 버튼 |
| Buttons | `TagButton` | 선택 여부(`isChecked`)에 따라 스타일이 바뀌는 태그형 버튼 |
| List | `TagList` | `TagButton` 목록과 단일 선택 상태를 관리하는 제네릭 컴포넌트 |
| TextFields | `DefaultTextField` | 포커스·입력 상태에 따른 밑줄 색상, 지우기 아이콘, 에러 메시지를 갖춘 입력 필드 |
| Text | `Label`, `ErrorMessage` | 입력 필드용 라벨과 에러 문구 |
| Navigation | `NavigationBar` | 뒤로가기·제목·닫기 버튼을 조합하는 상단 바 (다크 모드 지원) |

> `Button`, `Header`, `Page`는 Storybook 초기 설정 시 생성되는 예제 컴포넌트입니다.

작은 컴포넌트를 조합해 큰 컴포넌트를 만드는 구조입니다.
예: `IconButton` + `ErrorMessage` → `DefaultTextField`, `TagButton` → `TagList`, `IconButton` → `NavigationBar`

## 디자인 토큰

`src/index.css`의 Tailwind `@theme`에 색상·모서리 반경을 토큰으로 정의하고, 컴포넌트에서는 `bg-primary`, `rounded-primary-button`처럼 토큰 이름의 유틸리티 클래스로 사용합니다.

| 토큰 | 값 | 용도 |
| --- | --- | --- |
| `--color-primary` | `#1d2745` | 메인 색상 |
| `--color-secondary` | `#1de5d4` | 포커스 강조 |
| `--color-tertiary` | `#f52c50` | 보조 강조 |
| `--color-mono100` ~ `300` | `#f1f1f1` / `#bebebe` / `#d6d7d9` | 비활성·테두리 |
| `--color-error` | `#d01e1e` | 에러 |
| `--color-social` | `#395997` | 소셜 로그인 버튼 |
| `--radius-primary-button` | `5px` | 기본 버튼 |
| `--radius-tag-button` | `17.5px` | 태그 버튼 |

타이포그래피는 `text-xs` / `text-sm` / `text-base` / `text-2xl`의 행간·굵기를 재정의해 사용합니다.

## 학습한 Storybook 내용

- **CSF 3 스토리 작성**: `meta` 객체 + `StoryObj`로 스토리를 정의하고, `satisfies Meta<typeof Component>`로 타입 안전성 확보
- **사이드바 구조화**: `title: "Buttons/PrimaryButton"`처럼 경로로 컴포넌트 분류
- **Controls / argTypes**: `select`, `boolean`, `text`, `object` 컨트롤과 `description`, `table.type`, `defaultValue`로 props 문서화
- **Autodocs**: `tags: ["autodocs"]`와 `react-docgen-typescript`로 props 표가 포함된 문서 페이지 자동 생성
- **Actions**: `storybook/test`의 `fn()`으로 이벤트 핸들러 호출 기록
- **Decorators**: 스토리를 고정 너비 래퍼로 감싸 실제 사용 환경과 비슷하게 렌더링
- **전역 설정 (`preview.tsx`)**: 폰트와 Tailwind CSS를 불러와 모든 스토리에 동일한 스타일 적용
- **접근성 점검**: `addon-a11y`로 스토리별 접근성 위반 사항 확인 (`test: "todo"` 모드)
- **스토리 기반 테스트**: `addon-vitest`로 작성한 스토리를 Playwright Chromium에서 테스트로 실행

## 프로젝트 구조

```
.
├── .storybook/
│   ├── main.ts         # 스토리 경로, 애드온, 프레임워크 설정
│   └── preview.tsx     # 전역 스타일·파라미터 설정
├── src/
│   ├── components/     # UI 컴포넌트
│   ├── stories/        # 컴포넌트별 *.stories.ts(x), Configure.mdx
│   ├── index.css       # Tailwind 및 디자인 토큰
│   ├── App.tsx
│   └── main.tsx
├── vite.config.ts      # Vite + Tailwind + Vitest(Storybook 테스트) 설정
└── package.json
```
