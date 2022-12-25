import React from "react";
import axios from "axios";

class Input extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 'Please write an essay about your favorite DOM element.'
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit() {
        axios.post('http://35.192.163.110:8000/', {
            body: this.state.value,
          })
          .then(function (response) {
            alert('Decoded Text: ' + response.data.body);
          })
          .catch(function (error) {
            alert('Could not been decoded');
          });
        // alert('An essay was submitted: ' + data.text);
        // event.preventDefault();
    }
  
    render() {
      return (
        <div className="container">
            <h1>Base64 Decoder App</h1>
            <div className="text-area">
            <textarea placeholder="Enter your note here..." value={this.state.value} onChange={this.handleChange}></textarea>
            <button onClick={this.handleSubmit} id="add">Add</button>
            </div>
        </div>
      );
    }
  }
export default Input