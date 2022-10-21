import "./Card.css"

export default function Card(props){

    const cardStyle = {
        backgroundColor: props.color || "purple",
        borderColor: props.color || "purple",
    }

    return(
        <div className="Card" style={cardStyle}>
            <div className="Title">{props.titulo}</div>
            <div className="Content">
                { props.children }
            </div>
        </div>
    );
};