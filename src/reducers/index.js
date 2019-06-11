import {combineReducers} from 'redux';
import starWarsAppReducers from './starWarsAppReducers';

export default combineReducers({
    StarWarsApp:starWarsAppReducers
});
