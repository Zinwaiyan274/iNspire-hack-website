import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendar } from "@fortawesome/free-regular-svg-icons"
import Image from "next/image"

const Home = () => {
  return (
    <div>
    <div class="head">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xl-1 col-sm-0 col-md-0 col-lg-0 offset-lg-1 offset-0 firstCol"></div>
          <div class="col-xl-4 col-sm-12 col-md-6 col-lg-12 secondCol">
            <div>
              <img src="ihack.png" />
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-sm-12 thirdCol text-white">
            <div class="text">
              <h1 class="firstText">HACKATHON</h1>
              <p class="secondText">Myanmar's first in-person hackathon
                <br></br>
                in 2 years.
              </p>
              <p class="thirdText">For High School Students And University Students</p>
              <p class="fourthText"> 
                <FontAwesomeIcon icon={faCalendar} style={{ fontSize:"25px" }} /> &nbsp; December 23rd - 25th
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="body">
      <div class="conatiner-fluid">
        <div class="row w-100">
          <div class="col-3 offset-2 title">
            <h1>ABOUT <br/> INSPIRE <br/> HACK</h1>              
          </div>
          <div class="col-6 offset-1 about">
            <h1 class="">What is Inspire Hack?</h1>
            <p class="para">
              Inspire Hack is a 24 hours long first in-person hackathon 
              in Myanmar and will also be first in-person Hackathon 
              that allow high schoolers to participate. On December 
              23rd 2022, about 125 students will transform their ideas 
              to reality. Our mission is to provide avenue to 
              programming and computer science to the students. 
              Attendees will have an unforgettable experience during 
              this hackathon.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="spon">
      <h1>Sponsors</h1>
      <h2>International Sponsors</h2>
      <div class="sponLogo">
        <Image src={'/hack-club-bank.svg'} width="200" height="100" /> &nbsp; &nbsp; &nbsp;
        <Image src={'/Desmos Logo.svg'} width="200" height="100" /> &nbsp; &nbsp; &nbsp;
        <Image src={'/xyz.svg'} width="200" height="100" /> &nbsp; &nbsp; &nbsp;
        <Image src={'/taskade.svg'} width="200" height="100" /> &nbsp; &nbsp; &nbsp;
        <Image src={'/StreamYard.svg'} width="200" height="100" /> &nbsp; &nbsp; &nbsp;
      </div>
      <p>
        <a href='/Inspire Hack Prospectus.pdf' target="_blank">
          WE ARE TRYING TO REACH TO OUR POTENTIAL SPONSORS. <br/>
          IF YOU ARE INTERESTED IN SUPPORTING OUR EVENT, PLEASE CHECK OUR PROSPECTUS
        </a>
      </p>
        
    </div>
  </div>
  )
}
export default Home