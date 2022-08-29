import React, { useState } from 'react';// importing the useState function from react
import data from './data';
import New from './new';
import List from './List';

const allcategories = ['All',...new Set(data.map((prop) => prop.cat))];
console.log(allcategories);
function App() {
const [people,setPeople] = useState(data);//creating a state and passing data from the Js file
const [categories, setCategories] = useState(allcategories);
 
const filterdat = (cat) =>{
  if(cat=== 'All'){
    setPeople(data);
    return;
  }
  const newCategories = data.filter((sop) => sop.cat === cat);
  setPeople(newCategories);

}
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays todays present</h3>
        <New categories= {categories} filterdat={filterdat}/>
        <List people= {people} /> 
        <button onClick= {()=> setPeople([])}> Clear all </button> 
      </section>
  </main>
  );
}

export default App;
