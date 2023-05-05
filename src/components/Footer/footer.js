import "./footer.css"
import {GrFacebookOption} from 'react-icons/gr'
import {AiOutlineTwitter} from 'react-icons/ai'
import {BsGoogle} from 'react-icons/bs'
import {FaGooglePlusG} from 'react-icons/fa'
import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="footers">
                        <div className="footer-up">
                            <div className="up-right">
                                <img src="./images/logo-dark.png" alt="" className="up-right-img" />
                                <p className="up-right-text">
                                    فرصت های تجاری مانند
                                    اتوبوس ها، همیشه دیگری وجود دارد
                                    آینده یک ..
                                </p>
                            </div>
                            <div className="up-center">
                                <ul className="up-center-items">
                                    <h4 className="center-items-title">امکانات  </h4>
                                    <li className="center-item">6 خانه</li>
                                    <li className="center-item">فناوری</li>
                                    <li className="center-item">اخبار و رویدادها</li>
                                    <li className="center-item">شرکت</li>
                                </ul>
                                <ul className="up-center-items">
                                    <h4 className="center-items-title">سیاست ها</h4>
                                    <li className="center-item">امنیت</li>
                                    <li className="center-item">شغل ها</li>
                                    <li className="center-item">خط مشی</li>
                                    <li className="center-item">وضعیت</li>
                                </ul>
                                <ul className="up-center-items">
                                    <h4 className="center-items-title">شرکت</h4>
                                    <li className="center-item">رهبری</li>
                                    <li className="center-item">شغل </li>
                                    <li className="center-item">با ما تماس بگیرید</li>
                                    <li className="center-item">نقشه ها</li>
                                </ul>
                            </div>
                            <div className="up-left">
                                <h3 className="up-left-title">ما را دنبال کنید</h3>
                                <div className="up-left-media">
                                    <a href="#" className="left-meida-link"><GrFacebookOption/></a>
                                    <a href="#" className="left-meida-link"><AiOutlineTwitter/></a>
                                    <a href="#" className="left-meida-link"><BsGoogle/></a>
                                    <a href="#" className="left-meida-link"><FaGooglePlusG/></a>
                                </div>
                                <h3 className="up-left-title">ما را دنبال کنید</h3>
            
                                <div className="up-left-app">
                                    <img src="./images/google-play.png" alt="" className="left-app-download" />
                                    <img src="./images/apple-store.png" alt="" className="left-app-download" />
                                </div>
                            </div>
                        </div>
                        <div className="footer-down"></div>
                    </div>
                </div>
            </footer>
        )
    }
}
