import { SmallButton } from "../components/usefulComponent";

export default function Home(){
    return(
        <>
        <section className="introduction flex justify-evenly m-28 items-center">
            <div className="intro w-1/3 cursor-default">
                <h1 className="text-4xl font-bold mb-2 hover:bg-neutral-100 duration-200">Hallo!</h1>
                <p className="mb-2 tracking-wide leading-5 hover:bg-neutral-100 duration-200">Nama saya Diaz Saputra, mahasiswa informatika di Universitas Pembangunan Nasional Veteran Jakarta.</p>
                <p className="mb-6 tracking-wide leading-5 hover:bg-neutral-100 duration-200">Saya memiliki keahlian dalam pengembangan web, khususnya pada front-end framwork React dan back-end framework Express.</p>
                <SmallButton text="See my projects"/>
            </div>
            <div className="images">
                <img src="./public/assets/profile.jpg" alt="..." width={250} className="rounded-full"/>
            </div>
        </section>
        </>
    )
}