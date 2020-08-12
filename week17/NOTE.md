# W17-Geek-FE
## 组件化——内容型组件

### Tab 组件

### List 组件

### 处理 CSS

- 使用 css-loader 插件
- 自定义 css-loader



## 工具链

### 工具分类

- 初始化
- 构建
- 编码/调试
- 测试
- 部署
- 发布

### 初始化工具——yeoman

我们可以使用 yeoman 来创建一个脚手架工具，该工具可以根据用户输入安装依赖，也可以解析 template。

#### 安装 yeomen

1. mkdir generator-name（可自定义name）

2. npm init

3. npm install --save yeoman-generator

4. 项目目录

   ```
   ├───package.json
   └───generators/
       ├───app/
       │   └───index.js
       └───router/
           └───index.js
   ```
   
5. 在 package.json 文件中添加如下属性：

   ```
   "files": [
       "app",
       "router"
   ]
   ```

6. 扩展 generator

7. npm link

8. yo generator

#### 实现 yeomen

[How do you edit existing text (and move the cursor around) in the terminal?](https://stackoverflow.com/questions/10585683/how-do-you-edit-existing-text-and-move-the-cursor-around-in-the-terminal)

[readline](https://nodejs.org/docs/latest-v13.x/api/readline.html)




winter的gist https://gist.github.com/wintercn

什么是图灵完备性

如何用闭包代替递归?

```js
(g =>
  (f => f(f))(
    self =>
      g( (...args) => self(self).apply(this, args) )
  )
)(
  self => {
    return n => n > 0 ? self(n - 1) + n : 0
  }
)(100)
```

```js
const y = g =>
      (f => f(f))(
        self =>
          g( (...arg) => self(self).apply(this, args) )
      )

let f = y(self => {
  return n => n > 0 ? self(n - 1) + n : 0
})

f(100);
```

### 工具链

使用 yeoman 可以构建一个套完整的对于包管理的工作链的过程，可以实现发布一个包的过程，可以管理文件，也能够生成对应的项目。
对于 yeoman 的使用情景，主要还是在对应的工程体系，需要在打的团队，有频繁构建新项目的需求，或者是搭建新的项目的情况，才会使用到。

对于基础的命令行的控制，node本身就提供了这样的能力，使用 ttys，目前自己使用的 itrem2 的主题也是使用ttys来实现的。

---
