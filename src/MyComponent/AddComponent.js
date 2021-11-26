import React from "react";

class AddComponent extends React.Component {
    state={
        nameJob:'',
        salary:''
    }

    
    changeFirstName= (event) => {
        this.setState({
            nameJob: event.target.value
      })
   }

   changeLastName= (event) => {
      this.setState({
          salary: event.target.value
    })
 }
   submitData= () => {
        console.log(this.state)
        if(!this.state.nameJob || !this.state.salary){
            alert('Hãy điền đầy đủ');
            return;
        }
        this.props.addNewJob({
            id:Math.floor(Math.random() * 1001),
            nameJob: this.state.nameJob,
            salary: this.state.salary
        })

        this.setState({
            nameJob:'',
            salary:''
        })
 }
  render() {
      return(
        <>
        <div>Job:</div>
        <input  type="text" value={this.state.nameJob}
            onChange={(event) =>this.changeFirstName(event)}
        /> 
        <div>Salary:</div>
        <input  type="text" value={this.state.salary}
        onChange={(event) =>this. changeLastName(event)}
       />
        <br/>
        <button onClick={(event)=>this.submitData(event)}>Submit</button>
        </>
      )
  }
}

export default AddComponent ;