import React from "react";
import {  toast } from 'react-toastify';
// import Todolist from "./Todolist";
import AddTodo from "./AddTodo";

class Todo extends React.Component {
    state = {
        arrTodo:[
            {id:1,nameTodo: 'devloper'},
            {id:2,nameTodo: 'manager'},
            {id:3,nameTodo: 'tester'},
        ],
        editTodo:{}
    }
    handleAddTodo = (job) => {
        this.setState({
            arrTodo :this.state.arrTodo.concat(job)
        })  

        toast.success("Thêm thành công")
    }
    delete = (todo) => {
         let listTodo=this.state.arrTodo ;
         let newTodo = listTodo.filter(function(item){
                return item.id !== todo.id
         })

         this.setState({
            arrTodo: newTodo 
         })

         toast.success("Xoá thành công")
    }
        edit = (todo) => {
            let {editTodo} = this.state
            let isEmpty=Object.keys(editTodo).length === 0;
            console.log(isEmpty)
            if(isEmpty === false && editTodo.id === todo.id){
                this.setState({
                    editTodo: '',
                })
            toast.success("Sửa thành công")

            }else{
            this.setState({
                editTodo: todo,
            })
            }

        }
        editTodo=(event)=>{
            let editTodoCopy=this.state.editTodo;
            editTodoCopy.nameTodo= event.target.value ;
            this.setState({
               editTodo: editTodoCopy
            })
        }

        render () {
            let {arrTodo,editTodo} =this.state ;
            let isEmpty=Object.keys(editTodo).length === 0;
            console.log(isEmpty)
         return (
          <>
            <AddTodo
               handleAddTodo= {this.handleAddTodo}
            />
             {arrTodo && arrTodo.length > 0 &&
                arrTodo.map((item,index)=>{
                     return (
                            <div className="Todo-content" key={item.id}>
                                {isEmpty === true ? 
                                     <span>{index + 1} - {item.nameTodo} </span>
                                :
                                <>
                                { 
                                   item.id === editTodo.id ? <span>{index+1}-<input value={item.nameTodo} 
                                   onChange={(event)=>this.editTodo(event)}
                                   /></span> :
                                   <span>{index + 1} - {item.nameTodo} </span>
                                }
                                </>
                               }
                               <button onClick={() => this.edit(item)}>
                               {isEmpty === false &&  item.id === editTodo.id ?
                                'Save' : 'Edit'
                                }
                                   </button>
                               <button clasName="delete" onClick={()=>this.delete(item)}>delete</button>
                            </div>
                     )
                    })
                }
          </>
      )
  }
}

export default Todo ;