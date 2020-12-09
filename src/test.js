// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import './helloworld_react';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



// function Clock(props) {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>现在是 {props.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
   
//   function tick() {
//     ReactDOM.render(
//       <Clock date={new Date()} />,
//       document.getElementById('example')
//     );
//   }
   
//   setInterval(tick, 1000);

// 我们还可以创建一个 React.Component 的 ES6 类，该类封装了要展示的元素，需要注意的是在 render() 方法中，需要使用 this.props 替换 props：
// class Clock extends React.Component {
//     render() {
//       return (
//         <div>
//           <h1>Hello, world!</h1>
//           <h2>现在是 {this.props.date.toLocaleTimeString()}.</h2>
//         </div>
//       );
//     }
//   }
   
//   function tick() {
//     ReactDOM.render(
//       <Clock date={new Date()} />,
//       document.getElementById('example')
//     );
//   }
   
//   setInterval(tick, 1000);


// 1. 使用 ES6 类写法，用 this.props.属性名 来取值。
// 2. 可以多层 props 来传值，在 ReactDOM.render 定义属性值，传给调用方法 App，再在调用的ES6类调用中用 props.属性直接赋值过去。
// var myStyle = {color:'red',textAlign:'center'}

// class Name extends React.Component {
//   render() {
//     return <h1 style={myStyle}>网站名称：{this.props.name}</h1>;
//   }
// }
// class Url extends React.Component {
//   render() {
//     return <h1>网站地址：{this.props.url}</h1>;
//   }
// }
// class Nickname extends React.Component {
//   render() {
//     return <h1>网站地址：{this.props.nickname}</h1>;
//   }
// }

// function App(props) {
//     return (
//         <div>
//             <Name name={props.name}/>
//             <Url  url={props.url}/>
//             <Nickname  nickname={props.nickname}/>
//         </div>
//     );
// }

// 我们可以在 JSX 中使用 JavaScript 表达式。表达式写在花括号 {} 中
// 在 JSX 中不能使用 if else 语句，但可以使用 conditional (三元运算) 表达式来替代。以下实例中如果变量 i 等于 1 浏览器将输出 true, 如果修改 i 的值，则会输出 false.
// React 推荐使用内联样式。我们可以使用 camelCase 语法来设置内联样式. React 会在指定元素数字后自动添加 px 。以下实例演示了为 h1 元素添加 myStyle 内联样式：
// 如果我们需要向组件传递参数，可以使用 this.props 对象
// 在添加属性时， class 属性需要写成 className ，for 属性需要写成 htmlFor ，这是因为 class 和 for 是 JavaScript 的保留字。
// 多个属性的传入注意不用逗号或分号隔开而是空格符隔开:
// var myStyle = {
//     fontSize: 100,
//     color: '#FF0000'
// };
// var arr = [
//     <h1>菜鸟教程</h1>,
//     <h2>学的不仅是技术，更是梦想！</h2>,
//   ];


// function HelloMessage(props) {
//     return <h1>Hello {props.name}!</h1>;
// }
// const element = <HelloMessage name="Runoob"/>;

// React 把组件看成是一个状态机（State Machines）。通过与用户的交互，实现不同状态，然后渲染 UI，让用户界面和数据保持一致。
// React 里，只需更新组件的 state，然后根据新的 state 重新渲染用户界面（不要操作 DOM）。
// 以下实例创建一个名称扩展为 React.Component 的 ES6 类，在 render() 方法中使用 this.state 来修改当前的时间。
// 添加一个类构造函数来初始化状态 this.state，类组件应始终使用 props 调用基础构造函数。
// class Clock extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {date: new Date()};
//     }
   
//     render() {
//       return (
//         <div>
//           <h1>Hello, world!</h1>
//           <h2>现在是 {this.state.date.toLocaleTimeString()}.</h2>
//         </div>
//       );
//     }
//   }

// 接下来，我们将使Clock设置自己的计时器并每秒更新一次。将生命周期方法添加到类中
// 在具有许多组件的应用程序中，在销毁时释放组件所占用的资源非常重要。
// 每当 Clock 组件第一次加载到 DOM 中的时候，我们都想生成定时器，这在 React 中被称为挂载。
// 同样，每当 Clock 生成的这个 DOM 被移除的时候，我们也会想要清除定时器，这在 React 中被称为卸载。
// 我们可以在组件类上声明特殊的方法，当组件挂载或卸载时，来运行一些代码：

