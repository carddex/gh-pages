import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import Button from "../Button/button"
import { Link } from "react-scroll"
import { motion } from "framer-motion"
import { BannerStyles } from "../../styles/bannerStyles"
import styled from 'styled-components'
/*
const Banner = () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "Banner.jpeg" }) {
          childImageSharp {
            gatsbyImageData(quality: 100, height: 1000, formats: [AUTO, WEBP])
          }
        }
      }
    `
  )
*/
const Banner = ({ className }) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "Banner.jpeg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  // Set ImageData.
  const imageData = data.desktop.childImageSharp.fluid

  //const image = data.desktop.childImageSharp.fluid
  const image = getImage(imageData)

  //const bgImage = convertToBgImage(image)

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  }
  

  return (
    <BannerStyles>
      <div >
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
        >
          
          
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <>
          {/*
          <div className="hero-content">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ ease: "easeOut", duration: 0.8, delay: 1 }}
            >
            
            <br/><br/><br/><span><br/><br/></span>
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ ease: "easeOut", duration: 0.8, delay: 1.5 }}
            >
              <br/><br/>
            </motion.p>
            <Link to="about" smooth={true} duration={500}>
              <span className="sr-only">Jump to about</span>
              <Button
                cta="Learn More"
                label="Banner Learn More"
                anchor={true}
                href="linking"
              />
            </Link>
          </div>
          */}
          </>
        </BackgroundImage>
      </div>
    </BannerStyles>
  )
}
const StyledBackgroundSection = styled(Banner)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`


export default StyledBackgroundSection
