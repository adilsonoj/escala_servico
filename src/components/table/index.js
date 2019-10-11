import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/pt-br'
import './styles.css'

export default class table extends Component {
    geraCalendario = () =>{
        const arr=[]
        for(let i = 1; i<=moment().daysInMonth(); i++){
            arr.push(i)
        }
        return arr;
    }
  render() {
    console.log(moment.months())
    console.log(moment.monthsShort())
    console.log(moment.weekdays())
    console.log(moment("2012-02", "YYYY-MM").daysInMonth())
    console.log(moment().daysInMonth())
    console.log(this.geraCalendario().forEach(el=>console.log(el)))
    return (
        <div className='container'>
        {this.geraCalendario().map(element => (
            <div className="dia">{element}</div>
           
            )) }
      
          
        </div>
    );
  }
}
