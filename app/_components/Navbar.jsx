import { cn } from "@/lib/utils"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { TiThMenu } from "react-icons/ti";
import { Poppins } from "next/font/google"
import Link from "next/link"

// this is single component so we don't need to dublicate the same 
// functionality across phones and wide screens
function AuthOrLogin (props){
    // TODO: make this when the user is signed in,
    // show dashboard and account profile button. Otherwise,
    // show login and sign up buttons
    return (
        <div {...props} className={"auths flex justify-between items-center gap-4 font-semibold " + props.className} >
            <Link href="/auth/login" className="px-6 py-2 border border-prime rounded-md" >Login</Link>
            <Link href="/auth/sign-up" className="px-6 py-2 border bg-prime rounded-md">Sign up</Link>
        </div>
    )
}

function NavbarLinks (){
    return (
        <>
            <Link className="link-underline" href="/#home">Home</Link>
            <Link className="link-underline" href="/#aboutus">About us</Link>
            <Link className="link-underline" href="/#features">Features</Link>
            <Link className="link-underline" href="/#contact">Contact</Link>
        </>
    )
}
export default function Navbar (){
    return (
        <navbar className="sticky top-0 left-0 w-full h-full py-[18px] px-[64px] max-md:pr-6 flex justify-between items-center bg-white shadow-md">

            {/* TODO: Make the navbar responsive */}
            <div className={cn("logo text-4xl")}>Foody</div>
            <div className="navbar-links flex gap-4 text-lg max-md:hidden">
                <NavbarLinks />
            </div>

            <div className="max-md:hidden">
                <AuthOrLogin />
            </div>

            {/* devices with width less than 768px, should disable the above and enable dialogal navbar  */}
            <Sheet>
                <SheetTrigger asChild>
                    <TiThMenu className="hidden max-md:block text-3xl text-secnd hover:cursor-pointer"></TiThMenu>
                </SheetTrigger>
                <SheetContent side="top">
                    <div className="w-full flex flex-col justify-center items-center !text-body font-medium py-6 ">
                        <NavbarLinks />
                    </div>
                    <SheetFooter>
                    <SheetClose asChild>
                        <div className="w-full grid place-items-center">
                            <AuthOrLogin className="flex-col !gap-2 items-stretch !justify-between text-button font-semibold w-60" />
                        </div>
                    </SheetClose>
                </SheetFooter>
                </SheetContent>
            </Sheet>
        </navbar>
    )
}