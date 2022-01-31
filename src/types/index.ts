declare global {
  interface Crypto {
    randomUUID: () => string;
  }
}

export interface AppState {
  loading: boolean;
  data: Planet[];
  selected: Planet[];
  clicked: string[];
  search: IAutocomplete;
}

export type Planet = {
  code: string;
  name: string;
  population: number;
  climate: string;
};

export interface AppPayload {
  deleteCode: string;
  data: Planet[];
  selected: Planet;
  clicked: string;
  search: IAutocomplete;
}

export interface AppAction {
  type: AppActionTypes;
  payload: AppPayload;
}

export enum AppActionTypes {
  SEARCH = "SEARCH",
  SUGGESTION_SELECTED = "SUGGESTION_SELECTED",
  LOAD_DATA = "LOAD_DATA",
  DELETE_CARD = "DELETE_CARD",
  CLICK_CARD = "CLICK_CARD",
}

export interface IAutocomplete {
  suggestions: Planet[];
  text: string;
}
