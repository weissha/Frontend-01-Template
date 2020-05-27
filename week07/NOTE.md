## 排版（Layout）

* 初始化

* 收集元素进行

  > 分行

  * 根据主轴尺寸，把元素分进行
  * 若设置了 `no-wrap`，则强行分配进第一行

* 计算主轴

  > 计算主轴方向

  * 找出所有 Flex 元素
  * 把主轴方向的剩余尺寸按比例分配给这些元素
  * 若剩余空间为负数，所有 flex 元素为0，等比压缩所有元素

* 计算交叉轴

  > 计算交叉轴方向

  * 根据每一行中最大元素尺寸计算行高
  * 根据行高 `flex-align`、`item-align`，确定元素的位置



## 绘制（draw）

* 绘制单个元素
  * 绘制需要依赖一个图形环境
  * 我们这里采用 npm 包 images
  * 绘制在一个viewport上进行
  * 与绘制相关的属性：background-color、borderbackground-image等

* 绘制 DOM
  * 递归调用子元素的绘制方法完成DOM树的绘制
  * 忽略一些不需要绘制的节点
  * 实际浏览器中，文字绘制是难点，需要依赖字体库，在这里忽略
  * 实际浏览器中，还会对一些图层做compositing，在这里也忽略了


# CSS

### CSS 总体结构

- `@charset`
- `@import`
- `rules`
  - `@media`
  - `@page`
  - `rule`



