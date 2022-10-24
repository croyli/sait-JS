import { col, css, row } from '../utils'

class Block {
  constructor(value, options) {
    this.type = type;
    this.value = value;
    this.options = options;
  }
  toHtml() {
    throw new Error("Метод toHtml должен быть реализован");
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHtml() {
      const { tag = "h1", styles } = this.options;
      return row(col(`<${tag}>${this.value}</${tag}>`), css(styles));
  }
}

export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHtml() {
      const { styles, imageStyles: is, alt = "" } = this.options;
      return row(
        `<img src="${this.value}" att="${alt}" style="${css(is)}" />`,
        css(styles)
      );
  }
}

export class ColumsBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHtml() {
      const { tag = "h1", styles } = this.options;
      const html = this.value.map(col).join("");
      return row(html, css(styles));
  }
}

export class TextBlock extends Block {
  constructor(value, options) {
    super("text", value, options);
  }

  toHtml() {
      const { tag = "p", styles } = this.options;
  return row(col(`<p>${this.value}</p>`), css(styles));
  }
}