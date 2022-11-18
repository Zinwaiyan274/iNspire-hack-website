import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="navbar-brand ms-5">
                <h3 className="text-white">Tee Htwin</h3>
            </div>
            <div className="container-fluid">
                <div className="collapse navbar-collapse pe-5" id="navbarRightAlignExample">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5 pe-5">
                        <li className="nav-item">
                            <a className="nav-link text-white active" aria-current="page" href="#">Page 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Page 2</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        // <nav>
        //     <div className="navbar">
        //         <ul class=""> 
        //             <li class="nav-item">
        //                 <Link class="nav-link text-white" href={'/'}>Page 1</Link>
        //             </li>
        //             <li class="nav-item">
        //                 <Link class="nav-link text-white" href={'/'}>Page 2</Link>
        //             </li>
        //         </ul>
        //     </div>
        // </nav>
    )
}

export default Navbar