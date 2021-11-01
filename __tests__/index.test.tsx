import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "~/pages";

describe("Home", () => {
  it("renders a title", async () => {
    render(<Home />);

    const title = await screen.findByText("Welcome to POKEMON WORLD!");

    expect(title).toBeInTheDocument();
  });
});