// componentDidMount() 与 componentWillUnmount() 方法被称作生命周期钩子。
// 在组件输出到 DOM 后会执行 componentDidMount() 钩子，我们就可以在这个钩子上设置一个定时器。
// this.timerID 为定时器的 ID，我们可以在 componentWillUnmount() 钩子中卸载定时器。
// 代码执行顺序：
// 当 <Clock /> 被传递给 ReactDOM.render() 时，React 调用 Clock 组件的构造函数。 由于 Clock 需要显示当前时间，所以使用包含当前时间的对象来初始化 this.state 。 我们稍后会更新此状态。
// React 然后调用 Clock 组件的 render() 方法。这是 React 了解屏幕上应该显示什么内容，然后 React 更新 DOM 以匹配 Clock 的渲染输出。
// 当 Clock 的输出插入到 DOM 中时，React 调用 componentDidMount() 生命周期钩子。 在其中，Clock 组件要求浏览器设置一个定时器，每秒钟调用一次 tick()。
// 浏览器每秒钟调用 tick() 方法。 在其中，Clock 组件通过使用包含当前时间的对象调用 setState() 来调度UI更新。 通过调用 setState() ，React 知道状态已经改变，并再次调用 render() 方法来确定屏幕上应当显示什么。 这一次，render() 方法中的 this.state.date 将不同，所以渲染输出将包含更新的时间，并相应地更新 DOM。
// 一旦 Clock 组件被从 DOM 中移除，React 会调用 componentWillUnmount() 这个钩子函数，定时器也就会被清除。
// class Clock extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {date: new Date()};
//     }
   
//     componentDidMount() {
//       this.timerID = setInterval(
//         () => this.tick(),
//         1000
//       );
//     }
   
//     componentWillUnmount() {
//       clearInterval(this.timerID);
//     }
   
//     tick() {
//       this.setState({
//         date: new Date()
//       });
//     }
   
//     render() {
//       return (
//         <div>
//           <h1>Hello, world!</h1>
//           <h2>现在是 {this.state.date.toLocaleTimeString()}.</h2>
//         </div>
//       );
//     }
//   }


// 数据自顶向下流动
// 父组件或子组件都不能知道某个组件是有状态还是无状态，并且它们不应该关心某组件是被定义为一个函数还是一个类。
// 这就是为什么状态通常被称为局部或封装。 除了拥有并设置它的组件外，其它组件不可访问。
// 以下实例中 FormattedDate 组件将在其属性中接收到 date 值，并且不知道它是来自 Clock 状态、还是来自 Clock 的属性、亦或手工输入：
// function FormattedDate(props) {
//     return <h2>现在是 {props.date.toLocaleTimeString()}.</h2>;
//   }
   
//   class Clock extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {date: new Date()};
//     }
   
//     componentDidMount() {
//       this.timerID = setInterval(
//         () => this.tick(),
//         1000
//       );
//     }
   
//     componentWillUnmount() {
//       clearInterval(this.timerID);
//     }
   
//     tick() {
//       this.setState({
//         date: new Date()
//       });
//     }
   
//     render() {
//       return (
//         <div>
//           <h1>Hello, world!</h1>
//           <FormattedDate date={this.state.date} />
//         </div>
//       );
//     }
//   }
   
//   function App1() {
//     return (
//       <div>
//         <Clock />
//         <Clock />
//         <Clock />
//       </div>
//     );
//   }
//   ReactDOM.render(
//     <Clock />,
//     document.getElementById('example')
//   );
//   这通常被称为自顶向下或单向数据流。 任何状态始终由某些特定组件所有，并且从该状态导出的任何数据或 UI 只能影响树中下方的组件。
//   如果你想象一个组件树作为属性的瀑布，每个组件的状态就像一个额外的水源，它连接在一个任意点，但也流下来。
//   为了表明所有组件都是真正隔离的，我们可以创建一个 App 组件，它渲染三个Clock：

