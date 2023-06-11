import AsyncStorage from '@react-native-async-storage/async-storage';
import { FAVOURITES_CHANGE, FAVOURITES_INITIALIZE } from '../constants/favourites';
const initialState = {
  favourites: []
};
const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FAVOURITES_CHANGE:
      const id = action.payload;
      const favourites = state.favourites
      let data = []
      if (favourites.includes(id)) {
        //remove element
        data = favourites.filter(i => i != id)
      } else {
        //add element
        data = Array.from(new Set([...favourites, id]))
      }
      AsyncStorage.setItem("favourites", JSON.stringify(data))
      return {
        ...state,
        favourites: data
      };
    case FAVOURITES_INITIALIZE:
      return {
        ...state,
        favourites: action.payload
      };
    default:
      return state;
  }
}
export default favouritesReducer;