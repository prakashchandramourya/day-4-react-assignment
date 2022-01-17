import React from "react";

class List extends React.Component {
  render() {
    const { users } = this.props;
    return (
      <div>
        {/* <pre>{JSON.stringify(users, undefined, 2)}</pre> */}
        <table>
          <thead>
            <th>Name:</th>
            <th>Email:</th>
            <th>DOB:</th>
          </thead>
          <tbody>
            {users &&
              users.map((user) => (
                <tr>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.dob}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default List;
