var Episode = require('./episode.jsx');

var EpisodeCount = React.createClass({
  render: function() {
    var list = this.props.episode.map(function(episode, i) {
      return (
        <Episode key={i} />
      )
    });

    return (

        <p className="count">Your search returned {list.length} episodes</p>
    )
  }
});

module.exports = EpisodeCount;
