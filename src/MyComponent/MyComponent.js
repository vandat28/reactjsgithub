import React from 'react';
import AddComponent from './AddComponent';
import ChildComponent from './ChildComponent';

class MyComponent extends React.Component {

    state = {
        arrJobs:[
            {id:'1',nameJob:'devlopment',salary:'500'},
            {id:'2',nameJob:'tester',salary:'500'},
            {id:'3',nameJob:'manager',salary:'500'}
        ]
    }
    newJob = (job) =>{
         this.setState({
            arrJobs: this.state.arrJobs.concat(job)
        })
    }
    deleteJob = (job) =>{
        let Jobs = this.state.arrJobs ;
        Jobs=Jobs.filter(function(item){
                return item.id !== job.id
        })
        console.log(Jobs)
        console.log(job.id)
        this.setState({
            arrJobs: Jobs
        }) 

    }
    render(){
        return (
            <>
                <AddComponent
                     addNewJob={this.newJob}
                />
                <ChildComponent
                      Jobs={this.state.arrJobs}
                      deleteJob={this.deleteJob}
                />
            </>
        )
    }
}

export default MyComponent ;


