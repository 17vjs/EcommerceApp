import { FAVOURITES_CHANGE, FAVOURITES_INITIALIZE } from '../constants/favourites';
export function changeFavourites(item_id) {
  return {
    type: FAVOURITES_CHANGE,
    payload: item_id
  }
}
export function initializeFavourites(favs) {
  return {
    type: FAVOURITES_INITIALIZE,
    payload: favs
  }
}