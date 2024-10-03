import Link from "next/link"
import Navbar from  "../components/Navbar"
export default function Country(){
    return(
        <>
        <ul>
        <li><Link href="/country/pakistan">Pakistan</Link></li>
        <li><Link href="/country/bangladesh">Bangladesh</Link></li>
        <li><Link href="/country/india">India</Link></li>
        <li><Link href="/country/japan">Japan</Link></li>
        <li><Link href="/country/china">China</Link></li>
        </ul>
        </>
    )
};