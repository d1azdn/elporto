export function SmallButton(props){
    return(
        <>
        <a href={props.href} className="text-inherit bg-white rounded-lg px-4 py-2 text-sm border-solid border-neutral-200 border hover:bg-neutral-200 duration-200 hover:cursor-pointer">{props.text}</a>
        </>
    )
}