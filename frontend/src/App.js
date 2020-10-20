import React , {useState} from 'react';
import NavBar from './components/basic/navbar';
import Rotas from './rotas'
import ThemeContext from './context/ThemeContext'

function App() {

  const themeHock = useState('warning');

  return (
    <>
    <>
      
      <ThemeContext.Provider value={themeHock}>
      <NavBar default={themeHock} />
     <Rotas/>
     </ThemeContext.Provider>
    </>
    </>
  );
}

export default App;
