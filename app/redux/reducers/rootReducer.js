import {combineReducers} from 'redux';
import {deviceData} from './deviceReducer';
import {quoteData} from './quoteReducer';
import {themeData} from './themeReducer';

export default combineReducers({
  deviceData,
  quoteData,
  themeData
});
