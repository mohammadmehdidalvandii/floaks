import './main-team.css'
import { BsFacebook } from 'react-icons/bs'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { AiFillGoogleCircle } from 'react-icons/ai'
import { BsTelegram } from 'react-icons/bs'
import React, { Component } from 'react'
export default class Main__Team extends Component {
    constructor(props) {
        super(props)
        this.state = {
            teams: [
                { id: 1, img: 'images/team/img-1.jpg', name: 'زاکاری تویس', eamil: 'Zacharyt@gmail.com', job: 'طراح وب' },
                { id: 2, img: 'images/team/img-2.jpg', name: 'ارمیا ایسکو', eamil: 'JeremiahE@gmail.com', job: ' مدیر' },
                { id: 3, img: 'images/team/img-3.jpg', name: ' زاکاری تویس', eamil: 'ZacharyT@gmail.com', job: ' توسه دهند وب' },
                { id: 4, img: 'images/team/img-4.jpg', name: 'ویلیام آلدمن ', eamil: 'WilliamA@gmail.com', job: 'مدیر عامل' },
            ]
        }
    }
    render() {
        return (
            <section className="main-team">
                <div className="teams">
                    <div className="team-up">
                        <span className="team-up-text">نمونه کارهای ما</span>
                        <h3 className="team-up-title">ما سریع کار می کنیم، ما این کار را تنها انجام نمی دهیم.</h3>
                        <p className="team-up-paraph">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
                    </div>
                    <div className="team-down">
                        <div className="team-cart-box" >
                            {this.state.teams.map((team) => (
                                <div className="cart-team">
                                    <div className='cart-team-content'>
                                        <img src={team.img} alt="" className="cart-team-img" />
                                        <h3 className="cart-team-name">{team.name}</h3>
                                        <span className="cart-team-email">{team.eamil}</span>
                                        <div className="cart-team-jobs">
                                            <span className="team-job">{team.job}</span>
                                        </div>
                                    </div>
                                    <div className="cart-team-media">
                                        <a href="#" className="team-media-link"><BsFacebook /></a>
                                        <a href="#" className="team-media-link"><AiFillTwitterCircle /></a>
                                        <a href="#" className="team-media-link"><AiFillGoogleCircle /></a>
                                        <a href="#" className="team-media-link"><BsTelegram /></a>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
                <br /><br /><br /><br />
            </section>
        )
    }
}
