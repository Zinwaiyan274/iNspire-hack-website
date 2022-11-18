import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendar } from "@fortawesome/free-regular-svg-icons"

const Home = () => {
  return (
    <div className="body">
      <div className="container-fluid">
        <div className="row ">
          <div className="col-md-5 secondCol">
            <p className="text-white">iNSPIRE <br></br>HACK</p>
          </div>
          <div className="col-md-7 firstCol text-white">
            <h1 className="text-uppercase">Hackathon</h1>
            <h3>Myanmar&apos;s first in-person hackathon in 2 years.</h3>
            <p>For High School Students And University Students</p>
            <p>
              <FontAwesomeIcon icon={faCalendar} style={{fontSize: '30px',marginRight:'15px'}} /> December 23rd - 25th
            </p>
          </div>
        </div>

        <div className="row about my-5 ms-5">
          <div className="col-md-4 text-uppercase text-white inspireHack mt-5" >
            about inspire hack
          </div>

          <div className="col-md-8 mt-5 aboutInspireContent ">
            <h3 className="titleColor">What is Inspire Hack?</h3>
            <p className="text-white content text-justify">Inspire Hack is a  24 hours long first in-person hackathon in Myanmar and will also be first in-person Hackathon that allow high schoolers to participate. On December 23rd 2022, about 125 students will transform their ideas to reality. Our mission is to provide avenue to programming and computer science to the students. Attendees will have an unforgettable experience during this hackathon.</p>
          </div>
        </div>

        <div className="row about mt-5">
          <div className="">
            <h3 className="titleColor text-center">Sponsors</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home