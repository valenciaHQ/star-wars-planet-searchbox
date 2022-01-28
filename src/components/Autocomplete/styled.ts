import styled, { css } from "styled-components";

export const Root = styled.div`
  position: relative;
  width: 320px;
`;

export const baseButtonMixin = css`
  background: none;
  border: none;
  padding: 0;
`;

export const ValueWrapper = styled.input`
  width: 100%;
  padding-left: 8px;
  padding-right: 32px;
  height: 32px;
  box-sizing: border-box;
  border-radius: 1px;
  border: 1px solid #b6c1ce;
  line-height: 32px;
`;

export const AutoCompleteIcon = styled.span<{ isOpen: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  height: 32px;
  width: 32px;
  transition: all 150ms linear;
  transform: ${(props: any) => (props.isOpen ? "rotate(0.5turn)" : "none")};
  transform-origin: center;
  display: flex;

  svg {
    margin: auto;
  }

  ${ValueWrapper}:focus + & {
    color: ${(props: any) => props.color || "0063cc"};
    fill: ${(props: any) => props.fill || "0063cc"};
  }
`;

export const AutoCompleteContainer = styled.ul`
  background: #fff;
  padding: 8px 0;
  list-style-type: none;
  min-width: 320px;
  position: absolute;
  top: 100%;
  left: 0;
  border: 1px solid #b6c1ce;
  border-radius: 2px;
  margin: 0;
  box-sizing: border-box;
  max-height: 280px;
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
  ${baseButtonMixin} width: 100%;
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
      color: ${(props: any) => props.color || "0063cc"};
      fill: ${(props: any) => props.fill || "0063cc"};
    }
  }
`;

export const ArrowDown = styled.span`
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`;
