将存储库克隆到新目录
```
git clone
```

创建一个空的 Git 存储库或重新初始化现有的存储库
```
git init
```   

在React中使用GitHub Pages部署你的分支（如：gh-pages）可以按照以下步骤进行操作：

首先，确保你的项目已经使用Git进行版本控制，并且在GitHub上创建了一个仓库。

# 安装gh-pages模块
```sh
npm install gh-pages --save-dev
```

### 指定你的GitHub Pages网站的URL
```sh
// package.json

{
  "name": "my-react-app",
  "version": "1.0.0",
  "homepage": "https://GitHub用户名.github.io/仓库名/",
}
```

### 添加deploy和predeploy脚本命令。部署到GitHub Pages之前运行。
```sh
// package.json

{
  "scripts": 
  {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
  }
}
```

### 将应用部署到GitHub Pages
```sh
npm run deploy
```
