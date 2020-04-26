import React from 'react'
import { Link } from 'gatsby'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { BrowserRouter } from 'react-router-dom';

export default () => {
  return (
    <div id="postWrap">
      <div id="vertDiv"></div>
      <BrowserRouter>
      <Header title="Home" date="2020"/>
      </BrowserRouter>
      <div id="postContent">
      <span class="headerBumper"></span>
      <div class="titleDiv"></div>
      <div id="artSum">In Consideration of Design Ethics and Pedagogy</div>
      <div class="titleDiv"></div>
        <div
          id="textContent"/>
      <p>
It’s kind of the main filtering agent, the publishing project. It’s interesting because when we graduated, we started our publishing project as a way to intentionally keep some kind of school energy—some kind of selfish or self-interested or at least self-motivated energy—going forward. All three of us who were in the design program had various internship experiences the year before that, in some ways, put a bad taste into our mouths going into senior year—an awareness that you can get subsumed into a standard day-to-day working practice that can pull you away from the reasons you started something in the first place.
      </p>
      </div>
      <div id="postNotes">
      <span class="headerBumper"></span>
          <li>
            <div class="titleDiv"></div>
            <span class="noteTop">
            <span class="noteNumb">1</span>
            <span class="noteDesc">An introductory essay. <a class="noteLink" href="">""</a></span>
            </span>
            <img src="" alt=""></img>
            </li>
          <li>
            <div class="titleDiv"></div>
            <span class="noteTop">
            <span class="noteNumb">2</span>
            <span class="noteDesc">Interview with Anita Cooney <a class="noteLink" href="">""</a></span>
            </span>
            <img src="" alt=""></img>
            </li>
          <li>
            <div class="titleDiv"></div>
            <span class="noteTop">
            <span class="noteNumb">3</span>
            <span class="noteDesc">Interview with Jessica Wexler <a class="noteLink" href="">""</a></span>
            </span>
            <img src="" alt=""></img>
            </li>
      </div>
      <Footer /> 
    </div>
  )
}