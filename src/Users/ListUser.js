import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom" ;

class ListUser extends React.Component {
    state = {
        listUser: []
    }


    componentDidMount() {
        axios.get('https://reqres.in/api/users?page=2')
            .then(res =>{
                this.setState({
                    listUser: res.data.data
                })
            })
        }
    handleUser = (user) => {
        this.props.history.push(`user/${user.id}`)
        // console.log(this.props.history)
    }

      render () {
          let {listUser} = this.state ;
          return (
              <>
                <div className="list-title">
                    Danh Sách Người Dùng:
                </div>
                <div className="list-content">
                {listUser && listUser.length > 0 && listUser.map((item,index)=>{
                    return (
                        <div className="user" key={item.id} onClick={()=>this.handleUser(item)}>
                            {index +1} - {item.first_name} {item.last_name}
                        </div>
                    )
                })
                }
                </div>
              </>
          )
      }
}

export default withRouter(ListUser) ;
    