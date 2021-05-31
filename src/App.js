import {Fragment} from 'react';
import Meals from './components/Meal/Meals';
import Header from './components/Layout/Header';
function App() {
  
  
  return (
   
   <Fragment>
      
      <Header/>
      <main>
      <Meals/>
      </main>
   </Fragment>
      
  );
}

export default App;
