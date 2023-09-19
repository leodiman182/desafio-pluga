import { render } from "@testing-library/react";
import MainProvider from "../context/MainProvider";

const AllTheProviders = ({ children }) => {
  return <MainProvider>{children}</MainProvider>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
