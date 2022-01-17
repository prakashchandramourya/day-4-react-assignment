import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div>
        <form className="form" onSubmit={this.props.handleSubmit}>
          {/* <pre>{JSON.stringify(this.props.data, undefined, 2)}</pre> */}
          {this.props.data.errors &&
            this.props.data.errors.map((error) => (
              <p key={error}>Error: {error}</p>
            ))}
          <label>Name : </label>
          <input
            type="text"
            value={this.props.data.name}
            onChange={this.props.handleName}
          />
          <br />
          <label>Email : </label>
          <input
            type="email"
            value={this.props.data.email}
            onChange={this.props.handleEmail}
          />
          <br />
          <label>DOB : </label>
          <input
            type="date"
            onChange={this.props.handleDOB}
            value={this.props.data.dob}
            required
          />
          <br />
          <label>Password :</label>
          <input
            type="password"
            value={this.props.data.pass}
            onChange={this.props.handlePass}
          />
          <br />
          <label>Conform Password :</label>
          <input
            type="password"
            value={this.props.data.conformPass}
            onChange={this.props.handleConformPass}
          />{" "}
          <br />
          <br />
          <label>Submit :</label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Form;
