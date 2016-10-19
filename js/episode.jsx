var Episode = React.createClass({
  render: function() {
    return (
      <div className="episode">

          <p className="text" >Season: {this.props.season}<br></br>     Episode: {this.props.episode} <br></br>     Title: {this.props.title}</p>




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
