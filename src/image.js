export default function imageGenerator(url) {
  const image = document.createElement("img");
  image.setAttribute("src", url);

  return image;
}
