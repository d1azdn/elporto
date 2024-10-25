import { SmallCard } from "../components/usefulComponent"

export default function Contact(){
    return(
        <>
        <section className="introduction flex flex-col md:flex-row justify-evenly m-8 md:m-32 md:items-center">
            <div className="intro md:w-1/2 cursor-default mb-8 md:mb-0 ">
                <h1 className="text-4xl font-bold mb-2 hover:bg-neutral-100 duration-200">Contact me</h1>
                <p className="mb-2 tracking-wide leading-5 hover:bg-neutral-100 duration-200">Feel free to contact me!</p>
            </div>
            <div className="more-intro items-center">
                <SmallCard title="Github" href="https://github.com/d1azdn" text="d1azdn"/>
                <SmallCard title="Linkedin" href="https://www.linkedin.com/in/diaz-saputra-1b6934288/" text="diaz-saputra-1b6934288"/>
                <SmallCard title="Gmail" text="diazsaputramc@gmail.com"/>
            </div>
        </section>
        </>
    )
}