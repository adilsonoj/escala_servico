import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeMilitarAtivo } from '../../actions'
import "./styles.css"

class sidebar extends Component {
    state = {
        militares:[
            {
                nip: 123456,
                nome: "Militar 1",
               
            },
            {
                nip: 1234567,
                nome: "Militar2",
                
            },
            {
                nip: 1234568,
                nome: "Militar 3",
                
            },
            {
                nip: 1234569,
                nome: "Militar 4",
                
            }
        ]
    }
   
    active = (nip, e) => {
        document.querySelectorAll(".militares").forEach(e => e.classList.remove("active"))
        e.currentTarget.classList.add("active")
        let militares = [...this.state.militares]
        militares.map(el => { 
            delete el.active
            if(el.nip === nip)
                el.active = true

            return el
        })
        this.setState({ militares })
        changeMilitarAtivo(nip)

    }
  render() {
    const { militarAtivo, changeMilitarAtivo } = this.props;

   
    return (
    <div className="sidebar">
        <ul>
            {this.state.militares.map(militar =>(
                <li key={militar.nip} className="militares" onClick={(e) => {this.active(militar.nip ,e);changeMilitarAtivo(militar) }}>
                    <span>{militar.nome}</span>
                </li>
            ))
            }   
           <span>militar Ativo:  {militarAtivo.nome}</span>
        </ul>
    </div>
    );
  }
}

const mapStateToProps = store => ({
    militarAtivo: store.changeMilitarAtivo.militarAtivo
  });

const mapDispatchToProps = dispatch =>
    bindActionCreators({ changeMilitarAtivo }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(sidebar);