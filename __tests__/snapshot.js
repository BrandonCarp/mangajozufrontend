import { render } from "@testing-library/react";
import RootLayout from "@/app/layout";

it("renders homepage unchanged", () => {
  const { container } = render(<RootLayout />);
  expect(container).toMatchSnapshot();
});
