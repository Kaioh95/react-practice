
interface PageHeaderProps{
    name?: string
    small?: string
}

export default function PageHeader(props: PageHeaderProps){
    
    return(
        <header className="my-8">
            <h2 className="text-3xl text-neutral-800 font-bold">
                {props.name} <small className="text-lg font-normal">{props.small}</small>
            </h2>

            <hr className="mt-4"/>
        </header>
    )
}