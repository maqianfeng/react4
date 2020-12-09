// React Refs
// React 支持一种非常特殊的属性 Ref ，你可以用来绑定到 render() 输出的任何组件上。
// 这个特殊的属性允许你引用 render() 返回的相应的支撑实例（ backing instance ）。
// 这样就可以确保在任何时间总是拿到正确的实例。

// 使用方法
// 绑定一个 ref 属性到 render 的返回值上：

// <input ref="myInput" />
// 在其它代码中，通过 this.refs 获取支撑实例:

// var input = this.refs.myInput;
// var inputValue = input.value;
// var inputRect = input.getBoundingClientRect();
// 完整实例
// 你可以通过使用 this 来获取当前 React 组件，或使用 ref 来获取组件的引用，实例如下：

// React 实例
// class MyComponent extends React.Component {
//   handleClick() {
//     // 使用原生的 DOM API 获取焦点
//     this.refs.myInput.focus();
//   }
//   render() {
//     //  当组件插入到 DOM 后，ref 属性添加一个组件的引用于到 this.refs
//     return (
//       <div>
//         <input type="text" ref="myInput" />
//         <input
//           type="button"
//           value="点我输入框获取焦点"
//           onClick={this.handleClick.bind(this)}
//         />
//       </div>
//     );
//   }
// }
// ReactDOM.render(
//   <MyComponent />,
//   document.getElementById('example')
// );

// 实例中，我们获取了输入框的支撑实例的引用，子点击按钮后输入框获取焦点。

// 我们也可以使用 getDOMNode()方法获取DOM元素

// 这个 api 已经过时了，下面的是最新的用法:

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.myRef = React.createRef();  
//   }
//   render() {
//     return <div ref={this.myRef} />;  
//   }
// }