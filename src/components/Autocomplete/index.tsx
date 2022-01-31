import React, { ChangeEvent, ReactElement, useContext, useState } from "react";
import { AppContext } from "../../AppProvider";
import { AppActionTypes, AppState, IAutocomplete, Planet } from "../../types";
import {
  ArrowDown,
  ArrowUp,
  AutoCompleteContainer,
  AutoCompleteIcon,
  AutoCompleteItem,
  AutoCompleteItemButton,
  Input,
  Root,
} from "./styled";

function Autocomplete(): ReactElement {
  const [isComponentVisible, setIsComponentVisible] = useState(true);

  const { state, dispatch } = useContext(AppContext);
  const { text, suggestions }: IAutocomplete = state.search;
  const { data }: AppState = state;

  const onTextChanged = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    let currentSuggestions: Planet[] = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      currentSuggestions = data
        .sort()
        .filter((v: Planet) => regex.test(v.name));
    }
    setIsComponentVisible(true);
    dispatch({
      type: AppActionTypes.SEARCH,
      payload: {
        search: {
          suggestions: currentSuggestions,
          text: value,
        },
      },
    });
  };

  const suggestionSelected = (value: Planet) => {
    setIsComponentVisible(false);
    dispatch({
      type: AppActionTypes.SUGGESTION_SELECTED,
      payload: {
        search: { suggestions: [], text: value.name },
        selected: data.find((planet: Planet) => planet.name === value.name),
      },
    });
  };

  const toogleComponent = () => setIsComponentVisible(!isComponentVisible);

  return (
    <Root>
      <div>
        <Input
          id="input"
          autoComplete="off"
          value={text}
          onChange={onTextChanged}
          type="text"
        />
        <AutoCompleteIcon
          isOpen={isComponentVisible}
          onClick={toogleComponent}
          data-cy="cy-autocomplete-icon"
        >
          {isComponentVisible ? <ArrowDown /> : <ArrowUp />}
        </AutoCompleteIcon>
      </div>
      {suggestions.length > 0 && isComponentVisible && (
        <AutoCompleteContainer data-cy="cy-options-wrapper">
          {suggestions.map((item: Planet) => (
            <AutoCompleteItem key={item.code}>
              <AutoCompleteItemButton
                key={item.code}
                onClick={() => suggestionSelected(item)}
              >
                {item.name}
              </AutoCompleteItemButton>
            </AutoCompleteItem>
          ))}
        </AutoCompleteContainer>
      )}
    </Root>
  );
}

export default Autocomplete;
