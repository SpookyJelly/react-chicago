# 리액트-시카고

![](./logo-temp.png)

리액트 시카고는 간단하게 타자기 스타일의 애니메이션을 만들어주는 컴포넌트입니다.

### 이름의 유래

---

[바로 가기](https://en.wikipedia.org/wiki/Thompson_submachine_gun)

### 기능

---

- 완전히 고립된 타이핑 애니메이션 컴포넌트
- 자유롭게 선택 가능한 커서, 텍스트 스타일

**쇼케이스를 [여기서](https://spookyjelly.github.io/react-chicago/) 확인해보세요**

### Why I do use React-Chicago?

---

- 제작자가 항상 대기중입니다! 버그, 기능 추가 등등 오픈소스에서 파생되는 각종 문제들에 굉장히 신속히 대응합니다
- 사용이 매우 간단합니다. node 16.x >= 이기만 하면 어디서든 정상 동작합니다.

## 사용법

### 설치 방법

```bash
npm install react-chicago
yarn add react-chicago
```

### API

---

| Property    | Desciption                     | Type              | Mandatory | Default   |
| ----------- | ------------------------------ | ----------------- | --------- | --------- |
| text        | 애니메이션을 줄 텍스트         | string            | M         | -         |
| color       | 텍스트의 색상                  | string            | O         | 'black'   |
| interval    | 타이핑 애니메이션의 딜레이     | number            | O         | 100ms     |
| cursorColor | 커서 색상                      | string            | O         | 'black'   |
| cursorStyle | 커서 아이콘 바꾸기             | "default"\|"typo" | O         | 'default' |
| className   | 추가적인 css className         | string            | O         | -         |
| style       | 컴포넌트 래퍼에 적용되는 style | CSSProperties     | O         | -         |

![](./example.gif)

```typescript
<Chicago
	text="Hello, world!"
	color="#BADA55"
	interval=100
	cursorColor="tomato"
	cursorStyle="default"
/>
```

## 더 발전시키기

컨트리뷰트는 언제나 환영입니다!!

리액트-시카고를 잠시만 살펴봐주세요!🦄

🐛 **버그를 찾으셨다고요??**

[이슈 생성][new-issue]으로 알려주세요.

❓ **질문이 있으시다고요? 기능 추가에 관심이 있으시다고요??**

[Github Discussions][new-discussions]은 이런 대화의 장에 딱 어울릴꺼에요

🕵️‍♂️ **Readme / Showcase 번역도 물론 대환영이에요! [PR][pull-request] 하나만 넣어주세요**

### TODOS

---

- 커서 스타일 다양화 (유저 자유도 부여)
- 다시 쓰기 애니메이션 추가
- API 구체화, (text 재생되는 방식, 키프레임 기반으로 루프 등등..)

### To locals

---

- 이슈는 자유롭게 한국어로 남겨주셔도 됩니다. 미숙한 코드 봐주셔서 감사합니다.

[new-issue]: https://github.com/SpookyJelly/react-chicago/issues/new
[new-discussions]: https://github.com/SpookyJelly/react-chicago/discussions
[pull-request]: https://github.com/SpookyJelly/react-chicago/pulls
