import { Application } from "stimulus";
import Expander from "./expander";

// Initiate app
const app = Application.start({
  controllerAttribute: "stimulus-controller",
  targetAttribute: "stimulus-target",
  actionAttribute: "stimulus-action",
});

// Register controllers
app.register("expander", Expander);
