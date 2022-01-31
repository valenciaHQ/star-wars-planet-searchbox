import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../AppProvider";
import { AppState, Planet } from "../../types";
import Autocomplete from "../Autocomplete";
import Card from "../Card";

const Container = styled.main`
  display: flex;
  height: 70vh;
  flex-direction: column;
  align-items: center;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  overflow: auto;
`;

function Body() {
  const { state } = useContext(AppContext);
  const { selected } = state as AppState;
  return (
    <Container>
      <Autocomplete />
      <ListWrapper>
        {selected.map((planet: Planet) => (
          <Card key={planet.code} data={planet} />
        ))}
      </ListWrapper>
    </Container>
  );
}

export default Body;
