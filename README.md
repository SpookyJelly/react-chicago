# React Chicago

![](./readme/logo-temp.png)

**React Chicago is Simple Typo Animation Component in Style of React**

이 문서는 [한국어](https://github.com/SpookyJelly/react-chicago/blob/main/readme/readme-ko.md)로도 읽을 수 있습니다.

### The origin of a name

---

[Link](https://en.wikipedia.org/wiki/Thompson_submachine_gun)

### Features

---

- Fully isolated typo animation components
- Free choice of cursor and text colors

**View [Showcase](https://spookyjelly.github.io/react-chicago/) in Here**

### Why I do use React-Chicago?

---

- Maintainer is always active! You can ask him/her fix error and get feedback really fast
- Really Simple to use, it's be free to write on node 16.x >=

## Usage

### Installation

```bash
npm install react-chicago
yarn add react-chicago
```

### API

---

| Property    | Desciption                   | Type              | Mandatory | Default   |
| ----------- | ---------------------------- | ----------------- | --------- | --------- |
| text        | text to animate              | string            | M         | -         |
| color       | color of text                | string            | O         | 'black'   |
| interval    | animation text interval time | number            | O         | 100ms     |
| cursorColor | color of cursor              | string            | O         | 'black'   |
| cursorStyle | changes cursor icon          | "default"\|"typo" | O         | 'default' |
| className   | The additional css class     | string            | O         | -         |
| style       | The style object for Wrapper | CSSProperties     | O         | -         |

![](./readme/example.gif)

```typescript
<Chicago
	text="Hello, world!"
	color="#BADA55"
	interval=100
	cursorColor="tomato"
	cursorStyle="default"
/>
```

## Get involved

Contributions are always welcome!

Please take a moment to review React-Chicago!🦄

🐛 **Found a bug?**

Let us know by [creating an issue][new-issue].

❓ **Have a question? Interested in future feature??**

[Github Discussions][new-discussions] is good place to start

🕵️‍♂️ **Translating Readme/Showcase is also very welcome!! just give me a [PR][pull-request]**

### TODOS

---

- vary options of cursor style
- re-writte animation
- API materialization

[new-issue]: https://github.com/SpookyJelly/react-chicago/issues/new
[new-discussions]: https://github.com/SpookyJelly/react-chicago/discussions
[pull-request]: https://github.com/SpookyJelly/react-chicago/pulls
