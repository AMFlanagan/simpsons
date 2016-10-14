var EpisodeList = require('./episodeList');
var EpisodeCount = episode('./episodeCount');

var dummyEpisodes = [
  {
    seasonNum:"1",
    episodeNum:"1",
    title:"title"
  },
  {
    seasonNum:"1",
    episodeNum:"1",
    title:"title"
  },
  {
    seasonNum:"1",
    episodeNum:"1",
    title:"title"
  },
  {
    seasonNum:"1",
    episodeNum:"1",
    title:"title"
  }
];


var EpisodeSelect = React.createClass({
  render: function() {
    return (
      <div className="episodeSelect">
        <episodeCount episodes={dummyEpisodes}/>
        <episodeList episodes={dummyEpisodes}/>
      </div>

    )
  }
});

module.exports = EpisodeSelect;
