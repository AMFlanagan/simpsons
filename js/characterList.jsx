var Character = require('./character.jsx');

var CharacterList = React.createClass({
  render: function() {
    var list = this.props.characters.map(function(character, i) {
      return (
        <Character key={i} character={character.character} />
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
