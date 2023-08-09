import { render, screen } from "@testing-library/react";
import App from "../../App";
import MainProvider from "../../context/MainProvider";

describe("Home page", () => {
  it("should be rendered with the title correctly", () => {
    render(
      <MainProvider>
        <App />
      </MainProvider>
    );

    const title = screen.getByTestId("title-element");

    expect(title).toBeInTheDocument();
  });

  it("should be rendered with an input field", () => {
    render(
      <MainProvider>
        <App />
      </MainProvider>
    );

    const searchInput = screen.getByPlaceholderText("Buscar ferramenta");

    expect(searchInput).toBeInTheDocument();
  });

  it("should be rendered with two buttons", () => {
    render(
      <MainProvider>
        <App />
      </MainProvider>
    );

    const buttonAll = screen.getByTestId("button-show-all");
    const buttonLatest = screen.getByTestId("button-show-latest");

    expect(buttonAll).toBeInTheDocument();
    expect(buttonAll).toHaveTextContent("EXIBIR TODAS");
    expect(buttonLatest).toBeInTheDocument();
    expect(buttonLatest).toHaveTextContent("EXIBIR ÚLTIMAS");
  });

  it("should be rendered with the Pluga tools section", () => {
    render(
      <MainProvider>
        <App />
      </MainProvider>
    );

    const toolsSection = screen.getByTestId("tools-section");

    expect(toolsSection).toBeInTheDocument();
  });
});
