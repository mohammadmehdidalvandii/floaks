import './main-product.css'
import {AiOutlineCheckSquare} from 'react-icons/ai'
import {MdOutlineDangerous} from 'react-icons/md'
import React, { Component } from 'react'

export default class Main__Product extends Component {
    render() {
        return (
            <section className="main-product">
                <div className="product">
                    <div className="product-up">
                        <span className="product-up-text">تعرفه ما</span>
                        <h3 className="product-up-title">پیشنهاداتی را انتخاب کنید که بهترین کار را برای شما انجام دهد
                        </h3>
                        <p className="product-up-paraph">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
                    </div>
                    <div className="product-down">
                        <div className="box-product">
                            <div className="cart-product">
                                <h4 className="cart-product-title">فریلنسر</h4>
                                <div className="cart-product-prices">
                                    <span className="product-price">199 ریال/ ماه</span>
                                    <span className="product-price-text">1000 کاربر ماهانه فعال</span>
                                </div>
                                <div className="cart-product-details">
                                    <ul className="product-details-items">
                                        <li className="product-details-item">انجام کار و بررسی<AiOutlineCheckSquare className='check-box'/></li>
                                        <li className="product-details-item">مدیریت اکانت اختصاصی<AiOutlineCheckSquare  className='check-box'/></li>
                                        <li className="product-details-item">پیشنهادات نامحدود<AiOutlineCheckSquare  className='check-box'/></li>
                                        <li className="product-details-item">ردیابی پروژه<MdOutlineDangerous  className='close-box'/></li>
                                        <li className="product-details-item">پرداخت های آسان<MdOutlineDangerous  className='close-box'/></li>
                                    </ul>
                                </div>
                                <a href="#" className="cart-product-btn">شروع با فلوکس</a>
                            </div>  
                            <div className="cart-product">
                                <h4 className="cart-product-title">استارتاپ</h4>
                                <div className="cart-product-prices">
                                    <span className="product-price">299 ریال/ ماه</span>
                                    <span className="product-price-text">5000 کاربر ماهانه فعال</span>
                                </div>
                                <div className="cart-product-details">
                                    <ul className="product-details-items">
                                        <li className="product-details-item">انجام کار و بررسی<AiOutlineCheckSquare className='check-box'/></li>
                                        <li className="product-details-item">مدیریت اکانت اختصاصی<AiOutlineCheckSquare className='check-box'/></li>
                                        <li className="product-details-item">پیشنهادات نامحدود<AiOutlineCheckSquare className='check-box'/></li>
                                        <li className="product-details-item">ردیابی پروژه<AiOutlineCheckSquare className='check-box'/></li>
                                        <li className="product-details-item">پرداخت های آسان<MdOutlineDangerous className='close-box'/></li>
                                    </ul>
                                </div>
                                <a href="#" className="cart-product-btn">شروع با فلوکس</a>
                            </div>  
                            <div className="cart-product">
                                <h4 className="cart-product-title">شرکت</h4>
                                <div className="cart-product-prices">
                                    <span className="product-price">399 ریال/ ماه</span>
                                    <span className="product-price-text">10،000 کاربر ماهانه فعال</span>
                                </div>
                                <div className="cart-product-details">
                                    <ul className="product-details-items">
                                        <li className="product-details-item">انجام کار و بررسی<AiOutlineCheckSquare className='check-box'/></li>
                                        <li className="product-details-item">مدیریت اکانت اختصاصی<AiOutlineCheckSquare className='check-box'/></li>
                                        <li className="product-details-item">پیشنهادات نامحدود<AiOutlineCheckSquare className='check-box'/></li>
                                        <li className="product-details-item">ردیابی پروژه<AiOutlineCheckSquare className='check-box'/></li>
                                        <li className="product-details-item">پرداخت های آسان<AiOutlineCheckSquare className='check-box'/></li>
                                    </ul>
                                </div>
                                <a href="#" className="cart-product-btn">شروع با فلوکس</a>
                            </div>  
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
