import React, { Component } from 'react';
// import Header from '../Header/Header';
// import Table from '../Table/Table';
import NameRow from '../NameRow/NameRow';
import './RankingTable.css';

class RankingTable extends Component {

  constructor(props){
    super(props);
    this.state = {};
    this.recentClick = this.recentClick.bind(this);
    this.allTimeClick = this.allTimeClick.bind(this);
  }

  componentDidMount(){
    var allTimeReq = fetch("https://fcctop100.herokuapp.com/api/fccusers/top/alltime")
    .then(allTime => allTime.json());

    var recentReq = fetch("https://fcctop100.herokuapp.com/api/fccusers/top/recent")
    .then(recent => recent.json());

    Promise.all([allTimeReq, recentReq])
    .then(values => {
      this.setState({
        allTimeTop: values[0],
        recentTop: values[1],
        temp: values[0]
      });
    });

    // recentClick(e){
    //   this.setState({
    //     temp: values[0]
    //   });
    //   e.preventDefault();
    // }
    //
    // allTimeClick(e){
    //   this.setState({
    //     temp: values[1]
    //   });
    //   e.preventDefault();
    // }


  }


  recentClick(){
    var allTimeReq = fetch("https://fcctop100.herokuapp.com/api/fccusers/top/alltime")
    .then(allTime => allTime.json());

    var recentReq = fetch("https://fcctop100.herokuapp.com/api/fccusers/top/recent")
    .then(recent => recent.json());

    Promise.all([allTimeReq, recentReq])
    .then(values => {
      this.setState({
        allTimeTop: values[0],
        recentTop: values[1],
        temp: values[1]
      });
    })
    // e.preventDefault();
  }

  allTimeClick(){
    var allTimeReq = fetch("https://fcctop100.herokuapp.com/api/fccusers/top/alltime")
    .then(allTime => allTime.json());

    var recentReq = fetch("https://fcctop100.herokuapp.com/api/fccusers/top/recent")
    .then(recent => recent.json());

    Promise.all([allTimeReq, recentReq])
    .then(values => {
      this.setState({
        allTimeTop: values[0],
        recentTop: values[1],
        temp: values[0]
      });
    })
    // e.preventDefault();
  }

  render() {

    if(!this.state.allTimeTop){
      return(
        <div className="rankingTable">
          <h1 className="title">freeCodeCamp Leader Board</h1>
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Camper Name</th>
                <th><a href="#" onClick={this.recentClick}>Points in past 30 days</a></th>
                <th><a href="#" onClick={this.allTimeClick}>All time points</a></th>
              </tr>
            </thead>
            <tbody>
              <tr className="loading">
                <h1>LOADING...</h1>
              </tr>
            </tbody>
          </table>
        </div>
      )
    }

    return (
      <div className="rankingTable">
        <h1 className="title">freeCodeCamp Leader Board</h1>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Camper Name</th>
              <th><a href="#" onClick={this.recentClick}>Points in past 30 days</a></th>
              <th><a href="#" onClick={this.allTimeClick}>All time points</a></th>
            </tr>
          </thead>
          <NameRow allTimeTop={this.state.temp}/>
        </table>
      </div>
    );
  }
}

export default RankingTable;
