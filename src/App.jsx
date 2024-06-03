import { CORE_CONCEPTS } from './data.js'
import Header from './components/Header.jsx'
import CoreConcept from './components/CoreConcept.jsx'

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
