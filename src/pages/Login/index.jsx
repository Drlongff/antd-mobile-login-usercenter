//登录组件
import React, { Component } from 'react'
import { NavBar, Form, Input ,Button} from 'antd-mobile'
import github from './imgs/github.png'
import qq from './imgs/qq.png'
import wechat from './imgs/微信登录.png'
import './index.css'

export default class Login extends Component {
    render() {
        return (
            <div className='login'>
                {/* 顶部导航区域 */}
                <NavBar back={null} >手机验证码登录</NavBar>
                {/* 手机验证码输入区域 */}
                <Form layout='vertical' className='phone-input'>
                    <Form.Item name='username'>
                        <Input placeholder='请输入手机号' clearable />
                    </Form.Item>
                </Form>
                <Form layout='horizontal'>
                    <Form.Item
                        extra={
                            <Button color='primary' size='small' fill={null}>发送验证码</Button>
                        }
                    >
                        <Input placeholder='请输入验证码' clearable />
                    </Form.Item>
                </Form>
                {/* 登录按钮 */}
                <Button block color='primary' className='login-btn'>登录</Button>
                {/* 底部其他登录方式区域 */}
                <footer className='footer'>
                    <span className='other-login-text'>其他登录方式</span>
                    <div className='login-type'>
                        <img src={qq} alt="" />
                        <img src={wechat} alt="" />
                        <img src={github} alt="" />
                    </div>
                    <span className='policy-note'>未注册的手机号，验证后会自动创建呆逼网账号，登录即代表您自动同意：<a href="http://www.baidu.com">《呆逼网隐私政策》</a></span>
                </footer>
            </div>
        )
    }
}
