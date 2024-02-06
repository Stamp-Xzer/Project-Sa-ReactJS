// import logo from './logo.svg';
// import './Home.css';
import Monitor from '../components/monitor/Monitor';
import React,{ Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { connect } from 'react-redux';
import { membersFetch } from '../actions';

class Home extends Component {
  render(){
    return (
      <div className='container-fluid'>
        <Header />
      <Monitor/>
        <Footer company = "Kasetsart University" email = "Mathit.j@ku.th" />
      </div>
    );
  }
}



function mapSteteToProps ({ members}){
  return { members}
}

export default connect(mapSteteToProps ,{membersFetch}) (Home);
