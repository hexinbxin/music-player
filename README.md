# 总结



### 实现功能点

* 点击上一曲，下一曲进行切歌
  - 背景图写真切换
  - 专辑封面切换
  - 歌曲信息对应改变
  - 歌词改变

* 点击播放
  - 歌曲播放时间改变
  - 进度条增加
  - 歌词滚动
  - 播放完成自动切换下一曲

* 点击进度条
  - 歌曲进度跳转（快进/快退）
  - 显示对应歌曲播放时间
  - 歌词滚动至对应位置

* 菜单按钮
  - 显示歌曲菜单
  - 点击播放

* V2.0
- 在暂停时旋转海报暂停
- 播放时旋转海报继续旋转



### 难点

* 歌词显示
  - 取出歌词文件内容
  - 将内容每一句拆分为数组
  - 对数组进行处理，留下需要展示的内容
  - 为每一条内容创建一个li标签，自定义data-name属性，属性值为歌词展示的时间，li的内容为展示歌词
  - 遍历li的data-name，将其转化为时间，与播放时间进行比较，把对应的li添加active类，ul向上移动