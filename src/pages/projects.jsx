import { SmallButton, SmallCard, ProgressCard, ProjectsCard } from "../components/usefulComponent"

export default function Projects(){
    return(
        <>
        <section className="projects justify-center m-32">
            <div className="top-section mb-4 flex gap-5">
                <h1 className="text-4xl font-bold">Projects</h1>
                <a href="https://github.com/d1azdn?tab=repositories" target="_blank" className="card px-4 py-2 text-sm border border-neutral-200 hover:bg-neutral-200 border-solid rounded-xl">d1azdn's Repository</a>
            </div>
            <div className="card-list grid grid-cols-3 gap-5">
                <ProjectsCard title="koharuu" text="Simple Anime Website - implementation RESTAPI using ReactJS"/>
                <ProjectsCard title="flowerin" text="Simple vite, vue, and tailwindcss, learning #1"/>
                <ProjectsCard title="rakittx" text="Simple Laravel website - univ"/>
                <ProjectsCard title="sarungan" text="Simple Website using bootsrap."/>
                <ProjectsCard title="ittX-imgtoText" text="Simple OCR Image to Text using EasyOCR."/>
            </div>
        </section>
        </>
    )
}

