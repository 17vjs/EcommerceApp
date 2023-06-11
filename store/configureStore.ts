import { createStore, combineReducers } from 'redux';
import favouritesReducer from '../reducers/favouritesReducer';
const rootReducer = combineReducers(
  { favourites: favouritesReducer }
);
const configureStore = () => {
  return createStore(rootReducer);
}
export default configureStore;