import React from "react";
import { Link, withRouter } from "react-router-dom";

import "./index.css";
// import { ProductConsumer } from "../contextAPI";
import { ProfileOutlined, LogoutOutlined } from "@ant-design/icons";
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      username: " "
    }
    this.getUserName = this.getUserName.bind(this);
    }

getUserName(){
  const {isLogin} = this.props;
  if(isLogin){
    const username = this.getCookie("username");
    this.setState({
      username: username
    })
    console.log(username)

  }
}
getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
  componentDidMount(){
    this.getUserName()
      console.log(this.props.isLogin)
  }
  deleteCookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
  render() {
    const {isLogin} = this.props;
    return (
            <div>
              {(isLogin)?(
                <div className="authen">
                  <Link>{this.state.username}</Link>
                  <Link className="signIn" to="/user/profile">
                    <ProfileOutlined />
                  </Link>
                  <Link onClick ={ ()=>{
                    this.deleteCookie("uid")
                    this.deleteCookie("username");
                    window.location.reload();
                  } } >
                    <LogoutOutlined />
                  </Link>
                </div>
              ) : (
                <div className="authen">
                  <Link className="signIn" to="/signin">
                    SignIn
                  </Link>
                  <Link to="/signup">SignUp</Link>
                </div>
                
              )}

            </div>

          
        
    );
  }
}
export default withRouter( Navbar);
