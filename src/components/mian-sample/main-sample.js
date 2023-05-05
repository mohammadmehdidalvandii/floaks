import './main-sample.css'

import React, { Component } from 'react'

export default class Main__Sample extends Component {
    constructor(props){
        super(props)

        this.state = {
            AllSample:[
                {id:1 ,img:'./images/sampleworks/img-1.png'},
                {id:2 ,img:'./images/sampleworks/img-2.png'},
                {id:3 ,img:'./images/sampleworks/img-3.png'},
                {id:4 ,img:'./images/sampleworks/img-4.png'},
                {id:5 ,img:'./images/sampleworks/img-5.png'},
                {id:6 ,img:'./images/sampleworks/img-6.png'},
            ]    
        }
        this.allworkHandler = this.allworkHandler.bind(this)
        this.commercial = this.commercial.bind(this)
        this.Plan = this.Plan.bind(this)
        this.Graphics = this.Graphics.bind(this)
    }

    allworkHandler(){
        this.setState(
            {
                AllSample:[
                    {id:1 ,img:'./images/sampleworks/img-1.png'},
                    {id:2 ,img:'./images/sampleworks/img-2.png'},
                    {id:3 ,img:'./images/sampleworks/img-3.png'},
                    {id:4 ,img:'./images/sampleworks/img-4.png'},
                    {id:5 ,img:'./images/sampleworks/img-5.png'},
                    {id:6 ,img:'./images/sampleworks/img-6.png'},
                ]  ,
              
            }
        )
    }
    commercial(){
      
        this.setState({
            AllSample:[
                {id:1 ,img:'./images/sampleworks/img-1.png'},
                {id:5 ,img:'./images/sampleworks/img-5.png'},
                {id:6 ,img:'./images/sampleworks/img-6.png'},
            ] 
        })
    }
    Plan(){
        this.setState(
            {
                AllSample:[
                    {id:2 ,img:'./images/sampleworks/img-2.png'},
                    {id:3 ,img:'./images/sampleworks/img-3.png'},
                    {id:4 ,img:'./images/sampleworks/img-4.png'},
                   
                ]  
            }
        )
    }

    Graphics(){
        this.setState(
            {
                AllSample:[
                    {id:6 ,img:'./images/sampleworks/img-6.png'},
                ]  
            }
        )
    }
    render() {
        return (
            <section className="main-sample">
                <div className="sample">
                    <div className="sample-up">
                        <span className="sample-up-text">نمونه کارهای ما</span>
                        <h3 className="sample-up-title">ما سریع کار می کنیم، ما این کار را تنها انجام نمی دهیم.</h3>
                        <p className="sample-up-paraph">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
                    </div>
                    <div className="sample-down">
                        <div className="sample-dowm-button">
                            <button className="down-btn down-btn-active down__btn" onClick={this.allworkHandler}>همه</button>
                            <button className="down-btn down-btn-active " onClick={this.commercial}>نام تجاری</button>
                            <button className="down-btn down-btn-active" onClick={this.Plan}>طرح</button>
                            <button className="down-btn down-btn-active" onClick={this.Graphics}>گرافیک</button>
                        </div>
                        <div className="down-contanet">
                           {this.state.AllSample.map((itemall)=>(
                                <div className="down-content-img" key={itemall.id}>
                                <img src={itemall.img}  alt="" className="content-image" />
                            </div>
                           ))}
                          
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
