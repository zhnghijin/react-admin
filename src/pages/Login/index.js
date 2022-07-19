import React, { Component } from 'react'
import Field from './components/Field'
import Button from './components/Button'
export default class App extends Component {
    state = {
        username: 'default value' || localStorage.getItem('username'),
        password: ''
    }
    componentDidMount(){
      console.log("vue中的mount执行了");
    }
    onLogin(){
      console.log(this.state.username, this.state.password, '发送后端验证');
    }
    render() {
        return (
            <div>
                <h2>登录页面</h2>
                <Field label="用户名" type="text" onChangeEvent1={(value) => { this.setState({ username: value }) }} value={this.state.username} ></Field>
                <Field label="密码" type="password" onChangeEvent1={(value) => { this.setState({ password: value }) }} value={this.state.password}></Field>
                <div style={{ display: 'flex', 'marginLeft': '110px' }}>
                    <Button type="button" value="登录" event1={() => { this.onLogin() }} />
                    <Button type="button" value="重置" event1={() => {
                        this.setState({ username: '', password: '' })
                    }} />
                </div>
            </div>
        )
    }
}