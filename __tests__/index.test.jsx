import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
  it("renders a heading", async () => {
    render(<Home />);

    const title = await screen.findByText("Welcome to POKEMON WORLD!");

    expect(title).toBeInTheDocument();
  });
});
