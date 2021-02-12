import './App.scss';
import { 
  BrowserRouter, 
  Route, 
  Link
} from "react-browser-router";
import Header from "./components/Header";
import Home from "./components/Home";
import Countdown from "./components/Countdown";
import ImgUploader from "./components/ImgUploader";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Header />
        <Route exact path='/' component={Home}/>
        <Route exact path='/Countdown' component={Countdown}/>
        <Route exact path='/ImgUploader' component={ImgUploader}/>
        <Route exact path='/ToDoList' component={ToDoList}/>
      </BrowserRouter>

    </div>
  );
}

export default App;