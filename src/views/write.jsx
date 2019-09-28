import React, {PureComponent} from 'react'
import request from '../utils/request'
import { Button } from 'antd-mobile';
import '@/index.less'
export default class Page1 extends PureComponent{
    constructor(props){
        super(props)
        this.state = {
            data:{}
        }
    }
    click=()=>{
        request('api/page1').then(data=>{
            this.setState({
                data: data
            })
        })
    }
    render(){
        return (
            <div>
                <div className="interpret">
                    
                </div>
            </div>
        )
    }
}

