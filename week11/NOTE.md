## [异步编程]

- setTimeout
- promise
- generator
- async await

## [寻路问题]

- 绘制画板
- 广度优先搜索
- 深度优先搜索
- A* (A-Star)
- (启发式算法)

## [正则表达式]

### 元字符

#### 基础

* `.` 任意字符（换行除外）

* `\d` 任意数字，`\D` 任意非数字

* `\w` 任意数字字母下划线，`\W` 数字字母下划线以外的任意字符

* `\s` 任意空白字符，`\S` 任意非空白字符

#### 空白符

* `\r` 回车符
* `\n` 换行符
* `\f` 换页符
* `\t` 制表符
* `\v` 垂直制表符

#### 范围

* `* ` 含义：0 到多次
* `+` 含义：1 到多次
* `?` 含义：0 到 1 次
* `{m}` 含义：出现 m 次
* `{m, n}` 含义：m 到 n 次
* `{, n}` 含义：m 不写代表 0，至多 n 次
* `{m, }` 含义：n 不写代表无穷大，至少 m 次
* `|` 或
* `[...]` 多选一，括号中任意单个元素
* `[a-z]` 匹配 a 到 z 之间任意单个元素
* `[^...]` 取反，不能包括括号中的任意单个元素

#### 边界

* `^` 匹配行的开始，多行模式时，可以匹配任意行开头
* `$` 匹配行的结束，多行模式时，可以匹配任意行结束
* `\b` 匹配单词边界
* `\A` 仅匹配整个字符串的开始，不支持多行匹配
* `\Z` 仅匹配整个字符串的结束，不支持多行匹配

#### 量词

贪婪：表示次数的量词，默认是贪婪的，默认尽可能多地去匹配

非贪婪：“数量” 元字符后面加 `?` （英文问号）找出长度最小且满足要求的

* 环视

  `(?<=Y)X` 匹配前面是 Y 的 X

  `(?<!Y)X` 匹配前面不是 Y 的 X

  `X(?=Y)` 匹配后面是 Y 的 X

  `X(?!Y)` 匹配后面不是 Y 的 X

* 子组

  `(regexp)` 将 `regexp` 保存成一个子组

  `(?:regexp)` 仅分组，不保存这个子组

  `(?P<name>regexp)` 命名子组，将 `regexp` 保存成名称为 `name` 的子组



### API

* match

  ```js
  'abc'.match(/a(b)c/);
  
  '[a=value]'.match(/\[([^=]+)=([^\]]+)\]/)
  ```

* replace

  ```js
  'abc'.replace(/a(b)c/, (str, $1) => {
      console.log(str, $1) // abc b
  })
  
  'abc'.replace(/a(b)c/, '$1$1') // bb
  'abc'.replace(/a(b)c/, '$$1$$1') // $1$1
  ```

* exec



## [EventTarget.addEventListener()]
- [Event reference]
  - Resource events
    - error
    - abort
    - load
    - beforeunload
    - unload
  - Network events
    - online
    - offline
  - Foucs events
    - focus
    - blur
    - focusin
    - focusout
  - WebSocket events
    - open
    - message
    - error
    - close
  - Seesion History events
    - pagehide
    - pageshow
    - popstate
  - CSS Animation events
    - animationstart
    - animationcancel
    - animationend
    - animationiteration
  - CSS Transition events
    - transitionstart
    - transitioncancel
    - transitionend
    - transitionrun
  - Form events
    - reset
    - submit
  - Printing events
    - beforeprint
    - afterprint
  - Text Composition events
    - compositionstart
    - compositionupdate
    - compositionend
  - View events
    - fullscreenchange
    - fullscreenerror
    - resize
    - scroll
  - Clipboard events
    - cut
    - copy
    - paste
  - Keyboard events
    - keydown
    - keypress
    - keyup
  - Mouse events
    - auxclick
    - click
    - contextmenu
    - dblclick
    - mousedown
    - mouseenter
    - mouseleave
    - mousemove
    - mouseover
    - mouseout
    - mouseup
    - pointerlockchange
    - pointerlockerror
    - select
    - wheel
  - Drag & Drop events
    - drag
    - dragend
    - dragenter
    - dragstart
    - dragleave
    - dragover
    - drop
  - Media events
    - audioprocess
    - canplay
    - canplaythrough
    - complete
    - durationchange
    - emptied
    - ended
    - loadeddata
    - loadedmetadata
    - pause
    - play
    - playing
    - ratechange
    - seeked
    - seeking
    - stalled
    - suspend
    - timeupdate
    - volumechange
    - waiting
  - Progress events
    - abort
    - error
    - load
    - loadend
    - loadstart
    - progress
    - timeout
  - Storage events
    - change
    - storage
  - Update events
    - checking
    - downloading
    - error
    - noupdate
    - obsolete
    - updateready
  - Value Change events
    - broadcast
    - CheckboxStateChange
    - hashchange
    - input
    - RadioStateChange
    - readystatechange
    - ValueChange
  - Uncategorized events
    - invalid
    - message
    - open
    - show
  - Abortable Fetch events
    - abort
  - WebVR events
  - SVG events
    - SVGAbort
    - SVGError
    - SVGLoad
    - SVGResize
    - SVGScroll
    - SVGUnload
    - SVGZoom
  - Database events
    - abort
    - blocked
    - complete
    - error
    - success
    - upgradeneeded
    - versionchange
  - Script events
    - afterscriptexecute
    - beforescriptexecute
  - Menu events
    - DOMMenuItemActive
    - DOMMenuItemInactive
  - Window events
    - close
  - Popup events
    - popuphidden
    - popuphiding
    - popupshowing
    - popupshown
  - Tab events
    - visibilitychange
  - Battery events
    - chargingchange
    - chargingtimechange
    - dischargingtimechange
    - levelchange
  - Call events
    - alerting
    - busy
    - callschanged
    - cfstatechange
    - connected
    - connecting
    - dialing
    - disconnected
    - disconnecting
    - error
    - held, holding
    - incoming
    - resuming
    - statechange
    - voicechange
  - Sensor events
    - compassneedscalibration
    - devicemotion
    - deviceorientation
    - orientationchange
  - SMS and USSD events
    - delivered
    - received
    - sent
    - ussdreceived
  - Touch events
    - touchcancel
    - touchend
    - touchmove
    - touchstart
  - Pointer events
    - pointerover
    - pointerenter
    - pointerdown
    - pointermove
    - pointerup
    - pointercancel
    - pointerout
    - pointerleave
    - gotpointercapture
    - lostpointercapture