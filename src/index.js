import React from "react";
import ReactDOM from "react-dom";

// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello,world</h1>
//       <h2>现在是{props.date.toLocaleTimeString()}</h2>
//     </div>
//   );
// }

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
//   return (
//     <div>
//       <Name name={props.name} />
//       <Url url={props.url} />
//       <Nickname nickname={props.nickname} />
//     </div>
//   );
// }
// // 多个属性的传入注意不用逗号或分号隔开而是空格符隔开:
//  ReactDOM.render(
//   <App name={"菜鸟教程"} url={"http://www.runoob.com"} nickname={"Runoob"} />,
//   document.getElementById("example")
// );

// ReactDOM.render(
//     <h1>Hello, world!</h1>,
//     document.getElementById('example')
// );
// ReactDOM.render(
//     <div>
//     <h1>菜鸟教程</h1>
//     <h2>欢迎学习 React</h2>
//     <p data-myattribute = "somevalue">这是一个很不错的 JavaScript 库!</p>
//     </div>,
//     document.getElementById('example')
// );

// ReactDOM.render(
//   <div>
//     <h1>{1 + 1}</h1>
//   </div>,
//   document.getElementById("example")
// );
// var i = 1;
// ReactDOM.render(
//   <div>
//     <h1>{i === 1 ? "True!" : "False"}</h1>
//   </div>,
//   document.getElementById("example")
// );

// var myStyle = {
//   fontSize: 100,
//   color: "#FF0000",
// };
// ReactDOM.render(
//   <h1 style={myStyle}>菜鸟教程</h1>,
//   document.getElementById("example")
// );
// ReactDOM.render(
//   <div>
//     <h1>菜鸟教程</h1>
//     {/*注释...*/}
//   </div>,
//   document.getElementById("example")
// );

// var arr = [<h1>菜鸟教程</h1>, <h2>学的不仅是技术，更是梦想！</h2>];
// ReactDOM.render(<div>{arr}</div>, document.getElementById("example"));

// function HelloMessage(props) {
//   return <h1 className="sssssssssss"> Hello world {props.name}</h1>;
// }
// class Welcom extends React.Component {
//   render() {
//     return <h1 className="ddddddddddd"> hi {this.props.name}</h1>;
//   }
// }
// Welcom.defaultProps={
//     name:'dddddddd'
// };

// const element = <Welcom  />;
// ReactDOM.render(element, document.getElementById("example"));

// function FormattedDate(props) {
//   return <h2>现在是 {props.date.toLocaleTimeString()}</h2>;
// }

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { date: new Date() };
//   }

//   componentDidMount() {
//     this.timerID = setInterval(() => this.tick(), 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({
//       date: new Date(),
//     });
//   }
//   render() {
//     return (
//       <div>
//         <h1>Hello world !!!</h1>
//         {/* <h2>现在是 {this.state.date.toLocaleTimeString()}.</h2> */}
//         <FormattedDate date={this.state.date}/>
//       </div>
//     );
//   }
// }
// function App(){
//     return (
//         <div>
//             <Clock/>
//             <Clock/>
//             <Clock/>
//         </div>
//     )
// }

// ReactDOM.render(<App />, document.getElementById("example"));

// class WebSite extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             name:"交换机哈哈哈",
//             site:"https://www.runoob.com"
//         }
//     }
//     render(){
//         return (
//             <div>
//                 <Name name={this.state.name}/>
//                 <Link site={this.state.site}/>
//             </div>
//         );
//     }
// }

// class Name extends React.Component{
//     render(){
//         return (
//             <h1> {this.props.name}</h1>
//         );
//     }
// }
// class Link extends React.Component{
//     render(){
//         return (
//             <a href={this.props.site}>
//                 {this.props.site}
//             </a>
//         );
//     }
// }
// ReactDOM.render(
//     <WebSite/>,
//     document.getElementById('example')
// )

// var title = "菜鸟教程";
// // var title = 123;
// class MyTitle extends React.Component {
//   render() {
//     return (
//       <h1>Hello, {this.props.title}</h1>
//     );
//   }
// }

