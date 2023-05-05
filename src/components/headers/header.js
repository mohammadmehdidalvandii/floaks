import './header.css'

import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <section className="headers">
                <div className="container">
                    <div className="header">
                        <div className="header-right">
                            <span className="header-right-text">تاریخ، زمان و نظارت بر مشکل</span>
                            <h1 className="header-right-title">
                                فاکتورهای حرفه ای فوق العاده سریع برای فریلنسرها
                            </h1>
                            <p className="header-right-parph">
                                لورم ایپسوم متن ساختگی با تولید سادگی
                                نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                            </p>
                            <div className="header-right-botton">
                                <a href="#" className="header-right-link header-right-btn">براورد پروژه</a>
                                <a href="#" className="header-right-link">نمونه کارهای ما</a>
                            </div>
                        </div>
                        <div className="header-left">
                            <img src="./images/img-1.png" alt="" className="header-left-image" />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
