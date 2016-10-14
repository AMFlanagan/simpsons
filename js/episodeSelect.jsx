var EpisodeList = require('./episodeList.jsx');
var EpisodeCount = require('./episodeCount.jsx');

var dummyEpisodes = [
  {
    seasonNum:"1",
    episodeNum:"1",
    title:"Homers Episode"
  },
  {
    seasonNum:"2",
    episodeNum:"2",
    title:"Marge's Episode"
  },
  {
    seasonNum:"3",
    episodeNum:"3",
    title:"Hank Scorpios Episode"
  },
  {
    seasonNum:"4",
    episodeNum:"4",
    title:"Moes Episode"
  }
];


var EpisodeSelect = React.createClass({
  render: function() {
    return (
      <div className="episodeSelect">
        <EpisodeCount episode={dummyEpisodes}/>
        <EpisodeList episode={dummyEpisodes}/>
      </div>

    )
  }
});

module.exports = EpisodeSelect;
