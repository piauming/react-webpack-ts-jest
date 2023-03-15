import React from "react";
import { screen, render } from "@testing-library/react";
import Greet from "../Greet";

test('Greet renders correctly', () => {
    render(<Greet />);
    const textElement = screen.getByText('Hello');
    expect(textElement).toBeInTheDocument();
});

test('Greet renders with a name', () => {
    render(<Greet name="Foo"/>);
    const textElement = screen.getByText('Hello Foo');
    expect(textElement).toBeInTheDocument();
});