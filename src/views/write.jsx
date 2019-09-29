import React, {PureComponent} from 'react'
import request from '../utils/request'
// import { Button } from 'antd-mobile'
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
    // eslint-disable-next-line no-undef
    // artEditor = new Eleditor({
    //     el: '#article-body',
    //     upload:{
    //         server: '/upload.php',
    //         fileSizeLimit: 2
    //     }
    // })
    render(){
        return (
            <div className="write">
                <div className="interpret">
                </div>
                <div className="input">
                    <input type="text"/>
                </div>
            </div>
        )
    }
}

