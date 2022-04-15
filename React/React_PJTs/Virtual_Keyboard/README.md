<br />

`npm init -y`

`npm i -D webpack webpack-cli webpack-dev-server`

package.json에서 버전 변경 후

`npm i`

<br />

`npm i -D terser-webpack-plugin`

`npx webpack`

<br />

`npm i -D html-webpack-plugin`

`npm i -D mini-css-extract-plugin css-loader css-minimizer-webpack-plugin`

<br />

`npx webpack-dev-server`

package.json 에 scripts 에 "dev": "webpack-dev-server" 

`npm run dev`

<br />

---

<br />

`npm i -D eslint`

`npm install --save-dev --save-exact prettier`

<br />

^ <- 패키지 없데이트시 minor 버전 이하 업데이트 허용

--save-exact 옵션 사용하면 ^ 없이 설치됨

<br />

`npm i -D eslint-config-prettier eslint-plugin-prettier`

<br />

`npx eslint --init`

<br />

eslint, prettier, open in browser 익스텐션 설치

<br />

Preferences: Open Workspace Settings (JSON) 가서

```json
{
    "editor.formatOnSave": true,
    "editor.codeActionsOnsave": {
        "source.fixAll.eslint": true
    }
}
```

<br />

---

<br />