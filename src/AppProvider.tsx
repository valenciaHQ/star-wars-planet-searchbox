import React, { ReactElement, Reducer, useMemo, useReducer } from "react";
import { AppAction, AppState, Planet } from "./types";

const AppContext = React.createContext<any>({});
const initialState: AppState = {
  loading: false,
  selected: [],
  clicked: [],
  data: [],
  search: {
    suggestions: [],
    text: "",
  },
};

function appReducer(state: AppState, action: AppAction) {
  switch (action.type) {
    case "SEARCH": {
      return { ...state, search: action.payload.search };
    }
    case "SUGGESTION_SELECTED": {
      return {
        ...state,
        search: action.payload.search,
        selected: [...state.selected, action.payload.selected],
      };
    }
    case "LOAD_DATA": {
      const text = "Tatooine";
      const tatooine = state.data.find((planet) => planet.name === text);
      const regex = new RegExp(`^${text}`, "i");
      return {
        ...state,
        data: [...state.data, ...action.payload.data],
        search: {
          text,
          suggestions: action.payload.data
            .sort()
            .filter((v: Planet) => regex.test(v.name)),
        },
        selected: tatooine ? [tatooine] : [],
      };
    }
    case "DELETE_CARD": {
      const newSelected = state.selected.filter(
        (planet) => planet.code !== action.payload.deleteCode
      );

      return { ...state, selected: newSelected };
    }
    case "CLICK_CARD": {
      const newClicked = [...state.clicked, action.payload.clicked];
      return { ...state, clicked: newClicked };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

interface IProvider {
  children: ReactElement;
}

function AppProvider({ children }: IProvider) {
  const [state, dispatch] = useReducer<Reducer<AppState, AppAction>>(
    appReducer,
    initialState
  );

  const value = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [dispatch, state]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export { AppContext };
export default AppProvider;
