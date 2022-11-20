import Link from "next/link"
import Image from "next/image"
import Script from "next/script"

const Navbar = () => {
    return (
        <nav>
            <div class='con'>
                <div class="logo">
                    <Image src={'/Logo.svg'} width="70" height="70"/>
                </div>

                <div class="menu">
                    <Link href={'/'} class="a">Home</Link>
                    <Link href={'/faq'} class="a">FAQ</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar