<img scr="" width="23" height="23" alt="">
  scr (source)属性表示图片的地址  alt （alternative）
<a href="" target="_blank" >
p 标签 paragraph 语义是一个段落
a 标签 anchor 锚 语义是一个链接 链接 写在href （Hyperlink Reference）属性里
    *target 属性 可以指定在那个窗口打开链接（属性值：关键字：_blank在新页面显示 _self在当前页面显示 *_parent在父窗体显示 _top在顶层窗体显示*）


h5新增：hgroup （header group）
<hgroup>
  <h1>santi </h1>
  <h2>renleiwenming</h2>
</hgroup>
当不同级别的标题在一起，可以把hN标签归类

download 属性
点击链接，下载链接对应的文件，而不是跳转页面，下载的文件名以download属性的只来命名
<a href="dd/sd/jane.pdf" download="简爱.pdf">点击下载《简爱》完整版 </a>
传统下载需要服务器支持，现在有这个属性，可以让点击下载有前端完成

 base 基准
  <base href="页面中所有相对路径的基准地址" targer="页面中所有链接的打开位置”>
  href 属性 以/即目录为结尾
  target，在a标签中用自己的target属性覆盖base标签设置的全局打开位置。

span 标签 没有语义
div 标签 没有语义

br break 换行，自闭和标签
hr horizontal 水平分割线，

class
id