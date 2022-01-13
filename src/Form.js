import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      pass: "",
      conformPass: "",
      dob: "",
      errors: [],
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, pass, dob, conformPass } = this.state;

    const errors = validate(name, email, pass, conformPass);
    if (errors.length > 0) {
      this.setState({ errors });
      return;
    }

    // submited the data...
    console.log(name, email, dob);
  };

  render() {
    const { errors } = this.state;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        {errors.map((error) => (
          <p key={error}>Error: {error}</p>
        ))}
        <label>Name : </label>
        <input
          type="text"
          value={this.state.name}
          onChange={(evt) => this.setState({ name: evt.target.value })}
        />
        <br />
        <label>Email : </label>
        <input
          type="email"
          value={this.state.email}
          onChange={(evt) => this.setState({ email: evt.target.value })}
        />
        <br />
        <label>DOB : </label>
        <input
          type="date"
          onChange={(evt) => this.setState({ dob: evt.target.value })}
          value={this.state.dob}
          required
        />
        <br />
        <label>Gender : </label>
        <input type="radio" name="gender" required />
        Male
        <input type="radio" name="gender" required />
        Female
        <br />
        <label>Profile pic : </label>
        <input type="file" required />
        <br />
        <label>Level of Education : </label>
        <select required>
          <option>B.Tech</option>
          <option>M.Tech</option>
          <option>10th</option>
          <option>12th</option>
        </select>
        <br />
        <label>Password :</label>
        <input
          type="password"
          value={this.state.pass}
          onChange={(evt) => this.setState({ pass: evt.target.value })}
        />
        <br />
        <label>Conform Password :</label>
        <input
          type="password"
          value={this.state.conformPass}
          onChange={(evt) => this.setState({ conformPass: evt.target.value })}
        />{" "}
        <br />
        <br />
        <label>Submit :</label>
        <input type="submit" value="Submit" />
      </form>
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

export default Form;
