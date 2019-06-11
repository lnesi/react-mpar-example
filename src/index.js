
import dictionary from './dictionaries/development';
import ReactMPAR from 'react-mpar';
import {createStore,applyMiddleware,compose} from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk'

const renderer=new ReactMPAR('.react-mpar-example',dictionary,document);
const initialState=renderer.createState({});
const store = createStore(reducers,initialState,
  compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

renderer.setStore(store);

renderer.renderAll();
