import styled from "styled-components";

export const Root = styled.div`
  position: relative;
  width: 20vw;
  margin: 2rem 0;
  padding: 0.2rem;
  background-color: ${(props) => props.theme.secondaryColor};
`;

export const ValueWrapper = styled.input`
  width: 100%;
  padding-left: 8px;
  height: 32px;
  box-sizing: border-box;
  border: 1px solid #b6c1ce;
  line-height: 32px;
`;

export const AutoCompleteIcon = styled.span<{ isOpen: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  width: 32px;
  height: 100%;
  display: flex;
  align-items: center;

  ${ValueWrapper}:focus + & {
    color: 0063cc;
    fill: 0063cc;
  }
`;

export const AutoCompleteContainer = styled.ul`
  background: #fff;
  padding: 8px 0;
  list-style-type: none;
  position: absolute;
  top: 100%;
  left: 0;
  border: 1px solid #b6c1ce;
  border-radius: 7px;
  margin: 0;
  box-sizing: border-box;
  overflow-y: auto;
  z-index: 1;
`;

export const AutoCompleteItem = styled.li`
  padding: 0 24px;
  width: 100%;
  box-sizing: border-box;
  &:hover {
    background-color: #ebf4ff;
  }
`;

export const AutoCompleteItemButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  width: 100%;
  line-height: 32px;
  text-align: left;
  &:active {
    outline: none;
    color: #0076f5;
  }
`;
export const Input = styled(ValueWrapper)`
  transition: border-color 150ms linear;

  &:focus {
    border-color: #0063cc;
    outline: none;

    + ${AutoCompleteIcon} {
      color: 0063cc;
      fill: 0063cc;
    }
  }
`;

export const ArrowBase = styled.span`
  height: 5px;
  width: 5px;
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
`;

export const ArrowUp = styled(ArrowBase)`
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
`;

export const ArrowDown = styled(ArrowBase)`
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`;
