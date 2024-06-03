{/*destructuring method used to pass data from object into function*/} 
export default function CoreConcept({image,title,description}){
    return (
    <li>
      <img src={image} alt={title}/>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
    );
  }