var Episode = require('./episode.jsx');

var EpisodeList = React.createClass({
  render: function() {
    var list = this.props.episode.map(function(episode, i) {
      return (
        <Episode key={i} season={episode.seasonNum}
        episode={episode.episodeNum}
        title={episode.title} />
      )
    });


    return (
      <div className="episodes">
        {list}
      </div>
    )

    )
  }
});

module.exports = EpisodeList;
