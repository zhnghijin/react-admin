// import React, { Component } from 'react';
// import './App.css';
// import Header from './components/Header/index.js';

// function App() {
//   const msg = "大家好呀";
//   return (
//     <div className="App">
//       <Header msg={msg} />
//     </div>
//   );
// }

// export default App;

// import React, { Component } from 'react'
// import Field from './components/Field'
// import Button from './components/Button'
// export default class App extends Component {
//     state = {
//         username: 'default value' || localStorage.getItem('username'),
//         password: ''
//     }
//     componentDidMount(){
//       console.log("vue中的mount执行了");
//     }
//     onLogin(){
//       console.log(this.state.username, this.state.password, '发送后端验证');
//     }
//     render() {
//         return (
//             <div>
//                 <h2>登录页面</h2>
//                 <Field label="用户名" type="text" onChangeEvent1={(value) => { this.setState({ username: value }) }} value={this.state.username} ></Field>
//                 <Field label="密码" type="password" onChangeEvent1={(value) => { this.setState({ password: value }) }} value={this.state.password}></Field>
//                 <div style={{ display: 'flex', 'marginLeft': '110px' }}>
//                     <Button type="button" value="登录" event1={() => { this.onLogin() }} />
//                     <Button type="button" value="重置" event1={() => {
//                         this.setState({ username: '', password: '' })
//                     }} />
//                 </div>
//             </div>
//         )
//     }
// }

//导入路由相关的组件
//HashRouter哈希路由 as起别名 router路由
//router 存放路由的容器
//navlink 导航链接
// Redirect 重定向
// Switch一次匹配一个页面
import{HashRouter as Router,Route,NavLink,Link,Redirect,Switch} from 'react-router-dom'
import Login from './components/test/index.js';

function App(){
    return (<Router>
        <div className='nav'>
            <NavLink to="/" exact>首页</NavLink> |
            {/* <Link to="/" >首页</Link> | */}
            <NavLink to="/about">关于页面</NavLink> |
            <NavLink to="/details/abc">abc详情</NavLink> |
            <NavLink to="/details/123">123详情</NavLink> |
            <NavLink to="/admin">管理页面</NavLink> |
            {/* <NavLink to="/login">登录</NavLink> | */}
            <NavLink to={{
     pathname: 'login',
     state: {
      name: 'dx'
     }
    }}>登录</NavLink> |
        </div>
        <div className='views'>
          <Switch>
            <Route path="/" component={Home} exact></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/details/:id" component={Details}></Route>
            <Private path="/admin">
                <Admin></Admin>
            </Private>
            <Route path="/admin" component={Admin}></Route>
            <Route path="/Login" component={Login}></Route>
            {/* * 匹配任意路径 */}
            <Route path="*" component={NoMatch}></Route>
         </Switch>
        </div>
    </Router>);
}
export default App;
// 把props.children 解构为children  ...rest 剩余的其他参数
function Private({ children, ...rest }) {
    // 把Private组件的参数除了children全部转移到Route组件中
    // Route不直接指定component通过render渲染出来
    return <Route {...rest} render={
        ({ location }) => {
            // 如果获取本地存储的isLog为true(登录过了)，返回children子节点Admin 否则就返回一个Redirect组件
            // Redirect默认跳转到 /login登录页面 传入一个state数据 redirect自定义值 location.pathname(本来要跳转的地址)
            return localStorage.getItem("isLog")?(children):<Redirect to={{pathname:'/login',state:{redirect:location.pathname}}}></Redirect>
        }
    }></Route>
}
// function Login({location,history}){
//   function logIt(){
//       // 存储到本地
//       localStorage.setItem("isLog",true);
//       // 获取redirect信息
//       var redirect = location.state.redirect||"/";
//       // 如果没有拿到就跳转到首页
//       history.push(redirect);
//   }
//   return<div>
//     <h1>登录</h1>
//     <button onClick={logIt}>登录</button>
//   </div>
// }
 
// 404 页面
function NoMatch({location}){
  return (<div>
    <h3>404</h3>
    <p>当前地址找不到: {location.pathname}</p>
    <NavLink to="/">首页</NavLink>
  </div>)
}
 
function Admin(){
  return <div>
    <h1>Admin页面</h1>
    <p><NavLink to="/admin/dash">概览</NavLink> |<NavLink to="/admin/orderlist">订单列表</NavLink> </p>
    <Route path="/admin/dash" component={Dash}></Route>
    <Route path="/admin/orderlist" component={OrderList}></Route>
    <Redirect from='/admin' to="/admin/dash"></Redirect>
  </div>
}
function Dash(){
  return <div>
    <h2>概览页面</h2>
  </div>
}
function OrderList(){
  return <div>
    <h2>订单列表页面</h2>
  </div>
}
 
function Details({match,location}){
    return (<div>
        <h1>详情内容</h1>
        <p>参数：{match.params.id}</p>
        <p>match:{JSON.stringify(match)}</p>
        <p>location:{JSON.stringify(location)}</p>
    </div>);
}
// match 是匹配的路由参数
// path 路径
// url  地址
// isExact是否精确匹配
// params 路由的参数
function Home({history}){
  
    return (<div>
        <h1>首页内容</h1>
        <button onClick={history.goBack}>返回</button>
    </div>);
}
// 不同NavLink跳转到首页
function About({match,history,location}){
    return (<div>
        <h1>关于内容</h1>
        <button onClick={()=>history.push('/')}>首页</button>
        <button onClick={()=>history.replace('/')}>首页-replace</button>
        <button onClick={()=>console.log(history)}>输出历史记录</button>
        <NavLink to={{
          pathname:"/details/abc",
          search:"name=mumu&age=18",
          hash:"good",
          state:{reidrect:"/about"}
        }}>详情abc</NavLink>
 
    </div>);
}