import Link from "next/link"

const Navbar = () => {
    return (
    <nav class="navbar fixed-top navbar-expand-xl shadow-5">
        <div class="container-fluid">
            <div class="ms-5">
                <img src="/Logo.svg" width="60px"/>
            </div>
        
            <div class="navItem">
                <ul class="">
                    <li class="">
                        <Link href={'/'} class="text-white">Home</Link>
                    </li>
                    <li class="">
                        <Link href={'/faq'} class="text-white">FAQ</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navbar