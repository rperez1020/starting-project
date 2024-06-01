import reactImg from './assets/react-core-concepts.png';
import { CORE_CONCEPTS } from './data.js';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max){
  return Math.floor(Math.random()*(max+1));
}

function Header(){
  const description = reactDescriptions[genRandomInt(2)];
  
  return (<header>
    <img src={reactImg} alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {description} React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>)
}

{/*destructuring method used to pass data from object into function*/}
function CoreConcept({image,title,description}){
  return (
  <li>
    <img src={image} alt={title}/>
    <h3>{title}</h3>
    <p>{description}</p>
  </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept 
              title={CORE_CONCEPTS[0].title} 
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            {/*This is the short hand syntax using the spread operator. only works if 
            key value pairs use the same keys as the object we are pulling data from. Otherwise
            write it out longhand such as above. */}
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>

          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
