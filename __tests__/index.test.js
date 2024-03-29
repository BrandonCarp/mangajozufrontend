import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import RootLayout from "@/app/layout";
// npm test -- -u
describe("RootLayout", () => {
  it("renders Navbar", () => {
    render(<RootLayout>Test Children</RootLayout>);

    const navbar = screen.getByRole("navigation");

    expect(navbar).toBeInTheDocument();
  });
});
