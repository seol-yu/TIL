## 리액트 컴포넌트 스타일링

<br />

### 목차

[Style Loaders](#Style_Loaders)

[CSS, SASS](#CSS_SASS)

[CSS module, SASS module](#CSS_module_SASS_module)

[Styled Components](#Styled_Components)

[React Shadow](#React_Shadow)

[Ant Design](#Ant_Design)

<br />

---

<br />

### Style_Loaders

<br />

.js, .jsx --> babel-loader -->

.css --> style-loader, css-loader -->

webpack <- 파일 확장자에 맞는 loader 에게 위임

<br />

`npx create-react-app style-loaders-example`

`cd style-loaders-example`

`npm run eject`

config 폴더 보면 webpack.config.js 있음

.css 검색해서 어떻게 처리하는지 보기

<br />

```jsx
import './App.css';
```

```jsx
import styles from './App.module.css';
```

```jsx
import './App.scss';
import './App.sass';
```

```jsx
import styles from './App.module.scss';
import styles from './App.module.sass';
```

<br />

[목차로](#목차)

<br />

---

<br />

### CSS_SASS

<br />

BEM

http://getbem.com/naming/

<br />

`npm i sass`

<br />

[목차로](#목차)

<br />

---

<br />

### CSS_module_SASS_module

<br />

Create React App 사이트에 Styles and Assets > Adding CSS Modules 참고

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### Styled_Components

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### React_Shadow

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### Ant_Design

<br />



<br />

[목차로](#목차)

<br />
