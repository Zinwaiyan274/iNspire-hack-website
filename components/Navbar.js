import Link from "next/link"

const Navbar = () => {
    return (
    <nav class="navbar fixed-top navbar-expand-lg shadow-5">
        <div class="navbar-brand ms-5">
           <img src="/Logo.svg" width="60px"/>
        </div>
        <div class="container-fluid">
            <div class="collapse navbar-collapse pe-5" id="navbarRightAlignExample">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5 pe-5">
                    <li class="nav-item">
                        <a class="nav-link text-white active" aria-current="page" href="#">
                            <Link href='/' style={{ color:'white' }}>Home</Link>
                        </a>
                    </li>
                    <li class="nav-item text-white">
                        <a class="nav-link text-white active" aria-current="page" href="#">
                            <Link href='/faq' style={{ color:'white' }}>FAQ</Link>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navbar