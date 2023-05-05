import './contact.css'
import {MdEmail} from 'react-icons/md'
import {MdLocationOn} from 'react-icons/md'
import {BsFillTelephoneFill} from 'react-icons/bs'
import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
     <section className="contact">
        <div className="contacts">
        <div className="contact-up">
                        <span className="contact-up-text">با ما تماس بگیرید</span>
                        <h3 className="contact-up-title">بیایید در مورد همه چیز صحبت کنیم!</h3>
                        <p className="contact-up-paraph">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
                    </div>
            <div className="contact-down">
                <div className="contact-down-right">
                    <img src="./images/img-2.png" alt="" className="contact-right-img" />
                    <div className="down-right-contact">
                        <div className="contact-servies">
                            <h3 className="servies-title">سرویس های آنلاین</h3>
                            <span className="servies-email">info@rtl-theme.com <MdEmail className='contact-icons'/></span>
                            <span className="servies-email">rtl-theme.com <MdEmail className='contact-icons'/></span>
                        </div>
                        <div className="contact-phone">
                            <h3 className="phone-title">تماس آنلاین</h3>
                            <span className="phone-number">0211234567 <BsFillTelephoneFill className='contact-icons'/></span>
                            <span className="phone-number">09120120000 <BsFillTelephoneFill className='contact-icons'/></span>
                        </div>
                    </div>
                    <div className="contact-address">
                        <h3 className="addres-title">آدرس دفتر</h3>
                        <span className="address-text">تهران، خیابان کریم خان زند، پلاک4 <MdLocationOn className='contact-icons'/></span>
                    </div>
                </div>
                <div className="contact-down-left">
                    <from className="contactus">
                            <div className="conatct-names">
                                <input type="text" id='name' className='contact-name-text' />
                                <label htmlFor="name" className="contact-name-first">نام</label>
                                <input type="text" id='family' className='contact-name-text' />
                                <label htmlFor="family" className="contact-name-first">نام خانوادگی</label>
                            </div>
                            <div className="contant-subject">
                                <label htmlFor="email" className='contact-subject-name'>ادرس ایمیل</label>
                                <input type="text" id='email' className='contact-suject-text' />
                                <label htmlFor="subject" className='contact-subject-name'>موضوع</label>
                                <input type="text" id='subject' className='contact-suject-text' />
                                <label htmlFor="mass" className='contact-subject-name'>پیغام تو</label>
                                <textarea type="text" id='mass' className='contact-suject-text' />
                            </div>
                            <a href="#" className="contactus-btn">ارسال پیام</a>
                    </from>
                </div>
            </div>
        </div>
     </section>
    )
  }
}