// MyTitle.propTypes = {
//   title: PropTypes.string
// };
// ReactDOM.render(
//     <MyTitle title={title} />,
//     document.getElementById('example')
// );

// var title = "菜鸟教程";
// // var title = 123;
// var MyTitle = React.createClass({
//   propTypes: {
//     title: React.PropTypes.string.isRequired,
//   },

//   render: function() {
//      return <h1> {this.props.title} </h1>;
//    }
// });
// ReactDOM.render(
//     <MyTitle title={title} />,
//     document.getElementById('example')
// );

// MyComponent.propTypes = {
//     // 可以声明 prop 为指定的 JS 基本数据类型，默认情况，这些数据是可选的
//    optionalArray: React.PropTypes.array,
//     optionalBool: React.PropTypes.bool,
//     optionalFunc: React.PropTypes.func,
//     optionalNumber: React.PropTypes.number,
//     optionalObject: React.PropTypes.object,
//     optionalString: React.PropTypes.string,

//     // 可以被渲染的对象 numbers, strings, elements 或 array
//     optionalNode: React.PropTypes.node,

//     //  React 元素
//     optionalElement: React.PropTypes.element,

//     // 用 JS 的 instanceof 操作符声明 prop 为类的实例。
//     optionalMessage: React.PropTypes.instanceOf(Message),

//     // 用 enum 来限制 prop 只接受指定的值。
//     optionalEnum: React.PropTypes.oneOf(['News', 'Photos']),

//     // 可以是多个对象类型中的一个
//     optionalUnion: React.PropTypes.oneOfType([
//       React.PropTypes.string,
//       React.PropTypes.number,
//       React.PropTypes.instanceOf(Message)
//     ]),

//     // 指定类型组成的数组
//     optionalArrayOf: React.PropTypes.arrayOf(React.PropTypes.number),

//     // 指定类型的属性构成的对象
//     optionalObjectOf: React.PropTypes.objectOf(React.PropTypes.number),

//     // 特定 shape 参数的对象
//     optionalObjectWithShape: React.PropTypes.shape({
//       color: React.PropTypes.string,
//       fontSize: React.PropTypes.number
//     }),

//     // 任意类型加上 `isRequired` 来使 prop 不可空。
//     requiredFunc: React.PropTypes.func.isRequired,

//     // 不可空的任意类型
//     requiredAny: React.PropTypes.any.isRequired,

//     // 自定义验证器。如果验证失败需要返回一个 Error 对象。不要直接使用 `console.warn` 或抛异常，因为这样 `oneOfType` 会失效。
//     customProp: function(props, propName, componentName) {
//       if (!/matchme/.test(props[propName])) {
//         return new Error('Validation failed!');
//       }
//     }
//   }
// }

// function ActionLink() {
//   function handleClick(e) {
//     e.preventDefault();
//     console.log("链接被点击");
//   }

//   return (
//     <a href="#" onClick={handleClick}>
//       点我
//     </a>
//   );
// }

// ReactDOM.render(
//   <ActionLink />,
//   document.getElementById('example')
// );

// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { isToggleOn: true };
//     // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState((prevState) => ({
//       isToggleOn: !prevState.isToggleOn,
//     }));
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? "ON" : "OFF"}
//       </button>
//     );
//   }
// }

// ReactDOM.render(<Toggle />, document.getElementById("example"));

// class LoggingButton extends React.Component {
//   // 这个语法确保了 `this` 绑定在  handleClick 中
//   handleClick = () => {
//     console.log("this is:", this);
//   };

//   render() {
//     return <button onClick={this.handleClick}>Click me</button>;
//   }
// }

// class LoggingButton extends React.Component {
//   handleClick() {
//     console.log("this is:", this);
//   }

//   render() {
//     //  这个语法确保了 `this` 绑定在  handleClick 中
//     return <button onClick={(e) => this.handleClick(e)}>Click me</button>;
//   }
// }

// class Popper extends React.Component {
//   constructor() {
//     super();
//     this.state = { name: "Hello world!" };
//   }

//   preventPop(name, e) {
//     //事件对象e要放在最后
//     e.preventDefault();
//     alert(name);
//   }

