// import logo from './logo.svg';
// import './Home.css';
import Monitor from '../components/monitor/Register_page';
import React,{ Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { connect } from 'react-redux';
import { membersFetch } from '../actions';
import Register_page from '../components/monitor/Register_page';

class Register extends Component {
  render(){
    return (
      <div className='container-fluid'>
        <Header />
      <Register_page/>
        <Footer company = "Kasetsart University" email = "Mathit.j@ku.th" />
      </div>
    );
  }
}



function mapSteteToProps ({ members}){
  return { members}
}

export default connect(mapSteteToProps ,{membersFetch}) (Register);
