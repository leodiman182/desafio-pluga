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

  it("should be rendered with a checkbox option", () => {
    render(<App />);

    const checkbox = screen.getByTestId("checkbox-order");
    const label = screen.getByTestId("checkbox-label");

    expect(checkbox).toBeInTheDocument();
    expect(label).toHaveTextContent("Organizar em ordem alfabética");
  });

  it("should be rendered with the tools section", () => {
    render(<App />);
    const tools = screen.getByTestId("tools-section");

    expect(tools).toBeInTheDocument();
  });

  it("should be rendered with the right amount of tool cards", () => {
    render(<App />);
    const tools = screen.getAllByTestId("tool-card");

    expect(tools).toHaveLength(12);
  });

  it("should be rendered with the footer element", () => {
    render(<App />);
    const tools = screen.getByTestId("footer");

    expect(tools).toBeInTheDocument();
  });
});
