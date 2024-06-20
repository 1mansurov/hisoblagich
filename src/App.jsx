import './App.css'
import { useState } from 'react';
import fon from './img/images.jpg';

function App() {
  const [age, setAge] = useState(0);





  const changeAge = () => {
    setAge(age + 1)
    if(age){
      h1 = 33;
      console.log(0); 
    }
    

  }



  return (
    <>
      <div className="box">
        
        <h1>{age}</h1>
        <button onClick={changeAge} >Bismillah</button>
      </div>
    </>
  )
}

export default App
