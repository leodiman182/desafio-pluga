import { render, screen } from "@testing-library/react";

import App from "../../App";
import MainProvider from "../../context/MainProvider";
import MainContext from "../../context/MainContext";

describe("The home page", () => {
  it("should be rendered with the title and footer correctly", () => {
    render(<App />);

    const title = screen.getByTestId("title-element");
    const footer = screen.getByTestId("footer");

    expect(title).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });

  it("should be rendered with two buttons and a checkbox", () => {
    render(<App />);

    const buttonAll = screen.getByTestId("button-show-all");

    expect(buttonAll).toBeInTheDocument();
    expect(buttonAll).toHaveTextContent("EXIBIR TODAS");

    const buttonLatest = screen.getByTestId("button-show-latest");

    expect(buttonLatest).toBeInTheDocument();
    expect(buttonLatest).toHaveTextContent("EXIBIR ÚLTIMAS");

    const checkbox = screen.getByTestId("checkbox-order");
    const label = screen.getByTestId("checkbox-label");

    expect(checkbox).toBeInTheDocument();
    expect(label).toHaveTextContent("Organizar em ordem alfabética");
  });

  it("should be rendered with the tools section and have the right amount of tool cards", () => {
    render(<App />);
    const tools = screen.getByTestId("tools-section");
    const toolCards = screen.getAllByTestId("tool-card");

    expect(tools).toBeInTheDocument();
    expect(toolCards).toHaveLength(12);
  });

  // describe("shoud have an input field", () => {
  //   it("appearing", () => {
  //     render(<App />);

  //     const searchField = screen.getByTestId("input-search-field");

  //     expect(searchField).toBeInTheDocument();
  //   });

  //   it("that changes the below section when something is typed", () => {
  //     render(
  //       <MainProvider>
  //         <MainContext.Consumer>
  //           {(value) => (
  //             <>
  //               <SearchSection />
  //               <PaginatedItems itemsPerPage={12} />{" "}
  //             </>
  //           )}
  //         </MainContext.Consumer>
  //       </MainProvider>
  //     );

  //     const searchField = screen.getByTestId("input-search-field");
  //     userEvent.type(searchField, "google");

  //     const tools = screen.getAllByTestId("tool-card");

  //     expect(tools).toHaveLength(12);
  //   });
  // });

  it("should show a modal when necessary", () => {
    const modal = screen.queryByTestId("modal-component");

    render(
      <MainProvider>
        <MainContext.Consumer>
          {(value) => {
            // const {
            //   usableApi,
            //   setUsableApi,
            //   modalOpen,
            //   setSelectedTool,
            //   searchInput,
            //   loading,
            // } = value;
            return <App />;
          }}
        </MainContext.Consumer>
      </MainProvider>
    );

    const tools = screen.getByTestId("tools-section");

    expect(tools).toBeInTheDocument();

    // expect(modal).toBeInTheDocument();
    // expect(screen.getByText("true")).toBeInTheDocument();
  });
});

// describe("The Items element", () => {
//   it("should be rendered with the tools section", () => {
//     myRender(<App />);
//     const tools = screen.getByTestId("tools-section");

//     expect(tools).toBeInTheDocument();
//   });
//   it("changes when something is typed on the search box", async () => {
//     render(
//       <MainProvider>
//         <MainContext.Consumer>
//           {(value) => (
//             <>
//               <span>
//                 Estado da modal é aberto: {value.modalOpen.toString()}
//               </span>
//               <SearchSection />
//             </>
//           )}
//         </MainContext.Consumer>
//       </MainProvider>
//     );

//     const searchField = screen.getByTestId();

//     expect(searchField).toBeInTheDocument();

//     // expect(screen.getByText("Estado da modal é aberto: false")).toBeTruthy();
//   });
//   // it("should open a modal when the user clicks on a card", () => {});
//   // it("should open the right modal when a card is clicked", () => {});
// });
