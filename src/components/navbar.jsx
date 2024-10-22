import { SmallButton } from "./usefulComponent"

function ListNavbar(props){
    return(
        <li className="text-sm text-neutral-400 hover:text-neutral-900 hover:tracking-widest tracking-wide duration-300">
            <a href={props.href} className="p-2">{props.text}</a>
        </li>
    )
}

export default function Navbar(){
    return (
        <>
            <header>
                <nav className="flex justify-between border-b-2 border-solid border-neutral-50 py-4 px-20">
                    <ul className="flex gap-14 justify-between items-center content-center">
                        <li>
                            <a href="" className="font-bold text-xl">d1azdn</a>
                        </li>
                        <ListNavbar href="" text="Home"/>
                        <ListNavbar href="" text="About"/>
                        <ListNavbar href="" text="Projects"/>
                        <ListNavbar href="" text="Contact"/>
                    </ul>
                    <ul className="justify-between items-center content-center">
                        <li>
                            <SmallButton text="See on github"/>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}