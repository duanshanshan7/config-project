# prettier

1. 安装 prettier npm install --save-dev --save-exact prettier
2. 创建.prettierrc.json echo {}> .prettierrc.json
3. 手动新建.prettierignore，写入：
   build
   coverage
4. 完成，测试命令：npx prettier --write .
5. 添加 Git hooks:pre-commit
   npx mrm lint-staged

# eslint

1. vscode 安装 eslint 插件
2. 安装 eslint npm install -D eslint
3. 验证是否安装成功 ./node_modules/.bin/eslint -v
4. 初始化 eslint ./node_modules/.bin/eslint --init
5. 配置 eslintrc.js 的 rules

# prettier & eslint 结合

1. 安装 eslint-config-prettier， npm install --save-dev eslint-config-prettier
2. 在.eslintrc.\*下的 extends 中增加"prettier"，"prettier"一定要加在最后一行

```
{
  "extends": [
    "some-other-config-you-use",
    "prettier"
  ]
}
```

# git hooks

pre-commit
commit-msg

# 配置 commitlint

1. 安装 commitlint
   Mac：npm install --save-dev @commitlint/{config-conventional,cli}
   Windows：npm install --save-dev @commitlint/config-conventional @commitlint/cli
2. 命令行新建 commitlint.config.js
   echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
3. 配置 Husky's commit-msg hook
   如果没有安装 husky：

```
  npm install husky --save-dev
  # or
  yarn add husky --dev

  # Activate hooks
  npx husky install
  # or
  yarn husky install
```

已安装 husky：

```
  npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```

# json-server

# typeing/index.d.ts

# process.env 配置

# axios 封装
