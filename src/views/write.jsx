/* eslint-disable react/no-string-refs */
import React, {PureComponent} from 'react'
import request from '../utils/request'
export default class Write extends PureComponent{
    constructor(props){
        super(props)
    }
    // 返回底部输入框高度
    textareaHeight = () => {
        const H = document.body.scrollHeight
        const W = document.body.scrollWidth
        // 顶部翻译框高度
        const interpretHeight = 100 * 375 / W
        return H - interpretHeight
    }
    change(){
        // console.log(this.refs.textarea.value)
        const val = String(this.refs.textarea.value)
        if(/\B$/.test(val)){
            const chinese = val.match(/\B[\W(?!,)+](?!\n)$/)
            if(chinese){
                console.log('fanyi')
                console.log(chinese,'chinese')
            }
            
            let baseUrl = 'http://fanyi.youdao.com/translate?&doctype=json&type=AUTO&i='
            request(baseUrl+chinese)
        }
    }
      
    componentDidMount(){
        document.querySelector('textarea').style.height = this.textareaHeight() + 'px'
        this.refs.textarea.value=''
    }
    render(){
        return (
            <div className="write">
                <div className="interpret">
                </div>
                <div className="input">
                    <textarea ref='textarea' cols="30" rows="10"  onChange={this.change.bind(this)} ></textarea>
                </div>
            </div>
        )
    }
}

