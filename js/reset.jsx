var Resetit = React.createClass({


  handleReset: function() {

    this.props.handleReset()

  },



  render: function() {
    return (
      <div className = "RS">
        <input type="button" value="Reset" className="reset" onClick={this.props.handleReset}></input>
      </div>
    )
  }
});

module.exports = Resetit;
