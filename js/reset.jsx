var Resetit = React.createClass({


  handleReset: function() {

    this.props.handleReset()

  },



  render: function() {
    return (
      <div className="reset">
        <input type="button" value="Reset" className="RS" onClick={this.props.handleReset}></input>
      </div>
    )
  }
});

module.exports = Resetit;
