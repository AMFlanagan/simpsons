var Resetit = React.createClass({


  handleReset: function() {

    this.props.handleReset()

  },



  render: function() {
    return (
        <input type="button" value="Reset" className="reset" onClick={this.props.handleReset}></input>
    )
  }
});

module.exports = Resetit;
