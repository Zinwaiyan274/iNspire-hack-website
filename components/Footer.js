import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

const Footer = () => {
    return (
      <div class="footer">
        <div className='container-fluid bg-dark text-white py-3 text-center'>
          <div className='row d-flex align-items-center justify-content-between '>

            <div className='col-md-4'>
              <h3 class="fs-4">Contact US</h3>
              <p>customercare@teehtwin.org</p>
              <p>+95-9985112943</p>
            </div>

            <div className='col-md-4'>
              <h3 class="fs-4">Partner With US</h3>
              <p>pr@teehtwin.org</p>
              <p>+95-9985112943</p>
            </div>

            <div className='col-md-4 mb-4'>
              <h3 class="fs-4">Follow Us</h3>
              <span className='me-3 rounded-sm'>
                  <Link href='https://www.facebook.com/teehtwin.org' target="_blank">
                      <FontAwesomeIcon icon={faFacebook} style={{ fontSize:"30px" }} ></FontAwesomeIcon>
                  </Link>
              </span>

              <span className='me-3 rounded-sm'>
                  <Link href='https://www.youtube.com/channel/UCBraKW64CZLSyK-b49A2nBw' target="_blank">
                      <FontAwesomeIcon icon={faYoutube} style={{ fontSize:"30px" }} ></FontAwesomeIcon>
                  </Link>
              </span>

              <span className='me-3 rounded-sm'>
                  <Link href='https://www.instagram.com/teehtwin' target="_blank">
                      <FontAwesomeIcon icon={faInstagram} style={{ fontSize:"30px" }} ></FontAwesomeIcon>
                  </Link>
              </span>
            
              <span className='me-3 rounded-sm'>
                  <Link href='https://twitter.com/teehtwin' target="_blank">
                      <FontAwesomeIcon icon={faTwitter} style={{ fontSize:"30px" }} ></FontAwesomeIcon>
                  </Link>
              </span>
            
              <span className='me-3 rounded-sm'>
                  <Link href='https://www.linkedin.com/in/tee-htwin' target="_blank">
                      <FontAwesomeIcon icon={faLinkedin} style={{ fontSize:"30px" }} ></FontAwesomeIcon>
                  </Link>
              </span>

              <div className='fs-4 faq'>
                  <Link href="/faq" style={{ color:'white' }}>FAQ</Link>
              </div>
            </div>
          </div>

          <div className='row d-flex align-items-center justify-content-center mt-4'>
            Copy Right @2022; Tee Htwin
          </div>
        </div>
      </div>
    )
}

export default Footer