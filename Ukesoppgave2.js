let image_array = ["../img/winter.jpg", "../img/fall.jpg", "../img/summer.jpg"];

function get_random_image(valgfrittElement) {
  let random_index = Math.floor(Math.random() * image_array.length);

  let selected_image = image_array[random_index];

  valgfrittElement.innerHTML = `<img src= ${selected_image}></img>`;
}
