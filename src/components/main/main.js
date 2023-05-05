import './main.css'
import Main__triat from '../main-trait/main-trait'
import Main__Sample from '../mian-sample/main-sample'
import Main__Skill from '../main-Skill/main-skill'
import Main__Product from '../main-product/main-product'
import Main__Team from '../main-team/main-team'
import FeedBack from '../FeedBacks/FeedBack'
import Weblog from '../WebLog/weblog'
import Contact from '../contact/contact'
import React, { Component } from 'react'

export default class Main extends Component {
  render() {
    return (
        <main className="mains">
            <div className="container">
                {/* main secton Traits */}
                <Main__triat></Main__triat>
                {/* main section Sample works */}
                <Main__Sample></Main__Sample>
                {/* main section Skill */}
                <Main__Skill></Main__Skill>
                {/* main section Product */}
                <Main__Product></Main__Product>
                {/* main section Team */}
                <Main__Team></Main__Team>
                 {/* main section FeedBack */}
                 <FeedBack></FeedBack>
                  {/* main section WebLog */}
                  <Weblog></Weblog>
                   {/* main section Contact */}
                   <Contact></Contact>
            </div>
        </main>
    )
  }
}
