import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/pt-br'

export default class table extends Component {
  render() {
    return (
        <div className='container'>
            {console.log(moment.locale())}
        </div>
    );
  }
}
