import Link from "next/link"
export default function Country(){
    return(
        <>
        <ul className="bg-black text-white">
        <li ><Link href="/country/pakistan">Pakistan</Link></li>
        <li><Link href="/country/bangladesh">Bangladesh</Link></li>
        <li><Link href="/country/india">India</Link></li>
        <li><Link href="/country/japan">Japan</Link></li>
        <li><Link href="/country/china">China</Link></li>
        </ul>
        </>
    )
};