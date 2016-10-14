var Episode = React.createClass({
  render: function() {
    return (
      <div className="episode">
        <div className="seasonNum">
        {this.props.seasonNum}
        </div>
        <div className="episodeNum">
        {this.props.episodeNum}
        </div>
        <div className="title">
        {this.props.title}
        </div>
      </div>
    )
  }
});

module.exports = Episode;
