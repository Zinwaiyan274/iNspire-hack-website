import Link from "next/link"
import Image from "next/image"
import Script from "next/script"

const Navbar = () => {
    return (
    // <nav class="navbar fixed-top navbar-expand-lg shadow-5">
    //     <div class="container-fluid">
    //         <di class="row">
    //             <di class="col-2">
    //                 <div class="navbar-brand ms-5">
    //                     <img src="/Logo.svg" width="1700px"/>
    //                 </div>
    //             </di>
    //             <div class="col-8">
    //                 <div class="navItem">
    //                     <div class="pe-5" id="navbarRightAlignExample">
    //                         <ul class="ms-auto mb-2 mb-lg-0 me-5 pe-5">
    //                             <li class="">
    //                                 <a class="text-white" aria-current="page" href="#">
    //                                     <Link href='/' style={{ color:'white' }}>Home</Link>
    //                                 </a>
    //                             </li>
    //                             <li class="text-white">
    //                                 <a class="text-white" aria-current="page" href="#">
    //                                     <Link href='/faq' style={{ color:'white' }}>FAQ</Link>
    //                                 </a>
    //                             </li>
    //                         </ul>
    //                     </div>
    //                 </div>
    //             </div>
    //         </di>
    //     </div>
    // </nav>
        <nav>
            <div class='con'>
                <div class="logo">
                    <Image src={'/Logo.svg'} width="70" height="70"/>
                </div>

                <div class="menu">
                    <Link href={'/'} class="a is-active">Home</Link>
                    <Link href={'/faq'} class="a">FAQ</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar