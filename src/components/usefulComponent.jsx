export function SmallButton(props){
    return(
        <>
        <a href={props.href} className="text-inherit bg-white rounded-lg px-4 py-2 text-sm border-solid border-neutral-200 border hover:bg-neutral-200 duration-200 hover:cursor-pointer">{props.text}</a>
        </>
    )
}

export function SmallCard(props){
    return(
        <>
        <div className="border border-solid border-neutral-200 py-4 pe-8 ps-4 rounded-xl hover:bg-neutral-100 duration-200 mb-4">
            <h1 className="font-semibold">{props.title}</h1>
            <p className="text-sm">{props.text}</p>
        </div>
        </>
    )
}

export function ProgressCard(props){
    return(
        <>
        <div className="card p-5 border border-solid border-neutral-200 rounded-xl hover:bg-neutral-100 duration-200">
            <h1 className="mb-3 font-semibold">{props.title}</h1>
            <div className="w-full bg-gray-300 rounded-full h-2.5">
                <div className="bg-neutral-600 h-2.5 rounded-full" style={{width : props.value}}></div>
            </div>
        </div>
        </>
    )
}