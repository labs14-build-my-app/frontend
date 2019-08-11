import React from 'react'
import DeveloperDashboard from "../Developer/DeveloperDashboard";
import EntrepreneurBoard from "../Entrepreneur/EntrepreneurBoard";
import {connect} from "react-redux";
import {loadApp } from "../../../redux/actions"
const errorHasOccured = <p>An Error has occured please log in again</p>

const DevFindr = (props) =>{
    console.log(props)
    if( !props.user ){
        console.log("loading app")
        props.loadApp();
    }
        return (
            props.user ? 
            
            
            <>
            {   console.log(!props.user.isDeveloper === false)}
            {console.log(props.user)}
               {props.user.isDeveloper ? <DeveloperDashboard {...props} /> : !props.user.isDeveloper === true ? <EntrepreneurBoard {...props} /> : errorHasOccured}    
            </> : errorHasOccured
        )
}
const mapStateToProps = state =>{
    console.log(state)
    return {
    user: state.user
    }
} 
export default connect(mapStateToProps, { loadApp })( DevFindr)
