import './App.css';
import Navbar from './components/Navbar';
import AddEmp from './components/AddEmp';
import ViewEmp from './components/ViewEmp';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import EditEmp from './components/EditEmp';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        {/* <ViewEmp /> */}
        <Route exact path="/" component={ViewEmp} />
        {/* <AddEmp /> */}
        <Route path="/add" component={AddEmp} />
        <Route path="/modal" component={EditEmp} />
      </Switch>
    </Router>


    {/* <div className="App">
        
    </div> */}
    </>
  );
}

export default App;
