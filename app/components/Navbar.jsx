import { cn } from "@/lib/utils"
import { Poppins } from "next/font/google"
import Link from "next/link"

export default function Navbar (){
    return (
        <navbar className="sticky top-0 left-0 w-full h-full py-[24px] px-[64px] flex justify-between items-center bg-white shadow-md">

            {/* TODO: Make the navbar responsive */}
            <div className={cn("logo text-4xl font")}>Foody</div>

            <div className="navbar-links flex gap-4 text-lg">
                <Link className="link-underline" href="/home">Home</Link>
                <Link className="link-underline" href="/aboutus">About us</Link>
                <Link className="link-underline" href="/contact">Contact</Link>
                <Link className="link-underline" href="/features">Features</Link>
            </div>

            {/* the auths section well be replaced with user logo and dashboard link in case they are logged in */}
            <div className="auths flex justify-between items-center gap-4 font-semibold">
                <button className="px-6 py-2 border border-prime rounded-md" >Login</button>
                <button className="px-6 py-2 border bg-prime rounded-md">Sign up</button>
            </div>

        </navbar>
    )
}