//   render() {
//     return (
//       <div>
//         <p>hello</p>
//         {/* 通过 bind() 方法传递参数。 */}
//         <a
//           href="https://reactjs.org"
//           onClick={this.preventPop.bind(this, this.state.name)}
//         >
//           Click
//         </a>
//       </div>
//     );
//   }
// }
// ReactDOM.render(<Popper />, document.getElementById("example"));

// function UserGreeting(props) {
//   return <h1>欢迎回来!</h1>;
// }

// function GuestGreeting(props) {
//   return <h1>请先注册。</h1>;
// }
// function Greeting(props) {
//   // const isLoggedIn = props.isLoggedIn;
//   if (props.isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }

// ReactDOM.render(
//   // 尝试修改 isLoggedIn={true}:
//   <Greeting isLoggedIn={true} />,
//   document.getElementById('example')
// );

// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = { isLoggedIn: false };
//   }

//   handleLoginClick() {
//     this.setState({ isLoggedIn: true });
//   }

//   handleLogoutClick() {
//     this.setState({ isLoggedIn: false });
//   }

//   render() {
//     const isLoggedIn = this.state.isLoggedIn;

        // return (
        //   The user is {isLoggedIn ? 'currently' : 'not'} logged in.
        //   ); 

//     let button = null;
//     if (isLoggedIn) {
//       button = <LogoutButton onClick={this.handleLogoutClick} />;
//     } else {
//       button = <LoginButton onClick={this.handleLoginClick} />;
//     }

//     return (
//       <div>
//         <Greeting isLoggedIn={isLoggedIn} />
//         {button}
//       </div>
//     );
//   }
// }

// ReactDOM.render(<LoginControl />, document.getElementById("example"));

// function Mailbox(props) {
//   const unreadMessages = props.unreadMessages;
//   return (
//     <div>
//       <h1>Hello!</h1>
//       {unreadMessages.length > 0 && (
//         <h2>您有 {unreadMessages.length} 条未读信息。</h2>
//       )}
//     </div>
//   );
// }
// const messages = ["React", "Re: React", "Re:Re: React"];
// ReactDOM.render(
//   <Mailbox unreadMessages={messages} />,
//   document.getElementById("example")
// );


// function WarningBanner(props) {
//   if (!props.warn) {
//     return null;
//   }
 
//   return (
//     <div className="warning">
//       警告!
//     </div>
//   );
// }
 
// class Page extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {showWarning: true}
//     this.handleToggleClick = this.handleToggleClick.bind(this);
//   }
 
//   handleToggleClick() {
//     this.setState(prevState => ({
//       showWarning: !prevState.showWarning
//     }));
//   }
 
//   render() {
//     return (
//       <div>
//         <WarningBanner warn={this.state.showWarning} />
//         <button onClick={this.handleToggleClick}>
//           {this.state.showWarning ? '隐藏' : '显示'}
//         </button>
//       </div>
//     );
//   }
// }
// ReactDOM.render(
//   <Page />,
//   document.getElementById('example')
// );

// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((numbers) =>
//   <li>{numbers}</li>
// );
// ReactDOM.render(
//   <ul>{listItems}</ul>,
//   document.getElementById('example')
// );


// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     <li key={number.toString()}>
//       {number}
//     </li>
//   );
//   return (
//     <ul>{listItems}</ul>
//   );
// }
 
// const numbers = [1, 2, 3, 4, 5,6];
// ReactDOM.render(
//   <NumberList numbers={numbers} />,
//   document.getElementById('example')
// );

// function Blog(props) {
//   const sidebar = (
//     <ul>
//       {props.posts.map((post) =>
//         <li key={post.id}>
//           {post.title}
//         </li>
//       )}
//     </ul>
//   );
//   const content = props.posts.map((post) =>
//     <div key={post.id}>
//       <h3>{post.title}</h3>
//       <p>{post.content}</p>
//     </div>
//   );
//   return (
//     <div>
//       {sidebar}
//       <hr />
//       {content}
//     </div>
//   );
// }
// const posts = [
//   {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
//   {id: 2, title: 'Installation', content: 'You can install React from npm.'}
// ];
// ReactDOM.render(
//   <Blog posts={posts} />,
//   document.getElementById('example')
// );


