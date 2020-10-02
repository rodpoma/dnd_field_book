import React from "react";
import {render} from "@testing-library/react";
import DndFieldBook from "./DndFieldBook";

test("renders learn react link", () => {
  const {getByText} = render(<DndFieldBook />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
