var EpisodeList = require('./episodeList.jsx');
var EpisodeCount = require('./episodeCount.jsx');
var CharacterList = require('./characterList.jsx');
var Resetit = require('./reset.jsx');
var remainingEps = [];
var remainingChars = [];
var axios = require('axios');

var dummyEpisodes = [];

var dummyCharacters = [];


var EpisodeSelect = React.createClass({

  getInitialState: function(){
    return {
      selected: []
    }
  },
  componentDidMount: function(){
    var data;
    axios.get('http://localhost:3000/characters')
        .then(function(response) {
          dummyCharacters = response.data.Characters;
          console.log("worked");
          this.setState({
            remainingChars: dummyCharacters
          });
        }.bind(this));

    axios.get('http://localhost:3000/episodes')
        .then(function(response) {
          dummyEpisodes = response.data.Episodes;
          console.log("worked2");
        }.bind(this));


  },
  handleClick: function(character){

    var tryit = this.state.selected;

    if (this.state.selected.indexOf(character) < 0 && this.state.selected.length < 3) {
      tryit.push(character);

      this.setState({
        selected: tryit
      });


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
          <CharacterList characters={this.state.remainingChars} handleClick={this.handleClick}/><br></br>
          <Resetit handleReset={this.handleReset} /><br></br>
          <EpisodeCount episode={this.state.remainingEps} /><br></br>
          <EpisodeList episode={this.state.remainingEps} />
        </div>

      )
    }
    else {
      return (
        <div className="episodeSelect">
          <CharacterList characters={dummyCharacters} handleClick={this.handleClick}/><br></br>
          <Resetit handleReset={this.handleReset} /><br></br>
        </div>
      )
    }
  }

});

module.exports = EpisodeSelect;
