import "../styles/featureCard.css"

export default function FeatureCard(props){
    return (
        <>
            <div className="feature-card"> 
                <img className="feature-img" src={props.img} alt="Feature"/>
                <h4 className="feature-name"> {props.name}</h4>
                <p className="feature-detail"> {props.detail}</p>
            </div>
        </>
    )
}