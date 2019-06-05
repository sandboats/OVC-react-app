import React from "react";
import { connect } from "react-redux";
import { fetchUsers }from "./userActions";

class UserList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchUsers());
  }

  render() {
    const { error, loading, users } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <React.Fragment>
        <table>
          <thead>
            <th>Name</th>
            <th>Email</th>
            <th style={{ textAlign: "right" }}>City</th>
            <th style={{ textAlign: "right" }}>Company</th>
          </thead>
          <tbody>{
            users.map((user, key) => {
              return (
                <>
                  <tr key={key}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td style={{ textAlign: "right" }}>{user.address.city}</td>
                    <td style={{ textAlign: "right" }}>{user.company.name}</td>
                  </tr>
                </>
              )
            })
          }
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.items,
  loading: state.users.loading,
  error: state.users.error
});

export default connect(mapStateToProps)(UserList);
