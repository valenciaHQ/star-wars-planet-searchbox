import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { AppContext } from "./AppProvider";
import Body from "./components/Body";
import { AppActionTypes, Planet } from "./types";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: darkslategray;

  & > header {
    display: flex;
    width: 100%;
    padding: 2rem;
    border-bottom: 1px solid black;
    justify-content: center;
    font-size: ${(props) => props.theme.fontSizes.xLarge};
    color: ${(props) => props.theme.primaryColor};
  }

  & > footer {
    display: flex;
    width: 100%;
    padding: 1rem;
    border-top: 1px solid black;
    justify-content: center;
    font-size: ${(props) => props.theme.fontSizes.large};
    color: ${(props) => props.theme.secondaryColor};

    & > a {
      margin-left: 0.3rem;
      color: ${(props) => props.theme.secondaryColor};
    }
  }
`;

function App() {
  const { dispatch } = useContext(AppContext);
  useEffect(() => {
    const loadData = async (url: string) => {
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          dispatch({
            type: AppActionTypes.LOAD_DATA,
            payload: {
              data: res.results.map(
                ({ name, population, climate }: Planet) => ({
                  code: crypto.randomUUID(),
                  name,
                  population,
                  climate,
                })
              ),
            },
          });
          if (res.next) {
            loadData(res.next);
          }
        });
    };
    loadData("https://swapi.dev/api/planets/");
  }, [dispatch]);
  return (
    <Container>
      <header className="App-header">STARWARS PLANET FINDER</header>
      <Body />
      <footer>
        by <a href="www.valenciaHQ.com">valenciaHQ</a>
      </footer>
    </Container>
  );
}

export default React.memo(App);
