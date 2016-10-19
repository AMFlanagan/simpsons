var EpisodeList = require('./episodeList.jsx');
var EpisodeCount = require('./episodeCount.jsx');
var CharacterList = require('./characterList.jsx');
var Resetit = require('./reset.jsx');
var remainingEps = [];
var remainingChars = [];

var dummyEpisodes = [
  {
    seasonNum:"3",
    episodeNum:"1",
    title:"Stark Raving Dad",
    character: ["Bart", "MJ", "Lisa"],
    picture1: "./public/images/Bart.jpg",
    picture2: "./public/images/MJ.jpg",
    picture3: "./public/images/Lisa.jpg"
  },
  {
    seasonNum:"3",
    episodeNum:"2",
    title:"Mr. Lisa Goes to washington",
    character: ["Lisa"],
    picture1: "./public/images/Lisa.jpg"

  },
  {
    seasonNum:"3",
    episodeNum:"3",
    title:"When Flanders Failed",
    character: ["Flanders","Homer"],
    picture1: "./public/images/Flanders.jpg",
    picture2: "./public/images/Homer.jpg"

  },
  {
    seasonNum:"3",
    episodeNum:"4",
    title:"Bart The Murderer",
    character: ["Bart", "FatTony"],
    picture1: "./public/images/Bart.jpg",
    picture2: "./public/images/FatTony.jpg"
  },
  {
    seasonNum:"3",
    episodeNum:"5",
    title:"Homer Defined",
    character: ["Homer", "Bart", "Millhouse"],
    picture1: "./public/images/Homer.jpg",
    picture2: "./public/images/Bart.jpg",
    picture3: "./public/images/Millhouse.jpg"
  },
  {
    seasonNum:"3",
    episodeNum:"6",
    title:"Like Farther Like Clown",
    character: ["Bart","Lisa", "Krusty"],
    picture1: "./public/images/Bart.jpg",
    picture2: "./public/images/Lisa.jpg",
    picture3: "./public/images/Krusty.jpg"
  },
  {
    seasonNum:"3",
    episodeNum:"7",
    title:"TreeHouse of Horror II",
    character: ["Homer", "Burns", "Bart"],
    picture1: "./public/images/Homer.jpg",
    picture2: "./public/images/Burns.jpg",
    picture3: "./public/images/Bart.jpg"
  },
  {
    seasonNum:"3",
    episodeNum:"8",
    title:"Lisas Pony",
    character: ["Lisa"],
    picture1: "./public/images/Lisa.jpg"
  },
  {
    seasonNum:"3",
    episodeNum:"9",
    title:"Saturdays of Thunder",
    character: ["Bart", "Martin", "Nelson"],
    picture1: "./public/images/Bart.jpg",
    picture2: "./public/images/Nelson.jpg",
    picture3: "./public/images/Martin.jpg"
  },
  {
    seasonNum:"3",
    episodeNum:"10",
    title:"Flaming Moe's",
    character: ["Moe", "Homer"],
    picture1: "./public/images/Moe.jpg",
    picture2: "./public/images/Homer.jpg"
  },
  {
    seasonNum:"3",
    episodeNum:"11",
    title:"Burns Verkaufen der Kraftwerk",
    character: ["Burns", "Homer"],
    picture1: "./public/images/Burns.jpg",
    picture2: "./public/images/Homer.jpg"
  },
  {
    seasonNum:"3",
    episodeNum:"12",
    title:"I married Marge",
    character: ["Homer", "Marge"],
    picture1: "./public/images/Homer.jpg",
    picture2: "./public/images/Marge.jpg"
  },
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
    character: "Bart",
    picture: "public/images/Bart.jpg"
  },
  {
    character: "Lisa",
    picture: "./public/images/Lisa.jpg"
  },
  {
    character: "Flanders",
    picture: "./public/images/Flanders.jpg"
  },
  {
    character: "Millhouse",
    picture: "./public/images/Millhouse.jpg"
  },
  {
    character: "Martin",
    picture: "./public/images/Martin.jpg"
  },
  {
    character: "Nelson",
    picture: "./public/images/Nelson.jpg"
  },
  {
    character: "Burns",
    picture: "./public/images/Burns.jpg"
  },
  {
    character: "MJ",
    picture: "./public/images/MJ.jpg"
  },
  {
    character: "Moe",
    picture: "./public/images/Moe.jpg"
  },
  {
    character: "FatTony",
    picture: "./public/images/FatTony.jpg"
  },
  {
    character: "Krusty",
    picture: "./public/images/Krusty.jpg"
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
