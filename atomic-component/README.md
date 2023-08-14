# 1주차 React 과제

## 피그마 시안

- [Figma 링크](https://www.figma.com/file/rHbGRhza07Y58KEgZz8eDz/Untitled?type=design&node-id=0%3A1&mode=design&t=aJJp6CVL74sgIPye-1)

![버튼 3종류](/atomic-component/image.png)

- 3종류의 버튼을 만들고, hover한 경우를 variant로 주었습니다.

## 구현 화면

![구현 화면](/atomic-component/react1.gif)

## 파일 구조

    src
    ├── App.css
    ├── App.jsx
    ├── layout
    │   ├── Header
    │   │    ├── parts
    │   │    │    ├── MainMenu.jsx
    │   │    │    ├── SubButtons.jsx
    │   │    │    ├── Heading.jsx
    │   │    │    ├── MenuLists.jsx
    │   │    │    ├── MenuList.jsx
    │   │    │    └── Button.jsx
    │   │    ├── Header.css
    │   │    └── Header.jsx
    │   └──  RootLayout.jsx
    ├── index.css
    └── main.jsx

### RootLayout.jsx

```js
RootLayout.jsx
    ├── Header.jsx
    └── main
```

### Header.jsx

```js
Header.jsx
    └── header
        ├── MainMenu.jsx
        └── SubButtons.jsx
```

#### MainMenu.jsx

```js
MainMenu.jsx
    └── div
        ├── Heading.jsx
        └── MenuLists.jsx
```

#### MenuLists.jsx

```js
MenuLists.jsx
  └── ul
      ├── MenuList.jsx (title: 제품 소개, hasSubMenu:)
      ├── MenuList.jsx (title: 교육 콘텐츠, hasSubMenu: yes)
      ├── MenuList.jsx (title: 솔루션, hasSubMenu: no)
      ├── MenuList.jsx (title: 고객사례, hasSubMenu: no)
      ├── MenuList.jsx (title: 뉴스룸, hasSubMenu: no)
      └── MenuList.jsx (title: 엘리스, hasSubMenu: yes)

```

#### SubButtons.jsx

```js
SubButtons.jsx
  └── div
      ├── Button.jsx (type: language)
      ├── Button.jsx (type: login)
      └── Button.jsx (type: ask)
```

## Atomic Component

### MenuList.jsx

```js
import "../Header.css";
function MenuList({ title, hasSubMenu }) {
  return (
    <li>
      <button className="defaultMenu">
        <span className="defaultText">{title}</span>
        {hasSubMenu === "yes" ? (
          <span>
            <img src="/src/assets/arrow.svg" className="menuImage" />
          </span>
        ) : (
          ""
        )}
      </button>
    </li>
  );
}

export default MenuList;
```

### Button.jsx

```js
function Button({ type }) {
  let buttonText = "";
  let buttonClass = "";

  switch (type) {
    case "language":
      buttonText = "";
      buttonClass = "language";
      break;
    case "login":
      buttonText = "로그인";
      buttonClass = "login";
      break;
    case "ask":
      buttonText = "도입문의";
      buttonClass = "ask";
      break;
  }
  return (
    <button className={buttonClass}>
      <span className={buttonClass === "language" ? "language-icon" : null}>
        {buttonText}
      </span>
    </button>
  );
}

export default Button;
```

## 회고

Layout중 Header부분을 나눠 컴포넌트화했는데, 디렉터리 구조를 이렇게 가져가도 되는지 의문이다.

컴포넌트를 분리하는 과정에서, 컴포넌트 작명에 굉장히 고통을 받았다. 그 고민에 비해 컴포넌트명을 잘 작성하진 못한 것 같은데, 연습이 필요한 부분이 필요함을 느낀다.

또한, 이렇게까지 분리를 하는게 맞는 것일까 하는 고민도 공존했는데 이 또한,, 많이 만들어보고 설계해봐야할 부분이다.
