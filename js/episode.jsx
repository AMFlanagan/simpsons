var Episode = React.createClass({
  render: function() {
    return (
      <div className="episode">
        <div className="seasonNum">
          <p>Season: {this.props.season}</p>
        </div>
        <div className="episodeNum">
          <p>Episode: {this.props.episode}</p>
        </div>
        <div className="title">
          <p>Title: {this.props.title}</p>
        </div>


        <div className="picList">
          <img className="smallImg" src={this.props.picture1}/>
          <img className="smallImg" src={this.props.picture2}/>
          <img className="smallImg" src={this.props.picture3}/>
        </div>




      </div>
    )
  }
});

module.exports = Episode;
