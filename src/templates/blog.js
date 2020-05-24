import React from "react"
import { graphql } from "gatsby"
import Header from '../components/HeaderAlt'
import Footer from '../components/Footer'
import SplashTrigger from '../components/SplashTrigger'
import '../css/post-alt.css'
import '../css/global.css'

export default function Template({
  
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (

    <div id="postWrap">
      <div id="vertDiv"></div>
      <Header title={frontmatter.title} date={frontmatter.date}/>
      <div id="postContent">
      <span className="headerBumper"></span>
      <div id="artSum" >{frontmatter.subhead}</div>
      <div className="titleDiv"></div>
        <div
          id="textContent"
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      <div id="footerBumper" />
      </div>
      <div id="postNotes">
      <span className="headerBumper"></span>
        {
        frontmatter.notes.map(notes=> {
        return (
          <li key={notes.number} refs={notes.number}>
            <div className="titleDiv"></div>
            <span className="noteBumpers">
              <span className="noteTop">
              <span className="noteNumb">{notes.number}</span>
              <span className="noteDesc"><p>{notes.desc}</p> <a className="noteLink" href={notes.link}>{notes.linktitle}</a></span>
              </span>
              <img src={notes.image} alt=""></img>
            </span>
            </li>
        )
        }
        )}
      </div>
      <SplashTrigger /> 
      <Footer />
    </div>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMM. DD, YYYY")
        path
        title
        subhead
        notes {number, desc, linktitle, link, image}

      }
    }
  }
`