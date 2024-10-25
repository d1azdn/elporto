import { SmallButton } from "./usefulComponent"

function ListNavbar({ setPage, ...props}){
    return(
        <li className={`${props.active ? 'font-semibold tracking-widest text-neutral-900' : ''} text-sm text-neutral-400 hover:text-neutral-900 hover:tracking-widest hover:cursor-pointer tracking-wide duration-200`}>
            <a className="p-2" onClick={()=>setPage(props.text)}>{props.text}</a>
        </li>
    )
}

export default function Navbar({ page, setPage }){

    return (
        <>
            <header>
                <nav className="flex justify-center sm:justify-between border-b-2 border-solid border-neutral-50 bg-white py-4 sm:px-20">
                    <ul className="grid grid-cols-1 sm:flex gap-3 sm:gap-14 justify-center sm:justify-between items-center content-center text-center sm:text-start">
                        <li className="block">
                            <a href="" className="font-bold text-3xl sm:text-xl">d1azdn</a>
                        </li>
                        <ListNavbar text="Home" setPage={setPage} active={page == 'Home'}/>
                        <ListNavbar text="About" setPage={setPage} active={page == 'About'}/>
                        <ListNavbar text="Projects" setPage={setPage} active={page == 'Projects'}/>
                        <ListNavbar text="Contact" setPage={setPage} active={page == 'Contact'}/>
                    </ul>
                    <ul className="hidden lg:block justify-between items-center content-center">
                        <li>
                        <SmallButton text="See on Github" href="https://github.com/d1azdn" target="_blank"/>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}