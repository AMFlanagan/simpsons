var update = require('react-addons-update');
var Character = React.createClass({

  getInitialState: function() {
    console.log("init")
    return {
      selected: []
    }

  },


  handleClick: function() {

    this.props.handleClick(this.props.character)

  },


  render: function() {



    return (

      <div className="character">
        <img src={this.props.picture} className="ChaPic" onClick={this.handleClick}></img>
        </div>

    )
  }
});

module.exports = Character;
