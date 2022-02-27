import React,{useContext} from 'react'
import {GlobalContext,GlobalProvider } from './Store/GlobalState'
import UpdateData from './UpdateData';
import DecreamentData from './DecreamentData';
import Reset from './Reset';


function App() {
  const {count,IncData} = useContext(GlobalContext)
  console.log(count,IncData) 


  return (
   <>
   <GlobalProvider>
    <h1>Hello World</h1>
    <h1>{count}</h1>
    <UpdateData/>
    <DecreamentData/>
    <Reset/>
    </GlobalProvider>
  

  
  </>
   
  );
}

export default App;