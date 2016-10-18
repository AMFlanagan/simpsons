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
        <p onClick={this.handleClick} className="button" >{this.props.character}</p>
      </div>

    )
  }
});

module.exports = Character;
