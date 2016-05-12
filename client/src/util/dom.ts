import R from "ramda";

export class Dom {

  private elements: Element[];

  constructor(selector: string | Dom | Element | ArrayLike<Element>) {
    if (typeof selector === "string") {
      this.elements = Array.from(document.querySelectorAll(selector));
    } else if (selector instanceof Dom) {
      this.elements = selector.el;
    } else if (selector instanceof Element ) {
      this.elements = [selector];
    } else if (R.isArrayLike(selector)) {
      this.elements = Array.from(selector as ArrayLike<Element>);
    }
  }

  public setAttribute(name: string, value: string | string[]): Dom {
    const v: string[] = Array.isArray(value) ? value : [value];
    this.elements.forEach((e: Element) => e.setAttribute(name, v.join(" ")));
    return this;
  }

  public getAttribute(name: string): string {
    return this.elements[0].getAttribute(name);
  }

  public siblings(selector?: string): Dom {
    const children: Element[] = R.chain((e: Element) => Array.from(e.parentElement.children))(this.elements);
    const siblings: Element[] = (R as any).without(this.elements)(children); // todo: R as any -> ramda.d.ts update
    const filtered: Element[] = selector
      ? R.filter((e: Element) => e.matches(selector))(siblings)
      : siblings;
    return new Dom(filtered);
  }

  public addClass(value: string): Dom {
    this.elements.forEach((e: Element) => e.classList.add(value));
    return this;
  }

  public removeClass(value: string): Dom {
    this.elements.forEach((e: Element) => e.classList.remove(value));
    return this;
  }

  public hasClass(value: string): boolean {
    return this.elements[0].classList.contains(value);
  }

  public find(selector: string): Dom {
    const el: Element = this.elements[0];
    const matches: NodeListOf<Element> = el.querySelectorAll(selector);
    return new Dom(matches);
  }

  get el(): Element[] {
    return this.elements;
  }
}
