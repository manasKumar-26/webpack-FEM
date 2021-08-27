import "assets/color.css";

// const button = (name) => {
//   const buttonComponent = document.createElement("button");
//   buttonComponent.innerText = name;
//   buttonComponent.classList.add("buttonBackground");

//   return buttonComponent;
// };

class button {
  render(name) {
    const buttonComponent = document.createElement("button");
    buttonComponent.innerText = name;
    buttonComponent.classList.add("buttonBackground");
    return buttonComponent;
  }
}

export default button;
