import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

// npm test -- -u
describe("Home", () => {
  it("renders a navbar", () => {
    render(<Home />);

    const navbar = screen.getByTestId("main-nav");

    expect(navbar).toBeInTheDocument();
  });

  it("renders a carousel", () => {
    render(<Home />);

    const carousel = screen.getByTestId("main-carousel");

    expect(carousel).toBeInTheDocument();
  });
});
