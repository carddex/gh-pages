import React from "react"
import Banner from "../components/Banner/banner"
import TextBlock from "../components/TextBlock/textBlock"
import TextBlockImg from "../components/TextBlockImg/textBlockImg"
import Perk from "../components/Perk/perk"
import Button from "../components/Button/button"
import Packages from "../components/Packages/packages"
import Package from "../components/Package/package"
import Timeline from "../components/Timeline/timeline"
import Contact from "../components/Contact/contact"
import { Link } from "react-scroll"

import perk1Img from "../images/cash-machine.svg"
import perk2Img from "../images/swap.svg"
import perk3Img from "../images/wallet.svg"

import { IconContext } from "react-icons"
import { MdDone, MdClear } from "react-icons/md"

const HomePage = () => {
  return (
    <>
      <Banner />
      <TextBlock
        id="About"
        title="Join the DeFi table with CardDex"
        paragraph="Swap, earn, and yield farming, all on one scalable decentralized exchange. Welcome to the future of DeFi with the #1 AMM on the Cardano Blockchain."
      >
        <Link to="Dex" smooth={true} duration={500}>
          <Button label="Tell Me More" cta="Tell Me More!" />
        </Link>
      </TextBlock>
      <div id="Dex">
        <TextBlockImg
          id="Dex"
          title="A Decentralized Exchange (DeX)"
          subtitle="An ownerless marketplace for efficient cryptocurrency transactions."
        >
          <div className="flex-container trio-block" >
            <Perk
              img={perk1Img}
              alt="AMM (Automated Market Maker)"
              title="AMM (Automated Market Maker)"
              content="Liquidity for both traders and Cardano applications."
            />
            <Perk
              img={perk2Img}
              alt="CRYPTO SWAPS"
              title="CRYPTO SWAPS"
              content="CardDex allows you to swap any Cardano native token."
            />
            <Perk
              img={perk3Img}
              alt="Earn Crypto"
              title="Earn Crypto"
              content="Put your capital to work. Add liquidity to the CardDex Liquidity pool and earn tokens. Hold CardDex (Ticker ACE) and receive a part of the fees collected by the exchange."
            />
          </div>
        </TextBlockImg>
      </div>
      <Packages
        title="Features"
        para=""
      >
        <IconContext.Provider
          value={{
            color: "#7FFF00",
            size: "1.2em",
            style: { verticalAlign: "middle", marginRight: "5px" },
          }}
        >
          <Package title="Fast" >
            <ul>
              <li>
                <MdDone />
                In less than 1 minute, a swap/ stake order will be executed on the Cardano network due to the implementation of Hydra.  
                This time will only decrease  and will decrease with future updates to the evolving Cardano network
              </li>
            </ul>
          </Package>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Package title="Decentralized" active={true}>
            <ul>
              <li>
                <MdDone />
                A decentralized crypto exchange that runs on the Cardano blockchain without the need of any classic financial institutions 
                that would traditionally ‘serve’ as intermediaries in the pre-Cardano world.
              </li>
            </ul>
          </Package>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Package title="Low Fees">
            <ul>
              <li>
                <MdDone />
                0.69 swap fee + Cardano transfer fees and nothing more!
              </li>
              <li>
                <MdDone />
                In the future, you will be required to hold at least 1 ACE in order to execute a swap.
              </li>
            </ul>
          </Package>
        </IconContext.Provider>
      </Packages>

      <TextBlock
        id="Timeline"
        title="Future Timeline of Events"
      ></TextBlock>
      <Timeline>

      </Timeline>
      <br/><br/><br/><br/><br/><br/>
      {/*
      <Contact
        id="contact"
        title="Contact Startup today and see how we can help your business grow"
        subtitle="Every second counts when you're looking to get your new business started. Drop Startup a message and one of our representatives will be in contact"
      />
      */}
    </>
  )
}

export default HomePage
