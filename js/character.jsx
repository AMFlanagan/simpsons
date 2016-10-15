var Character = React.createClass({

  getInitialState: function() {

    return {
      selected: []
    }
  },


  handleClick: function() {

    if (this.handleClick) {
      this.state.selected.push(this.props.character);

    }
      console.log(this.state.selected)
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
