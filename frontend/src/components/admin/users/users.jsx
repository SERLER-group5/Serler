import React, { Component } from "react";
import UsersTable from "./usersTable";
import Pagination from "../../common/pagination";
import { paginate } from "../../../utils/paginate";
import { getUsers } from "../../../services/userService";
import _ from "lodash";

class Users extends Component {
  state = {
    users: [],
    currentPage: 1,
    pageSize: 5,
    sortColumn: { path: "name", order: "asc" }
  };

  async componentDidMount() {
    const {data: users} = await getUsers();
    console.log(users);
    this.setState({ users});
    
  }

  handleDelete = user => {
    const users = this.state.users.filter(u => u._id !== user._id);
    this.setState({ users });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const { pageSize, currentPage, sortColumn, users: allUsers } = this.state;
    const sorted = _.orderBy(allUsers, [sortColumn.path], [sortColumn.order]);
    const users = paginate(sorted, currentPage, pageSize);
    return {totalCount: allUsers.length, data: users};
  }

  render() {
    const { length: usersCount } = this.state.users;
    const { pageSize, currentPage, sortColumn } = this.state;

    if (usersCount === 0) return <p>There are no users in the database</p>;

    const {totalCount, data} =  this.getPagedData()

    return (
      <React.Fragment>
        <p> Showing {totalCount} users from the database</p>
        <UsersTable
          users={data}
          sortColumn={sortColumn}
          onDelete={this.handleDelete}
          onSort={this.handleSort}
        ></UsersTable>
        <Pagination
          itemsCount={totalCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        ></Pagination>
      </React.Fragment>
    );
  }

}

export default Users;
