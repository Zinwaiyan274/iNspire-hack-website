import Link from "next/link"

const Navbar = () => {
    return (
    <nav class="navbar fixed-top navbar-expand-lg shadow-5">
        <div class="navbar-brand ms-5">
            <h3 class="text-white">Tee Htwin</h3>
        </div>
        <div class="container-fluid">
            <div class="collapse navbar-collapse pe-5" id="navbarRightAlignExample">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5 pe-5">
                    <li class="nav-item">
                        <a class="nav-link text-white active" aria-current="page" href="#">Page 1</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">Page 2</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navbar