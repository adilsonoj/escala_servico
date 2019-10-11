import { changeMilitarAtivo } from './militarReducer'
import { combineReducers } from 'redux';

//fazer os importes de todos os reducers e add em combineReducers
export const Reducers = combineReducers({
  changeMilitarAtivo,
});