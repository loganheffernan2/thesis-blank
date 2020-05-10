import React, { Component } from 'react'
import Footer from "../components/Footer"
import Header from "../components/Header"
import Splash from "../components/Splash"
import '../css/post.css'
import '../css/global.css'
import '../css/splash.css'

export default () =>

  <div id="postWrap">
      <Splash />
      <div id="vertDiv"></div>
      <Header title="" date=""/>
      <div id="postContent">
      <span class="headerBumper"></span>
      <div class="titleDiv"></div>
      <div id="artSum">In Consideration of Ethics and Pedagogy</div>
      <div class="titleDiv"></div>
        <div
          id="textContent"
          className="blog-post-content"/>
      <p>
      <span id="subhead">An inner-institute research project exploring the positioning of ethics within design practice and pedagogy.</span><br/><br/>Stemming from a frustration with the capital-friendly industry-first tilt of Pratt Instutitute's undergraduate Communications Design program, "Where Are We" creates channels of dialogue with the school's faculty. From the Dean of the School of Design to the professors delivering the curriculum, the resulting conversations position graphic design within institutions of education and commerce alike, acknowledging the current state of the program while working toward pragmatic revisions to help better equip graphic designers for their entry into hyper-global 11th-hour capitalism.</p>          
      <img alt="" src="https://raw.githubusercontent.com/loganheffernan2/thesis-blank/master/static/assets/designPolitics-01-01.svg"></img>
      </div>
      <div id="postNotes">
      <span class="headerBumper"></span>
          <li>
            <div class="titleDiv"></div>
            <span class="noteTop">
            <span class="noteNumb">1</span>
            <span class="noteDesc">Where Are We<a class="noteLink" href="https://wherearewe.netlify.app/intro-essay/">An Introductory Essay</a></span>
            </span>
            <img src="" alt=""></img>
            </li>
          <li>
            <div class="titleDiv"></div>
            <span class="noteTop">
            <span class="noteNumb">2</span>
            <span class="noteDesc">A Conversation with Anita Cooney<a class="noteLink" href="https://wherearewe.netlify.app/anita-cooney/">On Bringing Together the School of Design</a></span>
            </span>
            <img src="" alt=""></img>
            </li>
          <li>
            <div class="titleDiv"></div>
            <span class="noteTop">
            <span class="noteNumb">3</span>
            <span class="noteDesc">A Conversation with Jessica Wexler<a class="noteLink" href="https://wherearewe.netlify.app/jessica-wexler/">On Communications Design, Re-Engineering Design Education, and Community
</a></span>
            </span>
            <img src="" alt=""></img>
            </li>
          <li>
            <div class="titleDiv"></div>
            <span class="noteTop">
            <span class="noteNumb">4</span>
            <span class="noteDesc">A Conversation with Rob Blair & Kurt Woerpel<a class="noteLink" href="https://wherearewe.netlify.app/rob-blair-kurt-woerpel/">On Publishing and Balance</a></span>
            </span>
            <img src="" alt=""></img>
            </li>
          <li>
            <div class="titleDiv"></div>
            <span class="noteTop">
            <span class="noteNumb">5</span>
            <span class="noteDesc">A Conversation with Sally Thurer<a class="noteLink" href="https://wherearewe.netlify.app/sally-thurer/">On Making The Work and Graphic Design's Cultural Implications</a></span>
            </span>
            <img src="" alt=""></img>
            </li>
          <li>
            <div class="titleDiv"></div>
            <span class="noteTop">
            <span class="noteNumb">6</span>
            <span class="noteDesc">A Conversation with Nida Abdullah<a class="noteLink" href="https://wherearewe.netlify.app/nida-abdullah/">On Ethical Mediations and Design Education</a></span>
            </span>
            <img src="" alt=""></img>
            </li>
          <li>
            <div class="titleDiv"></div>
            <span class="noteTop">
            <span class="noteNumb">7</span>
            <span class="noteDesc">A Conversation with Chris Lee<a class="noteLink" href="https://wherearewe.netlify.app/chris-lee/">On Speculative Design Pedagogy</a></span>
            </span>
            <img src="" alt=""></img>
            </li>
          <li>
            <div class="titleDiv"></div>
            <span class="noteTop">
            <span class="noteNumb">8</span>
            <span class="noteDesc">Appendix<a class="noteLink" href="https://wherearewe.netlify.app/appendix/">Additional Resources</a></span>
            </span>
            <img src="" alt=""></img>
            </li>
      </div>
      <Footer /> 
    </div>