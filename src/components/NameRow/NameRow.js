import React, { Component } from 'react';
// import Header from '../Header/Header';
// import Table from '../Table/Table';
// import NameRow from '../NameRow/NameRow';
// import './NameRow.css';

class NameRow extends Component {

  render() {
    const allTimeTop = this.props.allTimeTop;
    const allTimeTopRender = allTimeTop.map((allTime) =>
      <tr>
        <td>{allTimeTop.indexOf(allTime) + 1}</td>
        <td><img src={allTime.img} className="image is-24x24 profile"></img> <a href={"https://www.freecodecamp.com/" + allTime.username} className="username">{allTime.username}</a> </td>
        <td>{allTime.recent}</td>
        <td>{allTime.alltime}</td>
      </tr>
  );
      return(
        <tbody>
          {allTimeTopRender}
        </tbody>
      );
  }
}

export default NameRow;
