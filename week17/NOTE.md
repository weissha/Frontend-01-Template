# 第十七周总结

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

