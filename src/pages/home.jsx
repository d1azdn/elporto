import { SmallButton } from "../components/usefulComponent";

export default function Home(){
    return(
        <>
        <section className="introduction flex flex-col-reverse md:flex-row m-8 sm:m-28 items-center md:items-start md:justify-center gap-10">
            <div className="intro cursor-default md:w-1/2">
                <h1 className="text-2xl md:text-4xl font-bold mb-2 hover:bg-neutral-100 duration-200">Hello!</h1>
                <p className="mb-2 text-sm md:text-base tracking-wide leading-5 hover:bg-neutral-100 duration-200">My name is Diaz Saputra, an undergraduate Informatics student at Universitas Pembangunan Nasional Veteran Jakarta.</p>
                <p className="mb-6 text-sm md:text-base tracking-wide leading-5 hover:bg-neutral-100 duration-200">I have skills in web development, particularly in front-end using React and back-end using Express and Laravel.</p>
                <SmallButton text="See my projects" href="https://github.com/d1azdn" target="_blank"/>
            </div>
            <div className="images">
                <img src="assets/profile.jpg" alt="..." width={250} className="rounded-full"/>
            </div>
        </section>
        </>
    )
}