// class Counter extends React.Component{
//   constructor(props) {
//       super(props);
//       this.state = {clickCount: 0};
//       this.handleClick = this.handleClick.bind(this);
//   }
  
//   handleClick() {
//     this.setState(function(state) {
//       return {clickCount: state.clickCount + 1};
//     });
//   }
//   render () {
//     return (<h2 onClick={this.handleClick}>点我！点击次数为: {this.state.clickCount}</h2>);
//   }
// }
// ReactDOM.render(
//   <Counter />,
//   document.getElementById('example')
// );

// class Hello extends React.Component {
//   constructor(props) {
//       super(props);
//       this.state = {opacity: 1.0};
//   }
//   componentDidMount() {
//     this.timer = setInterval(function () {
//       var opacity = this.state.opacity;
//       opacity -= .05;
//       if (opacity < 0.1) {
//         opacity = 1.0;
//       }
//       this.setState({
//         opacity: opacity
//       });
//     }.bind(this), 100);
//   }
//   render () {
//     return (
//       <div style={{opacity: this.state.opacity}}>
//         Hello {this.props.name}
//       </div>
//     );
//   }
// }
// ReactDOM.render(
//   <Hello name="world"/>,
//   document.body
// );


// class Button extends React.Component {
//   constructor(props) {
//       super(props);
//       this.state = {data: 0};
//       this.setNewNumber = this.setNewNumber.bind(this);
//   }
  
//   setNewNumber() {
//     this.setState({data: this.state.data + 1})
//   }
//   render() {
//       return (
//          <div>
//             <button onClick = {this.setNewNumber}>INCREMENT</button>
//             <Content myNumber = {this.state.data}></Content>
//          </div>
//       );
//     }
// }
 
// class Content extends React.Component {
//   componentWillMount() {
//       console.log('Component WILL MOUNT!')
//   }
//   componentDidMount() {
//        console.log('Component DID MOUNT!')
//   }
//   componentWillReceiveProps(newProps) {
//         console.log('Component WILL RECEIVE PROPS!')
//   }
//   shouldComponentUpdate(newProps, newState) {
//         return true;
//   }
//   componentWillUpdate(nextProps, nextState) {
//         console.log('Component WILL UPDATE!');
//   }
//   componentDidUpdate(prevProps, prevState) {
//         console.log('Component DID UPDATE!')
//   }
//   componentWillUnmount() {
//          console.log('Component WILL UNMOUNT!')
//   }
 
//   render() {
//     return (
//       <div>
//         <h3>{this.props.myNumber}</h3>
//       </div>
//     );
//   }
// }
// ReactDOM.render(
//    <div>
//       <Button />
//    </div>,
//   document.getElementById('example')
// );


// class UserGist extends React.Component {
//   constructor(props) {
//       super(props);
//       this.state = {username: '', lastGistUrl: ''};
//   }
//   componentDidMount() {
//     this.serverRequest = $.get(this.props.source, function (result) {
//       var lastGist = result[0];
//       this.setState({
//         username: lastGist.owner.login,
//         lastGistUrl: lastGist.html_url
//       });
//     }.bind(this));
//   }
//   componentWillUnmount() {
//     this.serverRequest.abort();
//   }
//   render() {
//     return (
//       <div>
//         {this.state.username} 用户最新的 Gist 共享地址：
//         <a href={this.state.lastGistUrl}>{this.state.lastGistUrl}</a>
//       </div>
//     );
//   }
// }
// ReactDOM.render(
//   <UserGist source="https://api.github.com/users/octocat/gists" />,
//   document.getElementById('example')
// );

// 在其它代码中，通过 this.refs 获取支撑实例:
{/* <input ref="myInput" />
var input = this.refs.myInput;
var inputValue = input.value;
var inputRect = input.getBoundingClientRect();
class MyComponent extends React.Component {
  handleClick() {
    // 使用原生的 DOM API 获取焦点
    this.refs.myInput.focus();
  }
  render() {
    //  当组件插入到 DOM 后，ref 属性添加一个组件的引用于到 this.refs
    return (
      <div>
        <input type="text" ref="myInput" />
        <input
          type="button"
          value="点我输入框获取焦点"
          onClick={this.handleClick.bind(this)}
        />
      </div>
    );
  }
}
ReactDOM.render(
  <MyComponent />,
  document.getElementById('example')
); */}


