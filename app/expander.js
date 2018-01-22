import { Controller } from "stimulus";

export default class Expander extends Controller {
  // Available targets:
  // - target

  connect() {
    this.targets.find("target").style.display = "none";
  }

  toggle() {
    const targetElementStyle = this.targets.find("target").style;

    if (targetElementStyle.display === "none") {
      targetElementStyle.display = "block";
    } else {
      targetElementStyle.display = "none";
    }
  }
}
