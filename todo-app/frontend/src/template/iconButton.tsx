interface IconButton{
    hide?: boolean
    w?: number
    h?: number
    style: string
    icon: string
}

export default function IconButton(props: IconButton){

    if(props.hide){
        return null
    }
    else{
        return(
            <button className={`w-${props.w || 8} h-${props.h || 8}
                rounded-md bg-${props.style}-500
                text-white hover:bg-${props.style}-700`}>
                    <i className={"fa fa-"+props.icon}></i>
            </button>
        )
    }
}