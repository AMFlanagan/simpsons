var EpisodeList = require('./episodeList.jsx');
var EpisodeCount = require('./episodeCount.jsx');
var CharacterList = require('./characterList.jsx');
var Resetit = require('./reset.jsx');
var remainingEps = [];
var remainingChars = [];
var axios = require('axios');
import dummyCharacters from '../characters.js';

var dummyEpisodes = [
    {
      seasonNum: "2",
      episodeNum: "5",
      title: "Dancin' Homer",
      character: ["Homer", "Burns", "Marge"],
      picture1: "./public/images/Homer.jpg",
      picture2: "./public/images/Burns.jpg",
      picture3: "./public/images/Marge.jpg",
      Description: "Homer fires up the crowd at a Springfield Isotopes game and is chosen to be the team's new mascot. He immediately becomes a popular attraction and the Isotopes start a winning streak. As a result, Homer is promoted to the team in Capital City. The Simpsons move to Capital City, but Homer fails to enthrall the crowd, and returns home."
    }
];


var EpisodeSelect = React.createClass({

  getInitialState: function(){
    return {
          selected: []
        }
    },

  componentWillMount: function(){
console.log(dummyCharacters.characters);
    this.setState(
        {
            remainingChars: dummyCharacters,
            remainingEps: dummyEpisodes
        }
    )
    // axios.get('http://localhost:3031/characters')
    //     .then(function(response) {
    //       dummyCharacters = response.data.Characters;
    //       console.log("worked");
    //       this.setState({
    //         remainingChars: dummyCharacters
    //       });
    //     }.bind(this));
    //
    // axios.get('http://localhost:3031/episodes')
    //     .then(function(response) {
    //       dummyEpisodes = response.data.Episodes;
    //       console.log("worked2");
    //     }.bind(this));
},

  handleClick: function(character){

    var tryit = this.state.selected;

    if (this.state.selected.indexOf(character) < 0 && this.state.selected.length < 3) {
      tryit.push(character);

      this.setState({
        selected: tryit
      });

      // add character to state (flase)
      // amend to state
      // send character to display
      // in display - if statement to check if character is there
      // if so then wrap around new div with shade


      this.episodeRidder(dummyEpisodes, dummyCharacters)
    }
},

  handleReset: function(){

    this.setState({
      selected: [],
      remainingEps: [],
      yes: "yes"
    });
},

  episodeRidder: function(episodes, characters){
    var remainingEps = [];

    for (var i in episodes){
      var num = 0
      for (var j in episodes[i].character){
        for (var k in this.state.selected){
          if (this.state.selected[k] === episodes[i].character[j]){
            num ++
          }
        }
        if (num === this.state.selected.length){
          remainingEps.push(episodes[i])
          var num = 0;
        }
      }
    }

    this.setState({
      remainingEps: remainingEps,
      yes: "no"
    })

    var names = []

    for (var i in remainingEps){
      for (var j in remainingEps[i].character){
        if (names.indexOf(remainingEps[i].character[j]) < 0 )
          names.push(remainingEps[i].character[j])
      }
    }

    var remainingChars = []

    for (var i in names) {
      for (var j in characters)
        if (names[i] == characters[j].character){
          remainingChars.push(characters[j])
        }
    }

    this.setState({
      remainingChars: remainingChars
    })
},

  render: function() {

    if (this.state.remainingEps && this.state.yes == "no") {
      return (
        <div className="episodeSelect">
          <CharacterList characters={this.state.remainingChars.characters} handleClick={this.handleClick}/><br></br>
          <Resetit handleReset={this.handleReset} /><br></br>
          <EpisodeCount episode={this.state.remainingEps} /><br></br>
          <EpisodeList episode={this.state.remainingEps} />
        </div>

      )
    }
    else {
      return (
        <div className="episodeSelect">
          <CharacterList characters={dummyCharacters.characters} handleClick={this.handleClick}/><br></br>
          <Resetit handleReset={this.handleReset} /><br></br>
        </div>
      )
    }
  }

});

module.exports = EpisodeSelect;
