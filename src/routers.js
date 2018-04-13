import React,{Component} from 'react'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Loadable from 'react-loadable'
const Index = Loadable({
    loader: () => import ('./pages/index'),
    loading: () => <div>hello</div>
})

const Test = Loadable({
    loader: () => import ('./pages/test'),
    loading: () => <div>hello</div>
})

class Routers extends Component {
    render() {
        return (
            <Router>
                    <Switch>
                        <Route exact path="/" component={Index}/>
                        <Route path="/test" component={Test}/>
                    </Switch>
            </Router>
        )
    }
}

export default Routers;