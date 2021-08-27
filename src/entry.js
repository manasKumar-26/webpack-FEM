/**
 * @param {} navLogger
 * @returns {Console}
 */
import navLogger from "./nav";
import button from "./footer";
import "assets/background.scss";

import imageUrl from "assets/webpack-logo.jpg";

const lazyImageGenerator = () => import("./image");

navLogger();
const Button = new button();

const buttonComponent = Button.render(
  "Load image that is being served form webpack"
);
document.body.appendChild(buttonComponent);

buttonComponent.addEventListener("click", () => {
  lazyImageGenerator().then((component) => {
    const { default: imageGenerator } = component;
    document
      .querySelector("#data-mount-app")
      .appendChild(imageGenerator(imageUrl));
  });
});

console.log("Manas Kumar");

console.log(process.env.NODE_ENV);

console.log(button.render());
