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
                Lists from an online API and an local JSON
            </p>

{/* Local API */}
            <div className="apiListContainer">

                <p className="apiListTitle">List of games from local saved Json file (first 15)</p>

                {games.slice(0, 15).map(item => (

                    <div className="apiItem">
                        <img className='apiLogo' alt='' src={item.logo} />
                        <p className="apiName">{item.name}</p>
                    </div>

                ))}
            </div>

{/* Online API */}
            <div className="apiListContainer">

                <p className="apiListTitle">List of the top 100 songs of itunes API (first 15)</p>

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