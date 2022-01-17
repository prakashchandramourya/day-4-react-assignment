import React from "react";
import "./App.css";
import Form from "./Form";
import List from "./List";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      pass: "",
      conformPass: "",
      dob: "",
      errors: [],
      items: [],
    };
  }

  handleName = (e) => {
    this.setState({ name: e.target.value });
  };
  handleEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  handlePass = (e) => {
    this.setState({ pass: e.target.value });
  };
  handleConformPass = (e) => {
    this.setState({ conformPass: e.target.value });
  };
  handleDOB = (e) => {
    this.setState({ dob: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, pass, dob, conformPass } = this.state;

    const errors = validate(name, email, pass, conformPass);
    if (errors.length > 0) {
      this.setState({ errors });
      return;
    }
    let items = [...this.state.items];

    items.push({
      name: this.state.name,
      email: this.state.email,
      dob: this.state.dob,
    });

    this.setState({
      items,
      name: "",
      pass: "",
      conformPass: "",
      dob: "",
      valid: true,
    });
  };

  render() {
    return (
      <div>
        <h1>Form Data</h1>
        <div className="App">
          <Form
            data={this.state}
            handleSubmit={this.handleSubmit}
            handleName={this.handleName}
            handleEmail={this.handleEmail}
            handleDOB={this.handleDOB}
            handlePass={this.handlePass}
            handleConformPass={this.handleConformPass}
          />
          <List users={this.state.items} />
        </div>
      </div>
    );
  }
}

function validate(name, email, pass, conformPass) {
  const error = [];
  if (name.length === 0) {
    error.push("Name is required");
  }
  if (email.length < 5) {
    error.push("Email should be at least 5 charcters long");
  }
  if (email.split("").filter((x) => x === "@").length !== 1) {
    error.push("Email should contain a @");
  }
  if (email.indexOf(".") === -1) {
    error.push("Email should contain at least one dot");
  }

  if (pass.length < 6)
    error.push("Password should be at least 6 characters long");

  if (pass !== conformPass) error.push("Password is not matching");

  return error;
}

export default App;
