import "./weblog.css"
import {AiOutlineEye} from 'react-icons/ai'
import {GoCommentDiscussion} from 'react-icons/go'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import React, { Component } from 'react'

export default class Weblog extends Component {
    constructor(props){
        super(props)
        this.state ={
            weblogs:[
                {id:1, image:'images/weblog/img-1.jpg', img:'./images/team/img-1.jpg' ,  show:'256 نمایش' , comment:' 45 نظر'},
                {id:2, image:'images/weblog/img-2.jpg', img:'./images/team/img-2.jpg' ,  show:'270 نمایش' , comment:'63 نظر'},
                {id:3, image:'images/weblog/img-3.jpg', img:'./images/team/img-3.jpg' ,  show:'451 نمایش' , comment:' 76 نظر '},
            ]
        }
    }
  render() {
    return (
      <section className="weblog">
        <div className="weblogs">
        <div className="weblog-up">
                        <span className="weblog-up-text">وبلاگ ما  </span>
                        <h3 className="weblog-up-title">آخرین پست های وبلاگ ما</h3>
                        <p className="weblog-up-paraph">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
                    </div>
            <div className="weblog-down">
                <div className="weblog-items">
                   {this.state.weblogs.map((weblog)=>(
                     <div className="weblog-item" >
                     <img src={weblog.image} alt="" className="weblog-item-img" />
                     <div className="weblog-item-author">
                         <img src={weblog.img} alt="" className="item-author-img" />
                         <span className="item-author-naem">دکه مونرو</span>
                     </div>
                     <div className="weblog-item-content">
                         <p className="item-content-paraph">
                         لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                         </p>
                         <div className="item-comment">
                         <a href="#" className="ite-comment-link">{weblog.show}<AiOutlineEye/></a>
                         <a href="#" className="ite-comment-link">{weblog.comment}<GoCommentDiscussion/></a>
                         </div>
                     </div>
                             <a href="#" className="item-content-btns"><AiOutlineArrowLeft/> ادامه مطلب</a>
                 </div>
                   ))}
                </div>
            </div>
        </div>
      </section>
    )
  }
}
