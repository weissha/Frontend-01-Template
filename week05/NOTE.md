## JavaScript 结构化程序设计
  - 在JS执行之前会对执行JS所需的内置对象进行实例化，产生Realm，每个Realm里面的同一个对象不相等，比如浏览器的全局Object与iframe里面contentWindow的Object不相等

  - JS执行粒度
    - Realm
    - 宏任务
    - 微任务
    - 函数调用（Execution Context）

  Execution Context Stack 执行栈

  进入一个函数时，会发生一次 Execution Context Stack 的 push，当函数返回的时候会发生一次 pop

  - code evaluation state 代码执行的位置 |  async 函数、generator 函数 有用，正常函数不需要存

  - Function 如果 Execution Context 执行的是一个函数就会有 Function，可能是 null

  - Script or Module

  - Generator  只有 Generator 产生的 Execution Context 才会有这个属性

  - Realm

  - LexicalEnvironment

    - this
    - new.target
    - super
    - 变量

  - VariableEnvironment

    用于处理 var 的声明

    - 语句/声明
    - 表达式
    - 直接量/变量/this

  - JS事件循环机制
    - 宿主会一直循环等待新的JS代码执行任务，宿主每次将接收到的JS代码片段交给JS引擎执行的过程是一次宏任务，一段段要执行的JS代码就组成宏任务队列
    - 宿主按顺序从宏任务队列一个个取出任务交由JS引擎执行，一个宏任务执行完才会执行下一个宏任务，不然一直会处于阻塞
    - 由宿主API产生的任务是宏任务，比如setTimeout、宿主产生的事件
    - JS引擎在执行一段代码的过程中，可能会产生一个个新的任务，这个过程产生的任务是微任务，放在微任务队列里面
    - 目前只能通过Promise和MutationObserver产生微任务，MutationObserver是宿主API，但是产生的是微任务
    - 在一次宏任务里面产生的微任务按入队先后按顺序执行，微任务在每个宏任务的最后执行，执行完所有微任务，宏任务执行完成
    - Promise每次resolve的时候会将then里面的回调放入微任务队列

  - 分析异步代码执行顺序的步骤
    1. 分析有多少个宏任务
    2. 在每个宏任务中，分析有多少个微任务
    3. 根据调用次序，确定宏任务中的微任务执行次序
    4. 根据宏任务的触发规则和调用次序，确定宏任务的执行次序
    5. 确定整个顺序

  - 函数执行上下文
    - JavaScript 标准把一段代码（包括函数），执行所需的所有信息定义为：“执行上下文”
    - 在 ES 5中，执行上下文包括以下三部分：
      - lexical environment：词法环境，当获取变量时使用，使用let声明的变量
      - variable environment：变量环境，当声明变量时使用，使用var声明的变量
      - this value：this 值。
    - 在 ES2018 中，执行上下文包括以下部分
      - lexical environment：词法环境，当获取变量或者 this 值时使用。
      - variable environment：变量环境，当声明变量时使用。
      - code evaluation state：用于恢复代码执行位置。
      - Function：执行的任务是函数时使用，表示正在被执行的函数。
      - ScriptOrModule：执行的任务是脚本或者模块时使用，表示正在被执行的代码。
      - Realm：使用的基础库和内置对象实例。
      - Generator：仅生成器上下文有这个属性，表示当前生成器。
    - 函数执行的时候，JavaScript 引擎首先会在“当前的执行上下文”中查找变量，在“当前的执行上下文”找不到改变量时会在外层执行上下文继续查找，从而形成作用域链
  
## 浏览器基本原理-HTTP协议
  - 七层网络模型
    - 应用
    - 表示
    - 会话          - HTTP（应用层）
    - 传输          - TCP（传输层）
    - 网络          - Internet（网络层）
    - 数据链路   
    - 物理层       - 4G/5G/WIFI（数据链路层）4$

  - TCP和IP区别：
    - TCP
      - 流
      - 端口
      - require('net')
    - IP
      - 包
      - IP地址
      - libnet/libpcap

  - TCP

  - URI 

    - **scheme**表示协议名，如`http` `ftp` `https`，后面必须追加`://`
    - **user:password@** 登陆主机的用户名密码，不推荐使用
    - **host:port** 主机名和端口
    - **path** 请求路径，标记资源位置
    - **query** 查询字符串，使用`key=value`格式，多个直接使用`&`连接
    - **fragment** 锚点，根据这个锚点跳转到相应的子资源

    关键字：同源、同站、跨域、跨站

  - HTTP

    - 报文结构

      - 请求报文

        - 请求行 - 请求的方法、URI、HTTP版本

          - 方法

            `GET POST HEAD PUT DELETE TRACE OPTIONS`

          - HTTP 1.1/ HTTP 2.0 / HTTP 3.0

        - 首部字段

        - 其他

        - CR + LF

      - 响应报文

        - 状态行 - HTTP版本、状态码、原因短语

          - 状态码
            - 2XX  200 ok
            - 3XX  304 Not Modifed
            - 4XX 400 Bad Request / 404 Not Found
            - 5XX  Internal Server Error

        - 首部字段

        - 其他

        - CR + LF

        - 报文主体

    - 首部字段

      - 用途

        - 缓存

          - 强缓存

            - Cache-Control (通用首部字段)
  
              ```
              no-cache 禁止缓存过期的资源，并返回全新的资源
              no-store 完全禁止该资源的缓存
              s-maxage 公共服务器的s-maxage
            max-age  缓存最大时间
              ```

            - Expires (实体首部字段)
  
              ```
              Expires: Wed, 04 Jul 2012 08:26:05 GMT
            告知客户端资源失效的日期，服务器在资源超过指定的日期前，都会以缓存来应答。
              ```
      
          - 协商缓存

            - Last-Modified (实体首部字段) / If-Modified-Since (请求首部字段)

              ```
          Last-Modifeid 资源的最终修改时间
              If-Modified-Since 服务器在给定的日期后修改过才返回该资源，否则返回304.
              ```
      
            - ETag (响应首部字段) / If-None-Match (请求首部字段)
      
              ```
              ETag 资源对应的唯一标识
              If-None-Match 对于GET和HEAD请求，当且仅当服务器上没有任何与ETag相匹配的资源时，服务器才会返回资源。
              ```
      
        - 类型/格式 支持
      
          - Transfer-Encoding (通用首部字段) 传输报文主体所采用的编码格式
          - Accept-Encoding (请求首部字段) 内容编码 `gzip`
          - Accept (请求首部字段) 媒体类型  `application/json`
          - Accept-Language (请求首部字段)  语言集
          - Accept-Charset (请求首部字段) 
      
        - Cookie
      
          - Set-Cookie 
            - NAME=VALUE Cookie的名和值
      
            - expires=DATE Cookie的有效期
      
            - Max-Age 失效前的秒数
      
            - path=PATH 服务器路径
      
            - domain=域名 服务器域名
      
            - Secure 只有https才能携带cookie
      
            - HttpOnly cookie只能通过HTTP协议传输，不能通过js访问，防止XSS攻击
      
            - SameSite - 预防CSRF攻击
          - Cookie
      
      - 类型
      
        - 通用首部字段
        - 请求首部字段
        - 响应首部字段
        - 实体首部字段
        - Cookie