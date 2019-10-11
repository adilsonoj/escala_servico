import { createStore } from 'redux';
import { Reducers } from '../reducers';

//é usada no Index.js envolvendo toda aplicação
export const Store = createStore(Reducers);