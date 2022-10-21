import PageHeader from "../template/PageHeader"

interface AboutProps{
    text?: string
}

export default function About(props: AboutProps){
    
    return(
        <div>
            <PageHeader name="About" small="Nós"></PageHeader>

            <h2 className="text-xl font-bold">Nossa História</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <h2 className="text-xl font-bold">Missão e Visão</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <h2 className="text-xl font-bold">Imprensa</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
    )
}