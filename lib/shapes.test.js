const { Shape, Triangle, Circle, Square } = require("./../lib/shapes.js");

test("render method should throw an error", () => {
  const shape = new Shape("red");
  expect(() => shape.render()).toThrow(
    "render() method must be implemented by child classes"
  );
});

test("render method should return a valid SVG string", () => {
  const triangle = new Triangle("blue");
  const result = triangle.render();
  expect(result).toMatch(/<polygon points=".+" fill="blue" \/>/);
});

test("render method should return a valid SVG string", () => {
  const circle = new Circle("green");
  const result = circle.render();
  expect(result).toMatch(/<circle cx=".+" cy=".+" r=".+" fill="green" \/>/);
});

test("render method should return a valid SVG string", () => {
  const square = new Square("pink");
  const result = square.render();
  expect(result).toMatch(
    /<rect x=".+" y=".+" width=".+" height=".+" fill="pink" \/>/
  );
});
