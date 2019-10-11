import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles.css'
import "@fortawesome/fontawesome-free/css/all.css"
class header extends Component {
 
  render() {
    const { militarAtivo } = this.props
    return (
        <div className="header">
          <i className="fas fa-bars bars"></i>
          <span>{militarAtivo.nome}</span>
        </div>
        );
  }
}

const mapStateToProps = store =>({
  militarAtivo: store.changeMilitarAtivo.militarAtivo
});

export default connect(mapStateToProps)(header)
