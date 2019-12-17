import React, { Component, Fragment } from 'react';
import {PDFViewer} from '@react-pdf/renderer'
import Invoice from './components/reports/Invoice'
import invoice from './data/invoice'

// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <Fragment>
            <PDFViewer width="1000" height="600" className="app" >
                <Invoice invoice={invoice}/>
            </PDFViewer>
        </Fragment>
    );
  }
}

export default App;