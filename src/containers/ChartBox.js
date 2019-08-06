import React, {Component} from 'react';
import ChartList from '../components/ChartList.js'
import './ChartBox.css'

class ChartBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      songs: []
    };
  }

  componentDidMount(){
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
    .then(res => res.json())
    .then(songs => this.setState({songs:songs.feed.entry}))
    .catch(err => console.error())
  }

  render(){
    return(
      <>
      <h3>Current Top 20:</h3>
      <ChartList songs={this.state.songs}/>
      </>
    )
  }
}
export default ChartBox;
