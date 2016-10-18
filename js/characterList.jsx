var Character = require('./character.jsx');

var CharacterList = React.createClass({
  getInitialState: function(){
    return {
      selected: []
    }
  },

  handleClick: function(character){
    var tryit = this.state.selected;

    if (this.state.selected.indexOf(character) < 0 && this.state.selected.length < 3) {
      tryit.push(character);
      this.setState({
        selected: tryit
      });

    console.log(this.state.selected)
    }
  },

  render: function() {
    var self = this;
    var list = this.props.characters.map(function(character, i) {
      return (
        <Character key={i} character={character.character} handleClick={self.handleClick}/>
      )
    });


    return (
      <div className="characters">
        {list}
      </div>
    )

  }
});

module.exports = CharacterList;