// class HelloMessage extends React.Component {
//   constructor(props) {
//       super(props);
//       this.state = {value: 'Hello Runoob!'};
//       this.handleChange = this.handleChange.bind(this);
//   }
//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }
//   render() {
//     var value = this.state.value;
//     return <div>
//             <input type="text" value={value} onChange={this.handleChange} /> 
//             <h4>{value}</h4>
//            </div>;
//   }
// }
// ReactDOM.render(
//   <HelloMessage />,
//   document.getElementById('example')
// );


// class Content extends React.Component {
//   render() {
//     return  <div>
//             <input type="text" value={this.props.myDataProp} onChange={this.props.updateStateProp} /> 
//             <h4>{this.props.myDataProp}</h4>
//             </div>;
//   }
// }
// class HelloMessage extends React.Component {
//   constructor(props) {
//       super(props);
//       this.state = {value: 'Hello Runoob!'};
//       this.handleChange = this.handleChange.bind(this);
//   }
 
//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }
//   render() {
//     var value = this.state.value;
//     return <div>
//             <Content myDataProp = {value} 
//               updateStateProp = {this.handleChange}></Content>
//            </div>;
//   }
// }
// ReactDOM.render(
//   <HelloMessage />,
//   document.getElementById('example')
// );



// class FlavorForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: 'coconut'};
 
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }
//   handleSubmit(event) {
//     alert('Your favorite flavor is: ' + this.state.value);
//     event.preventDefault();
//   }
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           选择您最喜欢的网站
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="gg">Google</option>
//             <option value="rn">Runoob</option>
//             <option value="tb">Taobao</option>
//             <option value="fb">Facebook</option>
//           </select>
//         </label>
//         <input type="submit" value="提交" />
//       </form>
//     );
//   }
// }
// ReactDOM.render(
//   <FlavorForm />,
//   document.getElementById('example')
// );



// class Reservation extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isGoing: true,
//       numberOfGuests: 2
//     };
 
//     this.handleInputChange = this.handleInputChange.bind(this);
//   }
 
//   handleInputChange(event) {
//     const target = event.target;
//     const value = target.type === 'checkbox' ? target.checked : target.value;
//     const name = target.name;
 
//     this.setState({
//       [name]: value
//     });
//   }
 
//   render() {
//     return (
//       <form>
//         <label>
//           是否离开:
//           <input
//             name="isGoing"
//             type="checkbox"
//             checked={this.state.isGoing}
//             onChange={this.handleInputChange} />
//         </label>
//         <br />
//         <label>
//           访客数:
//           <input
//             name="numberOfGuests"
//             type="number"
//             value={this.state.numberOfGuests}
//             onChange={this.handleInputChange} />
//         </label>
//       </form>
//     );
//   }
// }
// ReactDOM.render(
//   <Reservation />,
//   document.getElementById('example')
// );


// class HelloMessage extends React.Component {
//   constructor(props) {
//       super(props);
//       this.state = {value: 'Hello Runoob!'};
//       this.handleChange = this.handleChange.bind(this);
//   }
//   handleChange(event) {
//     this.setState({value: '菜鸟教程'})
//   }
//   render() {
//     var value = this.state.value;
//     return <div>
//             <button onClick={this.handleChange}>点我</button>
//             <h4>{value}</h4>
//            </div>;
//   }
// }
// ReactDOM.render(
//   <HelloMessage />,
//   document.getElementById('example')
// );

class Content extends React.Component {
  render() {
    return  <div>
              <button onClick = {this.props.updateStateProp}>点我</button>
              <h4>{this.props.myDataProp}</h4>
           </div>
  }
}
class HelloMessage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {value: 'Hello Runoob!'};
      this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({value: '菜鸟教程'})
  }
  render() {
    var value = this.state.value;
    return <div>
            <Content myDataProp = {value} 
              updateStateProp = {this.handleChange}></Content>
           </div>;
  }
}
ReactDOM.render(
  <HelloMessage />,
  document.getElementById('example')
);