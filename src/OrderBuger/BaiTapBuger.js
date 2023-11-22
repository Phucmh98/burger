import React, { Component } from 'react'
import './Burger.css'
import BugerList from './BugerList'
import Menu from './Menu'
export default class BaiTapBuger extends Component {
    render() {
        return (
            <div className='layout_buger'>
                <div className='container pt-5'>
                    <div className='row'>
                        <div className='col-6 '>
                            <p className='name_store'>Bài Tập Buger CyberSoft</p>
                            <div className='layout_buger_store'>
                            <BugerList />
                            </div>
                            
                        </div>
                        <div className='col-6'>
                        <p className='name_menu'>MENU</p>
                            <Menu />
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}
