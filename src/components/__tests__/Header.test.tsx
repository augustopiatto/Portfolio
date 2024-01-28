import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Header } from "../../modules";

describe("Header.tsx", () => {
  test("Componente sendo montado", () => {
    render(<Header />);

    const title = screen.getByText("AMP");

    expect(title).toBeDefined();
  });
});
