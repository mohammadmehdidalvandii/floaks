import './FeedBack.css'

import React, { Component } from 'react'

export default class FeedBack extends Component {
    render() {
        return (
            <section className="feedback">
                <div className="feedbacks">
                    <div className="feedback-up">
                        <span className="feedback-up-text">بازخورد ما</span>
                        <h3 className="feedback-up-title">چند کلمه از مشتریان راضی ما</h3>
                        <p className="feedback-up-paraph">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
                    </div>
                    <div className="feedback-down">
                        <div className="feedback-comment">
                            <div className="comment-user">
                                <img src="./images/team/img-1.jpg" alt="" className="comment-user-img" />
                                <div className="comment-user-name">
                                    <h4 className="user-name">
                                        براندون کارنی</h4>
                                    <span className="user-name-job">- طراح</span>
                                </div>
                            </div>
                            <p className="comment-text">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                            </p>
                        </div>
                        <div className="down-images">
                            <img src="./images/testimonial.png" alt="" className="down-img" />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
