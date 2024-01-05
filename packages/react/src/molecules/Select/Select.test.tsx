import Select from "./Select";

test("renders all options passed to it", () => {
  expect(Select).toMatchSnapshot();
});
