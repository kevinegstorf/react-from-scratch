# React Typescript from scratch

```shell
mkdir react-ts-app
```

```shell
cd react-ts-app && npm init -y
```

```shell
npm i react react-dom
```

```shell
npm i -D awesome-typescript-loader @types/react @types/react-dom @types/html-webpack-plugin html-webpack-plugin typescript webpack webpack-cli webpack-dev-server
```

```shell
mkdir src && cd src && touch index.tsx && touch index.html && mkdir components && touch app.tsx
```

`index.html`

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta http-equiv="X-UA-Compatible" content="ie=edge" />
		<title>React Typescript from Scratch</title>
	</head>
	<body>
		<section id="root"></section>
	</body>
</html>
```

`index.tsx`

```typescript
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';

const Index = () => {
	return <App />;
};

ReactDOM.render(<Index />, document.getElementById('root'));
```

`app.tsx`

```JavaScript
import * as React from "react";

export interface IAppProps {}

export default function IApp(props: IAppProps) {
  return <h1>Hello React Typescript!</h1>;
}
```

`tsconfig.json`

```json
{
	"compilerOptions": {
		"outDir": "./dist/",
		"noImplicitAny": true,
		"target": "es5",
		"lib": ["es5", "es6", "dom"],
		"jsx": "react",
		"allowJs": true,
		"moduleResolution": "node"
	}
}
```

`webpack.dev.ts`

```typescript
const path = require('path');
import * as webpack from 'webpack';
const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
	template: './src/index.html'
});

const config: webpack.Configuration = {
	mode: 'development',
	entry: './src/index.tsx',
	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: ['.ts', '.tsx', '.js', '.json']
	},

	module: {
		rules: [
			// All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
			{ test: /\.tsx?$/, loader: 'awesome-typescript-loader' }
		]
	},
	plugins: [htmlPlugin]
};

export default config;
```

`webpack.prod.ts`

```typescript
const path = require('path');
import * as webpack from 'webpack';
const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
	template: './src/index.html',
	filename: './index.html'
});

const config: webpack.Configuration = {
	mode: 'production',
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: ['.ts', '.tsx', '.js', '.json']
	},

	module: {
		rules: [
			// All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
			{ test: /\.tsx?$/, loader: 'awesome-typescript-loader' }
		]
	},
	plugins: [htmlPlugin]
};

export default config;
```

`package.json`

```json
	"scripts": {
		"dev": "webpack-dev-server --open --config webpack.dev.ts",
		"build": "webpack --mode production --config webpack.prod.ts"
	},
```
