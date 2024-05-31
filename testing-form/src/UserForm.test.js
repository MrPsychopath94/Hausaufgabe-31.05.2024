import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App Component", () => {
  it("allows a user to be added and displays that user in the list", async () => {
    // Die App-Komponente rendern
    render(<App />);

    // Angenommen, die UserForm hat Eingabefelder mit spezifischen Platzhaltertexten
    const nameInput = screen.getByPlaceholderText("Name eingeben");
    const emailInput = screen.getByPlaceholderText("E-Mail eingeben");
    const submitButton = screen.getByRole("button", { name: "Hinzufügen" });

    // Benutzereingaben simulieren und den Hinzufügen-Button klicken
    await userEvent.type(nameInput, "Jane Doe");
    await userEvent.type(emailInput, "jane.doe@example.com");
    await userEvent.click(submitButton);

    // Überprüfen, ob der neue Benutzer in der Liste angezeigt wird
    expect(screen.getByText("Jane Doe")).toBeInTheDocument();
    expect(screen.getByText("jane.doe@example.com")).toBeInTheDocument();
  });
});
