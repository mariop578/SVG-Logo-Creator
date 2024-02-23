class Shape {
  constructor(color) {
    this.color = color;
  }

  render() {
    throw new Error("render() method must be implemented by child classes");
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="151" cy="101" r="80" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="56" y="18" width="188" height="164" fill="${this.color}" />`;
  }
}

module.exports = {
  Shape,
  Triangle,
  Circle,
  Square,
};
