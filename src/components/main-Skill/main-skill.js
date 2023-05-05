import './main-skill.css'

import React, { Component } from 'react'

export default class Main__Skill extends Component {
  render() {
    return (
        <section className="main-skill">
            <div className="skills">
            <div className="skill-up">
                        <span className="skill-up-text">مهارت تخصصی</span>
                        <h3 className="skill-up-title">چرا مردم ما را دوست دارند؟</h3>
                        <p className="skill-up-paraph">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
                    </div>
                <div className="skill-dwon">
                    <div className="skill-down-content">
                        <h3 className="skill-content-title">49 م</h3>
                        <h4 className="skill-content-txt">کاربر خلاق</h4>
                        <p className="skill-content-parph">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                    </div>
                    <div className="skill-down-content">
                        <h3 className="skill-content-title">49 م</h3>
                        <h4 className="skill-content-txt">کاربر خلاق</h4>
                        <p className="skill-content-parph">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                    </div>
                    <div className="skill-down-progress">
                        <label htmlFor="html" className="skill-progress-text">اچ تی ام ال</label>
                        <progress className='skill-progress-item' id='html' value={80} max={100} ></progress>
                        <label htmlFor="css" className="skill-progress-text">سی اس اس</label>
                        <progress className='skill-progress-item' id='css' value={80} max={100}></progress>
                        <label htmlFor="js" className="skill-progress-text">جاوا اسکریپیت</label>
                        <progress className='skill-progress-item' id='js' value={70} max={100}></progress>
                    </div>
                </div>
            </div>
        </section>
    )
  }
}
