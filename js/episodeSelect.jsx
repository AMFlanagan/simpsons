var EpisodeList = require('./episodeList.jsx');
var EpisodeCount = require('./episodeCount.jsx');
var CharacterList = require('./characterList.jsx');
var Resetit = require('./reset.jsx');
var remainingEps = [];

var dummyEpisodes = [
  {
    seasonNum:"3",
    episodeNum:"1",
    title:"Stark Raving Dad",
    character: ["Bart", "MJ", "Lisa"]
  },
  {
    seasonNum:"3",
    episodeNum:"2",
    title:"Mr. Lisa Goes to washington",
    character: ["Lisa"]
  },
  {
    seasonNum:"3",
    episodeNum:"3",
    title:"When Flanders Failed",
    character: ["Flanders","Homer"]
  },
  {
    seasonNum:"3",
    episodeNum:"4",
    title:"Bart The Murderer",
    character: ["Bart", "FatTony"]
  },
  {
    seasonNum:"3",
    episodeNum:"5",
    title:"Homer Defined",
    character: ["Homer", "Bart", "Millhouse"]
  },
  {
    seasonNum:"3",
    episodeNum:"6",
    title:"Like Farther Like Clown",
    character: ["Bart","lisa", "Krusty"]
  },
  {
    seasonNum:"3",
    episodeNum:"7",
    title:"TreeHouse of Horror II",
    character: ["Homer", "Burns", "Bart"]
  },
  {
    seasonNum:"3",
    episodeNum:"8",
    title:"Lisas Pony",
    character: ["Lisa"]
  },
  {
    seasonNum:"3",
    episodeNum:"9",
    title:"Saturdays of Thunder",
    character: ["Bart", "Martin", "Nelson"]
  },
  {
    seasonNum:"3",
    episodeNum:"10",
    title:"Flaming Moe's",
    character: ["Moe", "Homer"]
  },
  {
    seasonNum:"3",
    episodeNum:"11",
    title:"Burns Verkaufen der Kraftwerk",
    character: ["Burns", "Homer"]
  },
  {
    seasonNum:"3",
    episodeNum:"12",
    title:"I married Marge",
    character: ["Homer", "Marge"]
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
      this.episodeRidder(dummyEpisodes)

    console.log(this.state.selected)

    }


  },

  handleReset: function(){

      this.setState({
        selected: []
      });

      this.episodeRidder()

      console.log(this.state.selected)

  },

  characterRidder: function(characters){

  },

  episodeRidder: function(episodes){
    var remainingEps = [];
    console.log('hello')
    console.log(dummyEpisodes)


    // for (var i in episodes){
    //   if (dummyEpisodes[i].character[0] == this.state.selected[0]) {
    //     remainingEps.push(episodes[i]);
    //   }
    // }

    // this.setState({
    //   remainingEps: remainingEps
    // })
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
      remainingEps: remainingEps
    })


    console.log(remainingEps)



  },

  render: function() {

    if (this.state.remainingEps) {
      return (
        <div className="episodeSelect">
          <CharacterList characters={dummyCharacters} handleClick={this.handleClick}/><br></br>
          <Resetit handleReset={this.handleReset} /><br></br>
          <EpisodeCount episode={this.state.remainingEps} /><br></br>
          <EpisodeList episode={this.state.remainingEps} />
        </div>

      )
    } else {
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
