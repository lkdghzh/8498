# eslint-plugin-unar

> ESLint plugin for extends in the unarjs organization.

:exclamation: Note this is an internal plugin/config for the development of unar itself, not intended for unar app development.

## Usage

1. `npm i eslint-plugin-unar -D`
2. create a file named `.eslintrc` in your project:

```js
{
  extends: ["plugin:unar/recommended"],
  //override if necessary
  //rules: {}
  //global
  //..
}
```
```
* "off" 或 0 - 关闭规则
* "warn" 或 1 - 开启规则，(不会导致程序退出),
* "error" 或 2 - 开启规则，(当被触发的时候，程序会退出)
```

## License

[MIT](http://opensource.org/licenses/MIT)