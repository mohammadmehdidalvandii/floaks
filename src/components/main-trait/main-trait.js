import './main-trait.css'

import React, { Component } from 'react'
import { AiOutlineArrowLeft } from "react-icons/ai"
export default class Main__triat extends Component {
    render() {
        return (
            <section className="mian__trait">
                <div className="main-triat">
                    <div className="trait-up">
                        <span className="trait-up-text">ویژگی های ما</span>
                        <h3 className="trait-up-title">پروژه شما در بیش از 300+ دسته بندی مختلف قابل انجام است</h3>
                        <p className="trait-up-paraph">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
                    </div>
                    <div className="trait-down">
                        <div className="trait-down-box">
                            <div className="down-box">
                                <div className="down-box-name">
                                    <span className="box-name-number">01</span>
                                    <img src="./images/boxImage/rulers.png" alt="" className='box-name-img' />
                                </div>
                                <div className="down-box-content">
                                    <h4 className="box-content-title">محصول دیجیتال</h4>
                                    <p className="box-content-text">
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                                    </p>
                                    <a href="#" className="box-content-btn"><AiOutlineArrowLeft /> بیشتر بدانید</a>
                                </div>
                            </div>
                            <div className="down-box">
                                <div className="down-box-name">
                                    <span className="box-name-number">02</span>
                                    <img src="./images/boxImage/compose.png" alt="" className='box-name-img' />
                                </div>
                                <div className="down-box-content">
                                    <h4 className="box-content-title">بازاریابی دیجیتال</h4>
                                    <p className="box-content-text">
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                                    </p>
                                    <a href="#" className="box-content-btn"><AiOutlineArrowLeft /> بیشتر بدانید</a>
                                </div>
                            </div>
                            <div className="down-box">
                                <div className="down-box-name">
                                    <span className="box-name-number">03</span>
                                    <img src="./images/boxImage/presentation.png" alt="" className='box-name-img' />
                                </div>
                                <div className="down-box-content">
                                    <h4 className="box-content-title">مشاوره کسب وکار</h4>
                                    <p className="box-content-text">
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                                    </p>
                                    <a href="#" className="box-content-btn"><AiOutlineArrowLeft /> بیشتر بدانید</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
