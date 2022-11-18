import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendar } from "@fortawesome/free-regular-svg-icons"

const Home = () => {
  return (
    <div>
    <div class="head">
      <div class="container-fluid">
        <div class="row">
          <div class="col-1 offset-1 firstCol"></div>
          <div class="col-4 secondCol">
            <div>
              <h1 class="fName">iNSPIRE</h1> 
              <h1 class="sName">HACK</h1>
            </div>
          </div>
          <div class="col-6 thirdCol text-white">
            <div class="text">
              <h1 class="firstText">HACKATHON</h1>
              <p class="secondText">Myanmar's first in-person hackathon
                <br></br>
                in 2 years.
              </p>
              <p class="thirdText">For High School Students And University Students</p>
              <p class="fourthText"> 
                {/* <Image class="img" src="/calendar-regular.svg" width={128} height={50}/> */}
                December 23rd - 25th
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
              Inspire Hack is a 24 hours long first in-person hackathon <br/>
              in Myanmar and will also be first in-person Hackathon <br/>
              that allow high schoolers to participate. On December <br/>
              23rd 2022, about 125 students will transform their ideas <br/>
              to reality. Our mission is to provide avenue to <br/>
              programming and computer science to the students. <br/>
              Attendees will have an unforgettable experience during <br/>
              this hackathon.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="spon">
      <h1>Sponsors</h1>
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