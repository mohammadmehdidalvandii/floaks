import './navbar.css'

import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
        <navbar className="navbar">
            <div className="container">
                <div className="nav-menus">
                    <div className="nav-menus-right">
                        <a href="./index.html" className="nav-right-img">
                            <img src="./images/logo-dark.png" alt="" />
                        </a>
                    </div>
                    <div className="nav-menus-left">
                        <ul className="menu-left-items">
                            <li className="menu-left-item">خانه</li>
                            <li className="menu-left-item">نمونه کار</li>
                            <li className="menu-left-item">قیمت</li>
                            <li className="menu-left-item">اعضای تیم</li>
                            <li className="menu-left-item">نظرات مشتریان</li>
                            <li className="menu-left-item">ارتباط با ما</li>
                            <a href="#" className="menu-item-user">ثبت نام</a>
                        </ul>
                    </div>
                </div>
            </div>
        </navbar>
    )
  }
}
