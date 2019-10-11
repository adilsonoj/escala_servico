import React from 'react';
import Sidebar from './components/sidebar'
import Header from './components/header'
import Table from './components/table'
import "./style.css"



function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="container">
        <Sidebar/>
        <Table />
      </div>
    </div>
  );
}

export default App;
