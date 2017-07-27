import React, { Component } from 'react';
// import Header from '../Header/Header';
import './Table.css';

class Table extends Component {
  render() {
    return (
      <div className="rankingTable">
        <table className="table">
          <thead>
            <th><abbr title="test">Test</abbr></th>
            <th><abbr title="test">Test2</abbr></th>
            <th><abbr title="test">Test3</abbr></th>
          </thead>
        </table>
      </div>
    );
  }
}

export default Table;
