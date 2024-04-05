import { LOCAL_STORAGE_KEY_FAVORITES } from './constants';

export const getItemsFromStorage = () => {
  const existingsIdInLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEY_FAVORITES); // считав с ЛокалСтореджа
  return existingsIdInLocalStorage ? JSON.parse(existingsIdInLocalStorage) : [];
};