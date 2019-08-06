import React from 'react';
import './ChartList.css';

const ChartList = (props) => {
  const names = props.songs.map((song ,index) =>{
    return <div>
    <br/>
    <li value={index} key={index}><img src={song["im:image"][0].label} alt={song["im:name"]}/> {song.title.label}</li>
    <br/>
    <audio controls>
      <source src={song.link[1].attributes.href} type={song.link[1].attributes.type}/>
      Your browser does not support this audio element.
    </audio>
    <br/>
    </div>
  })
  return (
    <ul>
      {names}
    </ul>
  )
}

export default ChartList;
