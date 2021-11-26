import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom" ;

class User extends React.Component {
    state = {
        user: {}
    }
    componentDidMount() {
        if(this.props.match && this.props.match.params){
        let id = this.props.match.params.id ;
        axios.get(`https://reqres.in/api/users/${id}`)
        .then(res => {
            this.setState ({
                user: res.data.data
            })
         })
     }
}
    handleBack = () => {
        this.props.history.push('/user')
    }



render() {
    let {user} = this.state ;
    let isEmpty=Object.keys(user).length === 0;
            return (
                <>
                {isEmpty === false && 
                    <>
                        <div>User's Name: {user.first_name} {user.last_name}</div>
                        <div>User's Email: {user.email}</div>
                        <img src={user.avatar}/>
                        <div>
                            <button onClick={()=>this.handleBack()}>Back</button>
                        </div>
                    </>

                }
                </>
            )
        }
}

export default withRouter(User) ;