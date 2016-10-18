var EpisodeList = require('./episodeList.jsx');
var EpisodeCount = require('./episodeCount.jsx');
var CharacterList = require('./characterList.jsx');

var dummyEpisodes = [
  {
    seasonNum:"1",
    episodeNum:"1",
    title:"Homers Episode",
    character: "Homer"
  },
  {
    seasonNum:"2",
    episodeNum:"2",
    title:"Marge's Episode",
    character: "Marge"
  },
  {
    seasonNum:"3",
    episodeNum:"3",
    title:"Hank Scorpios Episode",
    character: "Hank Scorpio"
  },
  {
    seasonNum:"4",
    episodeNum:"4",
    title:"Moes Episode",
    character: "Moe"
  },
  {
    seasonNum:"5",
    episodeNum:"5",
    title:"Homers Episode",
    character: "Homer"
  }
];

var dummyCharacters = [
  {
    character: "Homer",
    picture: "./public/images/Homer.jpg"
  },
  {
    character: "Marge",
    picture: "./public/images/Marge.jpg"
  },
  {
    character: "Hank Scorpio",
    picture: "./public/images/Hank.jpg"
  },
  {
    character: "Moe",
    picture: "./public/images/Moe.jpg"
  }
  ]


var EpisodeSelect = React.createClass({

  getInitialState: function(){
    return {
      selected: []
    }
  },

  handleClick: function(character){

    var tryit = this.state.selected;

    if (this.state.selected.indexOf(character) < 0 && this.state.selected.length < 3) {
      tryit.push(character);
      this.setState({
        selected: tryit
      });

    console.log(this.state.selected)
    }
  },

  render: function() {
    return (
      <div className="episodeSelect">
        <CharacterList characters={dummyCharacters} handleClick={this.handleClick} /><br></br>
        <EpisodeCount episode={dummyEpisodes} /><br></br>
        <EpisodeList episode={dummyEpisodes} />
      </div>

    )
  }
});

module.exports = EpisodeSelect;
