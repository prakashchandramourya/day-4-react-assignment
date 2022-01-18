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
            <th>Update</th>
            <th>Delete</th>
          </thead>
          <tbody>
            {users &&
              users.map((user) => (
                <tr key={user.email}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.dob}</td>
                  <td>
                    <button onClick={() => this.props.handleUpdate(user.email)}>
                      rename
                    </button>
                  </td>
                  <td>
                    <button onClick={() => this.props.handleDelete(user.email)}>
                      delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default List;
