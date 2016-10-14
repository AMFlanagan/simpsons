var Episode = require('./episode.jsx');

var EpisodeList = React.createClass({
  render: function() {
    var list = this.props.episode.map(function(episode, i) {
      return (
        <Episode key={i} />
      )
    });


    return (
      <div>
        <p>Your search returned {list.length} episodes</p>
      </div>
    )

    )
  }
});

module.exports = EpisodeCount;
