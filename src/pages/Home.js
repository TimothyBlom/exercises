import React from 'react';
import ExampleImg from '../images/gamingToDoExample.jpg'

const Home = () => {
    return (
        <div id='header'>

            <p className="pageHeaderText"> 
                Coding exercises
            </p>

            <p className="pageParaText">
                This website has a collection of functions I need to figure out 
                how to make before I can use it to create my app.
                <br />
                Below is an example of how my app is supposed to look like and what it can do when its finished.
            </p>

            <p className="pageParaText">
                <img className="exampleImg" src={ExampleImg} />
            </p>

            <p className="pageParaText">
                List of features:
                <br />
                -Click on the icon to open the tabs, the tabs on the top, right, bottom and left slide in view.
                Also the icon background zoomes out and the logo grows bigger and gets a backdrop shadow.
                <br />
                <br />
                -TOP: A row is visable which displayes the console of the game and the completed trophies/achiefments 
                on said console. Other consoles and trophy/achiefments where the game is available on can be seen, the 
                currently selected row is highlited. Clicking on an other colsole row displayes all stats of that console.
                <br />
                <br />
                I'll type the rest later... 
            </p>
                               
        </div>
    )
};

export default Home;