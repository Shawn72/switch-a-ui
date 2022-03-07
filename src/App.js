// import logo from './logo.svg'
import './App.css'  
import Layout  from './Layout/Layout'  
import UserComponent from './Components/UserComponent';
// import { BrowserRouter } from 'react-router-dom' 
// import { HashRouter, Route, Switch } from 'react-router-dom'; 

function App() {
  return (    
    <div className="portlet light portlet-fit portlet-datatable bordered"> 
      <Layout/>  
      <UserComponent />     
    </div>
  );
}

export default App;
