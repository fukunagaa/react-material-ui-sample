途中


# react-material-ui-sample
googleが提供するmaterial-uiを使ってみる
material-uiのレイアウトが気になった
振り返れるsampleの作成が目的

## プロジェクトの作成

- フォルダの作成

```
$ mkdir react-material-ui-sample
$ cd react-material-ui-sample
```

- 初期化

```
$ npm init -y
```

- material-ui を使うために react material-ui をインストール

```
$ npm install @material-ui/core
$ npm install --save-dev react react-dom @types/react-dom
```

- webpack babel の導入

```
$ npm install --save-dev @babel/core @babel/plugin-proposal-class-properties @babel/polyfill @babel/preset-env @babel/preset-react webpack webpack-cli
$ npm install --save-dev webpack-dev-serve babel-loader
```
