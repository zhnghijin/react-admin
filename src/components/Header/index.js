import React, { Component } from "react";

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stars: props.msg || 0,
        }
    }
    componentDidMount() {
        fetch('../mock/data.json').then((res)=>{
            if(res.ok){
				res.json().then(data => {
					console.log(data);
				})
			}
        })
        console.log('yilao');
    }
    render() {
        return (
            <p onClick={this.handleSubmitComment}>{this.state.stars}</p>
        )
    }

    handleSubmitComment() {
        console.log('执行了');
    }
}
export default Header