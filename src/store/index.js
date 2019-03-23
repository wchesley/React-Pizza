import { createStore } from 'redux'; 
import storyReducer from './reducer';

const store = createStore(storyReducer);

export default store;