import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import AppProvider from "./AppProvider";
import Theme from "./theme";

export interface AppTestProps {
  children: React.ReactNode;
}

function AllTheProviders(props: AppTestProps) {
  return (
    <AppProvider>
      <Theme>{props}</Theme>
    </AppProvider>
  );
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
