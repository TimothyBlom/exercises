import React, {useEffect, useState} from 'react';
import axios from "axios"

const ApiList = () => {
    const [games, setGames] = useState([]);
    const [starWars, setStarWars] = useState([]);

    useEffect(() => {
      const fetchGames = async () => {
        const res = await axios.get("./GamesList.json")
          setGames(res.data);
          console.log(res.data);
      };
  
      fetchGames();
  
    }, [] );

    useEffect(() => {
        const fetchStarWars = async () => {
          const res = await axios.get("https://swapi.dev/api/")
            setStarWars(res.data);
            console.log(res.data);
        };
    
        fetchStarWars();
    
      }, [] );

    return (
        <div id='apiList'>

            <p className="pageHeaderText">
                Lists from API's. The list displayes items from the localy saved JSON file.
                The css is not finished, the items get outside the border when in rows of 2. 
                <br />
                I am planning to display JSON items from an online API later.
            </p>

{/* Local API */}
            <div className="apiListContainer">

                <p className="apiListTitle">List of games from local saved Json file</p>

                {games.filter(  item => item.name.includes("Ratchet ") ||
                                item.name.includes("Clank")
                                ).map(item => (

                    <div className="apiItem">
                        <img className='apiLogo' alt='' src={item.logo} />
                        <p className="apiName">{item.name}</p>
                    </div>

                ))}
            </div>

{/* Online API */}
            <div className="apiListContainer">

                <p className="apiListTitle">List of names from the online Star Wars API "SWAPI" (COMING SOON)</p>

                {/* {starWars.map(item => (

                <div className="apiItem">
                    <p className="apiName">{item.people.name}</p>
                </div>

                ))} */}
            </div>
                               
        </div>
    )
};

export default ApiList;