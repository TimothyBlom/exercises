import './style/App.scss';
import { BrowserRouter, Route } from "react-browser-router";
import Header from "./components/Header";
import Home from "./pages/Home";
import Countdown from "./pages/Countdown";
import ImgUploader from "./pages/ImgUploader";
import ToDoList from "./pages/ToDoList";
import ApiList from "./pages/ApiList";
import SliderList from "./pages/SliderList";
import Codex from "./pages/Codex";

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