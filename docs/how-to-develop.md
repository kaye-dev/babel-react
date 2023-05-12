# npm パッケージの開発の仕方

## 前提条件

- Node.js と npm がインストールされていること
- `babel-react` と `sample-app` の両方のプロジェクトがローカルマシン上に存在すること

## 手順

1. ターミナルを開き、`babel-react` パッケージのルートディレクトリに移動します。
2. `npm link` コマンドを実行して、パッケージをグローバルにリンクします
3. 次に、`sample-app` プロジェクトのルートディレクトリに移動します(sample-app は npm install したいプロジェクト)
4. `npm link` コマンドを実行して `babel-react` パッケージをリンクします

`babel-react` で変更が加えられたら `npm build` をするとリアルタイムで変更が反映されるようになります。
実際に npm install していないので入力補完に出ない可能性があるのでその際は npm install する予定のプロジェクトで `import BabelReact from 'babel-react';` と直接書けばエラーが発生せず `import` することができます。
