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
    character: "Homer"
  },
  {
    character: "Marge"
  },
  {
    character: "Hank Scorpio"
  },
  {
    character: "Moe"
  }
  ]


var EpisodeSelect = React.createClass({
  render: function() {
    return (
      <div className="episodeSelect">
        <CharacterList characters={dummyCharacters} />
        <EpisodeCount episode={dummyEpisodes} />
        <EpisodeList episode={dummyEpisodes} />
      </div>

    )
  }
});

module.exports = EpisodeSelect;
