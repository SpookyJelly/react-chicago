# React Chicago

![](./readme/title.png)

**React Chicago is Simple Typo Animation Component in Style of React**

리액트 시카고는 간단하게 타자기 스타일의 애니메이션을 만들어주는 컴포넌트입니다.



### Features

---



- Fully isolated typo animation components
- Free choice of cursor and text colors





**View Showcase in Here**





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

[Github Discussions][new-discussions]  is good place to start





### TODOS

---



- vary options of cursor style
- re-writte animation
- API materialization





### Why I do use React-Chicago?

---

- Maintainer is always active! You can ask him/her fix error and get feedback really fast
- Really Simple to use, it's be free to write on node 16.x >=





### To locals

---



- 이슈는 자유롭게 한국어로 남겨주셔도 됩니다. 미숙한 코드 봐주셔서 감사합니다.





[new-issue]: https://github.com/SpookyJelly/react-chicago/issues/new
[new-discussions]:https://github.com/SpookyJelly/react-chicago/discussions
