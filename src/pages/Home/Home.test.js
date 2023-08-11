import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../../App";

describe("Home page", () => {
  it("should be rendered with the title correctly", () => {
    render(<App />);

    const title = screen.getByTestId("title-element");

    expect(title).toBeInTheDocument();
  });

  it("should be rendered with an input field", () => {
    render(<App />);

    const searchInput = screen.getByPlaceholderText("Buscar ferramenta");

    expect(searchInput).toBeInTheDocument();
  });

  it("should be rendered with two buttons", () => {
    render(<App />);

    const buttonAll = screen.getByTestId("button-show-all");
    const buttonLatest = screen.getByTestId("button-show-latest");

    expect(buttonAll).toBeInTheDocument();
    expect(buttonAll).toHaveTextContent("EXIBIR TODAS");

    expect(buttonLatest).toBeInTheDocument();
    expect(buttonLatest).toHaveTextContent("EXIBIR ÚLTIMAS");
  });

  // it("should be rendered with the Pluga tools section", () => {
  //   render(<App />);

  //   const loading = screen.getByTestId("loading");

  //   expect(loading).toBeInTheDocument();
  // });

  // it("should be rendered with the Pluga tools section", () => {
  //   render(<App />);

  //   expect(loading).toBeInTheDocument();
  // });
});
