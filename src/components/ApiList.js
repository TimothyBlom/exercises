import React, {useEffect, useState} from 'react';
import axios from "axios"

const ApiList = () => {
    const [games, setGames] = useState([]);
    const [songs, setSongs] = useState({ entry: [] });

    useEffect(() => {
      const fetchSongs = async () => {
        const response = await axios.get('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
          setSongs(response.data.feed);
          console.log(response.data.feed);
      };
  
      fetchSongs();
  
    }, [] );

    useEffect(() => {
      const fetchGames = async () => {
        const res = await axios.get("./GamesList.json")
          setGames(res.data);
          console.log(res.data);
      };
  
      fetchGames();
  
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

                {games.slice(0, 15).map(item => (

                    <div className="apiItem">
                        <img className='apiLogo' alt='' src={item.logo} />
                        <p className="apiName">{item.name}</p>
                    </div>

                ))}
            </div>

{/* Online API */}
            <div className="apiListContainer">

                <p className="apiListTitle">List of top 100 songs of itunes (first 15)</p>

                {songs.entry.slice(0, 15).map(item => (
                    <div className="apiItem">
                        <p className='apiName' key={item.id.label}> {item.title.label} </p>
                    </div>
                ))}
            </div>
                               
        </div>
    )
};

export default ApiList;