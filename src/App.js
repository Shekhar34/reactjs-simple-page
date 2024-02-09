import { useState, useSyncExternalStore } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import About from './components/About';
function App() {
  
  const[mode,setMode]=useState('light');
  const[alert, setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
        setAlert(null);
    },5000);
  }


  const toggleMode=()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert('Dark mode has been enabled', 'success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('light mode has been enabled', 'success');
    }
    
  }

  return (
    <>
   <Navbar title="my-app " abouttxt="about us" mode={mode} toggleMode={toggleMode}/>  
   <Alert alert={alert}/>
  <div className="container my-3"> 
       <Textform showAlert={showAlert} heading="Enter text to analyze" mode={mode}/>

       {/* <About /> */}
  </div>
 
 
    </>
  );
}

export default App;
