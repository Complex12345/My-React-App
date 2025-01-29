
export default function Box({title, description, image, link}){
    // let id = key;

    return (
        <div className={"box"}>
            <img src={image} className={"card-img-top"} alt={title}/>
            <h2 className="box-title">{title}</h2>
            <p className="box-description">{description}</p>
            <a href={link} className="box-link">Learn more</a>
        </div>
    );
}