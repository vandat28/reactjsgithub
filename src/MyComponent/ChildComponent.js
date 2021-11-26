import React from "react";

class ChildComponent extends React.Component {
    state= {
        showJob: false
    }
    handleShow=()=>{
        this.setState({
             showJob: !this.state.showJob 
        })
    }

    delete= (job) => {
        this.props.deleteJob(job) ;
    }
    render(){
        return(
            <>
                {this.state.showJob===false ?
                <div>
                    <button onClick={()=>this.handleShow()}>Show</button>
                </div>
                :
                <>
                <div>
                {
                this.props.Jobs.map((job)=>{
                return(
                    <div>
                        <div key={job.id}>{job.nameJob}-{job.salary}$ <span onClick={() => this.delete(job)}>x</span></div>
                    </div>
                )
                })
                }
                </div>
                <div>
                    <button onClick={()=>this.handleShow()}>Hide</button>
                </div>
                </>
                }
            </>
        )
    }
}

export default ChildComponent ;