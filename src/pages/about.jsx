import { SmallButton, SmallCard, ProgressCard } from "../components/usefulComponent"

export default function About(){
    return(
        <>
        <section className="introduction flex justify-evenly m-32 items-center">
            <div className="intro w-1/2 cursor-default">
                <h1 className="text-4xl font-bold mb-2 hover:bg-neutral-100 duration-200">About me</h1>
                <p className="mb-2 tracking-wide leading-5 hover:bg-neutral-100 duration-200">Hello! My name is Diaz Saputra, an undergraduate student majoring in Informatics at Universitas Pembangunan Nasional Veteran Jakarta.</p>
                <p className="mb-6 tracking-wide leading-5 hover:bg-neutral-100 duration-200">I am driven by a deep curiosity and ambition to learn new things. I am continuously improving my skills and exploring new technologies in the ever-evolving world of web development.</p>
            </div>
            <div className="more-intro items-center">
                <SmallCard title="Currently learning" text="Express.js"/>
                <SmallCard title="Plans" text="Coding, fullstack, happiness."/>
            </div>
        </section>

        <section className="my-skill justify-center m-32">
            <h1 className="text-4xl mb-4 font-bold">Skills</h1>
            <div className="card-list grid grid-cols-3 gap-5">
                <ProgressCard title="Basic HTML, CSS, JS" value="90%"/>
                <ProgressCard title="UI / UX" value="80%"/>
                <ProgressCard title="React.js" value="60%"/>
                <ProgressCard title="Vue.js" value="50%"/>
                <ProgressCard title="Laravel" value="40%"/>
                <ProgressCard title="Python" value="40%"/>
            </div>
        </section>

        <section className="experience m-32">
            <h1 className="text-4xl mb-4 font-bold">Experience</h1>
            <div className="exp-list">
                <h1 className="text-lg">KSM Multimedia - Design Graphic (Member)</h1>
                <p className="mb-4">Dec 2022 - Feb 2023</p>
                <p>● Able to use editing applications such as Adobe Photoshop, Figma, and Figma Collaborator.</p>
                <p>● Produced 5+ UI/UX Design, such as making user personas, wireframe and prototypes.</p>
                <p>● Capable of delivering polished final projects, with the results designed UI presented through
                Figma</p>
            </div>
        </section>
        </>
    )
}
        
