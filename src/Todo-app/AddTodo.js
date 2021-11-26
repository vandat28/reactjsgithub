import React from "react";
import {  toast } from 'react-toastify';

class AddTodo extends React.Component{
    state = {
        id:'',
        nameTodo: ''
    }

    handleChangeNameTodo = (event) => {
        this.setState({
            nameTodo: event.target.value
        })
    }
    handleAddNameTodo = () => {
        if(this.state.nameTodo === ''){
            toast.error("Thêm thất bại")
            return;
        }
          this.props.handleAddTodo({
             id:Math.floor(Math.random() * 1001),
             nameTodo: this.state.nameTodo 
            })   
        
        this.setState({
            nameTodo:''
        })
    }
    render() {
        console.log(this.state.nameTodo)
        return(
            <>
                 <div className="Todo-input">
                     <input type="text" value={this.state.nameTodo} onChange={(event)=>this.handleChangeNameTodo(event)}/>
                     <button onClick={(event) => this.handleAddNameTodo(event)}>Add</button>
                 </div>
            </>
        )
    }
}

export default AddTodo;