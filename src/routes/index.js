import React from "react";
import ReactDOM from "react-dom";
// import { Router } from 'react-router';
import { Router, Route, hashHistory } from "react-router";
// ReactDOM.render(<Router/>, document.getElementById('app'));

function App() {
  export default React.createClass({
    render() {
      return <div>{this.props.children}</div>;
    },
  });
}

browserHistory.push("/some/path");


const Home = withRouter(
    React.createClass({
      componentDidMount() {
        this.props.router.setRouteLeaveHook(
          this.props.route, 
          this.routerWillLeave
        )
      },
  
      routerWillLeave(nextLocation) {
        // 返回 false 会继续停留当前页面，
        // 否则，返回一个字符串，会显示给用户，让其自己决定
        if (!this.state.isSaved)
          return '确认要离开？';
      },
    })
  )


let routes = (
  <Route path="/" component={App}>
    <Route path="/repos" component={Repos} />
    <Route path="/about" component={About} />
  </Route>
);

ReactDOM.render(
  //   <Router history={hashHistory}>
  //     <Route path="/" component={App}>
  //       <Route path="/repos" component={Repos} />
  //       <Route path="/about" component={About} />
  //     </Route>
  //     <Route path="/repos" component={Repos} />
  //     <Route path="/about" component={About} />
  //   </Router>,

  <Link to="/about" activeStyle={{ color: "red" }}>
    About
  </Link>,
  <Link to="/repos" activeStyle={{ color: "red" }}>
    Repos
  </Link>,

  <IndexLink to="/" activeClassName="active">
    Home
  </IndexLink>,

  <Route path="inbox" component={Inbox}>
    <Route path="messages/:id" component={Message} />
  </Route>,
  <Router routes={routes} history={browserHistory} />,
  document.getElementById("app")
);


var LikeButton = React.createClass({
    getInitialState: function() {
      return {liked: false};
    },
    handleClick: function(event) {
      this.setState({liked: !this.state.liked});
    },
    render: function() {
      var text = this.state.liked ? 'like' : 'haven\'t liked';
      return (
        <p onClick={this.handleClick}>
          You {text} this. Click to toggle.
        </p>
      );
    }
  });
  
  ReactDOM.render(
    <LikeButton />,
    document.getElementById('example')
  );



  var Input = React.createClass({
    getInitialState: function() {
      return {value: 'Hello!'};
    },
    handleChange: function(event) {
      this.setState({value: event.target.value});
    },
    render: function () {
      var value = this.state.value;
      return (
        <div>
          <input type="text" value={value} onChange={this.handleChange} />
          <p>{value}</p>
        </div>
      );
    }
  });
  
  ReactDOM.render(<Input/>, document.body);




  var UserGist = React.createClass({
    getInitialState: function() {
      return {
        username: '',
        lastGistUrl: ''
      };
    },
  
    componentDidMount: function() {
      $.get(this.props.source, function(result) {
        var lastGist = result[0];
        if (this.isMounted()) {
          this.setState({
            username: lastGist.owner.login,
            lastGistUrl: lastGist.html_url
          });
        }
      }.bind(this));
    },
  
    render: function() {
      return (
        <div>
          {this.state.username}'s last gist is
          <a href={this.state.lastGistUrl}>here</a>.
        </div>
      );
    }
  });
  
  ReactDOM.render(
    <UserGist source="https://api.github.com/users/octocat/gists" />,
    document.body
  );


  var RepoList = React.createClass({
    getInitialState: function() {
      return { loading: true, error: null, data: null};
    },
  
    componentDidMount() {
      this.props.promise.then(
        value => this.setState({loading: false, data: value}),
        error => this.setState({loading: false, error: error}));
    },
  
    render: function() {
      if (this.state.loading) {
        return <span>Loading...</span>;
      }
      else if (this.state.error !== null) {
        return <span>Error: {this.state.error.message}</span>;
      }
      else {
        var repos = this.state.data.items;
        var repoList = repos.map(function (repo) {
          return (
            <li>
              <a href={repo.html_url}>{repo.name}</a> ({repo.stargazers_count} stars) <br/> {repo.description}
            </li>
          );
        });
        return (
          <main>
            <h1>Most Popular JavaScript Projects in Github</h1>
            <ol>{repoList}</ol>
          </main>
        );
      }
    }
  });
  