// ()=>this.tick() 是 ES6 中声明函数的一种方式，叫做箭头函数表达式，引入箭头函数有两个方面的作用：更简短的函数并且不绑定 this。
// var f = ([参数]) => 表达式（单一）
// 等价于以下写法
// var f = function([参数]){
//    return 表达式;
// }
// 箭头函数的基本语法如下：
// (参数1, 参数2, …, 参数N) => { 函数声明 }
// (参数1, 参数2, …, 参数N) => 表达式（单一）
//相当于：(参数1, 参数2, …, 参数N) =>{ return 表达式; }

// 当只有一个参数时，圆括号是可选的：
// (单一参数) => {函数声明}
// 单一参数 => {函数声明}

// 没有参数的函数应该写成一对圆括号。
// () => {函数声明}
// 根据以上概念，尝试将 setInterval 中调用 tick() 的方式改为通常声明方式：
// this.timerID = setInterval(function(){
//     return this.tick();
//   },1000
// );
// 但是会报错，tick() 不是一个方法。原因在于 setInterval 是 window 的方法，内闭包使用 this 当然也指向 window，window 没有 tick() 方法故报错。

// 2、this.tick()
// this.timerID = setInterval(function(){   //setInterval是window的方法
//     return this.tick();                  //this指的是window
//   },1000
// );
// this.tick() 中的 this指的是window，而不是我们想要的指代所在的组件类 Clock，所以我们要想办法让 this 能被正常指代。这里我们采用围魏救赵的办法:
// （更改指向，在 setInterval 外部定义变量）
// let that = this;
// this.timerID = setInterval(function () {
//   return that.tick();
// },1000);
// 在闭包函数的外部先用 that 引用组件 Clock 中挂载组件方法 componentDidMount() 中 this 的值，然后在 setInterval 中闭包函数中使用that，
// that 无法找到声明，就会根据作用域链去上级（上次层）中继承 that，也就是我们引用的组件类 Clock 中的 this。
// 到此为止，将 () => this.tick()等价代换为了我们熟悉的形式。


// state 和 props 主要的区别在于 props 是不可变的，而 state 可以根据与用户交互来改变。这就是为什么有些容器组件需要定义 state 来更新和修改数据。 而子组件只能通过 props 来传递数据。

// 可以通过组件类的 defaultProps 属性为 props 设置默认值，实例如下：
// class HelloMessage extends React.Component {
//     render() {
//       return (
//         <h1>Hello, {this.props.name}</h1>
//       );
//     }
//   }
   
//   HelloMessage.defaultProps = {
//     name: 'Runoob'
//   };
   
//   const element = <HelloMessage/>;

// 组合使用 state 和 props 。我们可以在父组件中设置 state， 并通过在子组件上使用 props 将其传递到子组件上。
// 在 render 函数中, 我们设置 name 和 site 来获取父组件传递过来的数据。
// class WebSite extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//           name: "菜鸟教程",
//           site: "https://www.runoob.com"
//         }
//       }

//     render() {
//       return (
//         <div>
//           <Name name={this.state.name} />
//           <Link site={this.state.site} />
//         </div>
//       );
//     }
//   }
   
   
   
//   class Name extends React.Component {
//     render() {
//       return (
//         <h1>{this.props.name}</h1>
//       );
//     }
//   }
   
//   class Link extends React.Component {
//     render() {
//       return (
//         <a href={this.props.site}>
//           {this.props.site}
//         </a>
//       );
//     }
//   }

// ReactDOM.render(
//     // <div>
//     //   <h1>{1+1}</h1>
//     //   {/* <h1>{i == 1 ? 'True!' : 'False'}</h1> */}
//     // </div>,
//     // <h1 style = {myStyle}>菜鸟教程</h1>,
//     // <div>{arr}</div>,
//     //  <App name={"菜鸟教程"} url={"http://www.runoob.com"} nickname={"Runoob"}/>,
//     // element,
//     // <Clock />,
//     // <App1 />,
//     <WebSite />,
//     document.getElementById('example')
// );


// const element = <h1>Hello, world!</h1>;
// ReactDOM.render(
//     element,
//     document.getElementById('example')
// );




