// React AJAX
// React 组件的数据可以通过 componentDidMount 方法中的 Ajax 来获取，
// 当从服务端获取数据时可以将数据存储在 state 中，再用 this.setState 方法重新渲染 UI。

// 当使用异步加载数据时，在组件卸载前使用 componentWillUnmount 来取消未完成的请求。

// 以下实例演示了获取 Github 用户最新 gist 共享描述:

// React 实例
// class UserGist extends React.Component {
//   constructor(props) {
//       super(props);
//       this.state = {username: '', lastGistUrl: ''};
//   }
//   componentDidMount() {
//     this.serverRequest = $.get(this.props.source, function (result) {//TODO:$不生效
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
// 以上代码使用 jQuery 完成 Ajax 请求。