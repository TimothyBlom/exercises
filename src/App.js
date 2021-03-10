import './style/App.scss';
import { BrowserRouter, Route } from "react-browser-router";
import Header from "./components/Header";
import Home from "./components/Home";
import Countdown from "./components/Countdown";
import ImgUploader from "./components/ImgUploader";
import ToDoList from "./components/ToDoList";
import ApiList from "./components/ApiList";
import SliderList from "./components/SliderList";
import Codex from "./components/Codex";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Header />
        <Route exact path='/' component={Home}/>
        <Route exact path='/Countdown' component={Countdown}/>
        <Route exact path='/ImgUploader' component={ImgUploader}/>
        <Route exact path='/ToDoList' component={ToDoList}/>
        <Route exact path='/ApiList' component={ApiList}/>
        <Route exact path='/SliderList' component={SliderList}/>
        <Route exact path='/Codex' component={Codex}/>
      </BrowserRouter>

    </div>
  );
}

export default App;