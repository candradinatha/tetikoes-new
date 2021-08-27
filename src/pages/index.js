import React, { useEffect, useState } from "react"
import MetaTags from 'react-meta-tags';

//Import Components
import Navbar from "./Navbar/Navbar"
import Section from "./HeroSection/Section"
import CardsMini from "./HeroSection/cards-mini"
import OurService from "./OurService/our-service"
import OurStory from "./OurStory/our-story"
import RoadMap from "./RoadMap/road-map"
import OurTeam from "./Team/our-team"
import Blog from "./Blog/blog"
import FAQs from "./Faqs/FAQs"
import Footer from "./Footer/footer"
import Aos from 'aos';
import 'aos/dist/aos.css';

const CryptoIcoLanding = () => {
  const [imglight, setimglight] = useState(true)
  const [navClass, setnavClass] = useState("")

  // Use ComponentDidMount
  useEffect(() => {
    window.addEventListener("scroll", scrollNavigation, true)
  })

  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  function scrollNavigation() {
    var scrollup = document.documentElement.scrollTop
    if (scrollup > 80) {
      setimglight(false)
      setnavClass("nav-sticky")
    } else {
      setimglight(true)
      setnavClass("")
    }
  }

  return (
    <React.Fragment>
      <MetaTags>
        <title>Tetikoes | Motion Design</title>
      </MetaTags>
      {/* import navbar */}
      <Navbar navClass={navClass} imglight={imglight} />

      {/* Hero section */}
      <Section />

      {/* mini cards */}
      {/* <CardsMini /> */}

      {/* aboutus */}
      <OurService />

      {/* features */}
      <OurStory />

      {/* roadmap */}
      <RoadMap />

      {/* our team */}
      <OurTeam />

      {/* blog */}
      {/* <Blog /> */}

      {/* faqs */}
      <FAQs />

      {/* footer */}
      <Footer />
    </React.Fragment>
  )
}

export default CryptoIcoLanding
