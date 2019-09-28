import React, { PureComponent } from 'react'
import { Route, Switch, Redirect, Link } from 'react-router-dom'

import Write from '@/views/write'

export default class Home extends PureComponent{

    render(){
        return (
            <div>
                <Switch>
                    <Route  path="/write" component={Write}/>
                    <Redirect exact from="/" to='/write' />
                </Switch>
            </div>
        )
    }
}

