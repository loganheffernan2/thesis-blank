import React from "react"
import { graphql } from "gatsby"
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../css/post.css'
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
      <span class="headerBumper"></span>
      <div id="artSum">{frontmatter.subhead}</div>
      <div class="titleDiv"></div>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
      <div id="postNotes">
      <span class="headerBumper"></span>
        {
        frontmatter.notes.map(notes=> {
        return (
          <li key={notes.number}>
            <div class="titleDiv"></div>
            <span class="noteNumb">{notes.number}</span>
            <span class="noteDesc">{notes.desc}</span>
            <img src={notes.image} alt=""></img>
            </li>
        )
        }
        )}
      </div>
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
        notes {number, desc, image}

      }
    }
  }
`