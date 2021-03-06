## CSS 选择器

- 选择器的基本意义是：根据一些特征，选中元素树上的一批元素
- 选择器结构分类

  - 简单选择器：针对某一特征判断是否选中元素，例如：div、.cls 、#div
    - 类型选择器：div svg|a
    - 全体选择器：\*
    - id 选择器：#id
    - class 选择器：.class
    - 属性选择器：[attr=value]
    - 伪类选择器：:hover
  - 复合选择器：
    - <简单选择器><简单选择器><简单选择器>
    - \*或者div必须写在最前面
  - 复杂选择器：
    - <复合选择器><sp><复合选择器>
    - <复合选择器>">"<复合选择器>
    - <复合选择器>"~"<复合选择器>
    - <复合选择器>"||"<复合选择器>
  - 选择器列表：由逗号分隔的复杂选择器，表示“或”的关系
  - 伪类
    - 链接/行为
      -  :any-link
      -  :link :visited
      -  hover
      -  active
      -  :focus
      -  target
    - 树结构
      -  empty
      -  nth-child()
      -  nth-last-child()
      -  first-child :last-child :only-child
    - 逻辑型
      -  :not
      -  :where :has

  - 伪元素
    - ::before
    - ::after
    - ::first-line
       > 可用属性
       *  font 系列
       * color 系列
       * background 系列
       * word-spacing
       * letter-spacing
       * text-decoration
       * text-transform
       * line-height
    - ::first-letter
       > 可用属性
       * font 系列
       * color 系列
       * background 系列
       * word-spacing
       * letter-spacing
       * text-decoration
       * text-transform
       * line-height
       * float
       * vertical-align
       * 盒模型系列：margin，padding，border

- 带命名空间的类型选择器，比如选择 svg 中的 a 和 HTML 中的 a


- 选择器的优先级

  - 优先级采用[0,0,0,0]四个位置数值记录，越靠左的数值优先级越高
  - 行内样式优先级是左边第一位[1,0,0,0]
  - id 选择器优先级是左边第二位[0,1,0,0]
  - class、属性选择器是左边第三位[0,0,1,0]
  - 类型选择器是最后一位[0,0,0,1]
  - \*不影响优先级
  - 复合选择器和复杂选择器都是其中简单选择器的优先级叠加
  - 相同优先级的选择器遵循后面覆盖前面的原则
  - !import 高于行内样式优先级，拥有最高优先级





## 排版

- 正常流的排版行为就是依次排列，排不下了换行
- 源代码-标签，语义-元素，表现-盒
- CSS 选择器选中的元素在排版时可能产生多个盒，排版和渲染的基本单位是盒
- 排版的两种盒子
  - 块级盒，对应的排版上下文是 BFC(block formating content)
  - 行内级盒，对应的排版上下文是 IFC(inline formating content)
- 能产生 BFC 的元素
  - 浮动元素；
  - 绝对定位元素；
  - 非块级但仍能包含块级元素的容器（如 inline-blocks, table-cells, table-captions）；
  - 块级的能包含块级元素的容器，且属性 overflow 不为
- 只有 BFC 才会发生 margin 折叠，margin 折叠只发生在排版的垂直方向
- 正常流排版
  - 收集盒进行(hang)
  - 计算盒在行的位置
  - 计算行的排布
- Flex 排版
  - 收集盒进行(hang)
  - 计算盒在主轴方向的排布
  - 计算盒在交叉轴的排布

## 行模型

- 默认基线对齐
- 中文没有基线
- 一个元素 display:inline-block，内容为空，基线是容器底部
- vertical-align 指定元素在垂直方向如何对齐行内盒，对齐的方式可能改变行高

## float

- 先在原位置产生元素，然后移到 float 的方向，然后文字进行重排
- clear 属性的意思是在找一个在指定方向没有 float 的元素的地方放置
- first-letter，相对于源码，所以可以 float
- first-line，排完版产生，所以不可以 float