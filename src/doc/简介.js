// React 特点
// 1.声明式设计 −React采用声明范式，可以轻松描述应用。
// 2.高效 −React通过对DOM的模拟，最大限度地减少与DOM的交互。
// 3.灵活 −React可以与已知的库或框架很好地配合。
// 4.JSX − JSX 是 JavaScript 语法的扩展。React 开发不一定使用 JSX ，但我们建议使用它。
// 5.组件 − 通过 React 构建组件，使得代码更加容易得到复用，能够很好的应用在大项目的开发中。
// 6.单向响应的数据流 − React 实现了单向响应的数据流，从而减少了重复代码，这也是它为什么比传统数据绑定更简单。

// React 安装
// React 可以直接下载使用，下载包中也提供了很多学习的实例。
// 本教程使用了 React 的版本为 16.4.0，你可以在官网 https://reactjs.org/ 下载最新版。
// 你也可以直接使用 Staticfile CDN 的 React CDN 库，地址如下：
// <script src="https://cdn.staticfile.org/react/16.4.0/umd/react.development.js"></script>
// <script src="https://cdn.staticfile.org/react-dom/16.4.0/umd/react-dom.development.js"></script>
// <!-- 生产环境中不建议使用 -->
// <script src="https://cdn.staticfile.org/babel-standalone/6.26.0/babel.min.js"></script>
// 官方提供的 CDN 地址：
// <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
// <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
// <!-- 生产环境中不建议使用 -->
// <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
// 注意: 在浏览器中使用 Babel 来编译 JSX 效率是非常低的。
// 注意：如果我们需要使用 JSX，则 <script> 标签的 type 属性需要设置为 text/babel。

// 通过 npm 使用 React
// 如果你的系统还不支持 Node.js 及 NPM 可以参考我们的 Node.js 教程。
// 我们建议在 React 中使用 CommonJS 模块系统，比如 browserify 或 webpack，本教程使用 webpack。
// 国内使用 npm 速度很慢，你可以使用淘宝定制的 cnpm (gzip 压缩支持) 命令行工具代替默认的 npm:
// $ npm install -g cnpm --registry=https://registry.npm.taobao.org
// $ npm config set registry https://registry.npm.taobao.org
// 这样就可以使用 cnpm 命令来安装模块了：
// $ cnpm install [name]
// 更多信息可以查阅：http://npm.taobao.org/。
// 使用 create-react-app 快速构建 React 开发环境
// create-react-app 是来自于 Facebook，通过该命令我们无需配置就能快速构建 React 开发环境。
// create-react-app 自动创建的项目是基于 Webpack + ES6 。
// 执行以下命令创建项目：
// $ cnpm install -g create-react-app
// $ create-react-app my-app
// $ cd my-app/
// $ npm start
// 在浏览器中打开 http://localhost:3000/ ，结果如下图所示：


// create-react-app 执行慢的解决方法：
// 在使用 create-react-app my-app 来创建一个新的React应用，在拉取各种资源时,往往会非常慢,一直卡在那：
// fetchMetadata: sill mapToRegistry uri http://registry.npmjs.org/whatwg-fetch
// 可以看到资源还是使用了 npmjs.org，解决方法是换成淘宝的资源：
// $ npm config set registry https://registry.npm.taobao.org
// -- 配置后可通过下面方式来验证是否成功
// $ npm config get registry 或 npm info express

// React 代码的书写格式和以前的 JS 有很大的不同，下面通过对这段代码进行分析了解一下他。
// 以前使用 JavaScript 定义一个变量使用 var，ES6 加入了 const 关键字，用来定义一个常量：
// const div = document.createElement('div');
// ReactDOM.render(...) 是渲染方法，所有的 js,html 都可通过它进行渲染绘制，他有两个参数(内容，渲染目标 js 对象)
// 内容就是要在渲染目标中显示的东西，可以是一个 React 部件，也可以是一段HTML或TEXT文本。渲染目标JS对象，就是一个DIV或TABEL,
// 或TD 等HTML的节点对象。 exp: ReactDOM.render(<App />, div);

// unmountComponentAtNode() 这个方法是解除渲染挂载，作用和 render 刚好相反，也就清空一个渲染目标中的 React 部件或 html 内容。
// ReactDOM.unmountComponentAtNode(div);

