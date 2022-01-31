import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { AppContext } from "../../AppProvider";
import { AppActionTypes, Planet } from "../../types";

const Wrapper = styled.div<{ clicked: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 35vh;
  width: 20vw;
  border: 1px solid;
  align-self: center;
  margin: 0.8rem;

  border-radius: 7px;
  background-color: ${(props) => props.theme.secondaryColor};
  color: ${(props) => props.theme.primaryColor};

  ${({ clicked }) =>
    clicked &&
    css`
      pointer-events: none;
      border-color: ${(props) => props.theme.colors.green};
    `}

  &:hover {
    cursor: pointer;
  }
  & > h3 {
    text-align: center;
  }

  & > div {
    padding: 0.5rem;
  }

  & > div > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & > div > div > button {
    border: 1px solid ${(props) => props.theme.primaryColor};
    background-color: ${(props) => props.theme.secondaryColor};
    color: ${(props) => props.theme.colors.white};
    min-width: 90px;
    height: 32px;
    border-radius: 7px;
    :hover {
      cursor: pointer;
    }
  }
`;

function Card({ data: { code, name, population, climate } }: { data: Planet }) {
  const { state, dispatch } = useContext(AppContext);
  const handleDelete = () =>
    dispatch({
      type: AppActionTypes.DELETE_CARD,
      payload: { deleteCode: code },
    });

  const handleCardClick = () =>
    dispatch({
      type: AppActionTypes.CLICK_CARD,
      payload: { clicked: code },
    });

  return (
    <Wrapper
      onClick={handleCardClick}
      clicked={state.clicked.some(
        (clickedCard: string) => clickedCard === code
      )}
    >
      <h3>{name}</h3>
      <div>
        <p>{`Population: ${population}`}</p>
        <div>
          <p>{`Climate: ${climate}`}</p>
          <button type="button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </Wrapper>
  );
}

export default React.memo(Card);
