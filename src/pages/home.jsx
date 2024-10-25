import { SmallButton } from "../components/usefulComponent";

export default function Home(){
    return(
        <>
        <section className="introduction flex justify-evenly m-28 items-center">
            <div className="intro w-2/5 cursor-default">
                <h1 className="text-4xl font-bold mb-2 hover:bg-neutral-100 duration-200">Hello!</h1>
                <p className="mb-2 tracking-wide leading-5 hover:bg-neutral-100 duration-200">My name is Diaz Saputra, an undergraduate Informatics student at Universitas Pembangunan Nasional Veteran Jakarta.</p>
                <p className="mb-6 tracking-wide leading-5 hover:bg-neutral-100 duration-200">I have skills in web development, particularly in front-end using React and back-end using Express and Laravel.</p>
                <SmallButton text="See my projects" href="https://github.com/d1azdn" target="_blank"/>
            </div>
            <div className="images">
                <img src="./public/assets/profile.jpg" alt="..." width={250} className="rounded-full"/>
            </div>
        </section>
        </>
    )
}