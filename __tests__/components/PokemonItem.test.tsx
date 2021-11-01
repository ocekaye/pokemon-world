import React from "react";
import { render, screen } from "@testing-library/react";
import PokemonItem from "~/components/PokemonItem";
import { PokemonItem as PokeItem } from "~/client/Pokemon";

describe("Pokemon Item Component", () => {
  it("render a pokemon name", async () => {
    const pokeItem: PokeItem = {
      name: "mesprit",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/481.png",
      url: "https://pokeapi.co/api/v2/pokemon/481/",
    };
    render(<PokemonItem pokemon={pokeItem} />);

    const name = await screen.findByText("mesprit");

    expect(name).toBeInTheDocument();
  });
});
