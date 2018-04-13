import React,{Component} from 'react'
import {Link} from 'react-router-dom'

export default class Index extends Component{
    render(){
        return(
            <div>
                hello test
                <Link to="/">to index</Link>
            </div>
        )
    }
}