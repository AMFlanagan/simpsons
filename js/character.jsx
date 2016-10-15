var Character = React.createClass({


  handleClick: function() {
    console.log(this.props.character)
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
