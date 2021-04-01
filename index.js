colors = ["red", "green", "blue", "yellow"];
let colorSequence = [];

$(".btn").on("click", (e) => {
      color = e.target.id;
      buttonPress(color, "player-pressed");
      randomPress();
      console.log(color);
});

$(document).on("keydown", () => {
      console.log("keydown");
      randomPress();
      $(document).off("keydown");
});

function buttonPress (color, className) {
      $(`#${color}`).toggleClass(className);
      setTimeout( () => {
            $(`#${color}`).toggleClass(className);
      }, 100);
}

function randomPress () {
      let index = Math.random() * 4;
      index = Math.floor(index);
      let color = colors[index];
      setTimeout( () => {
            buttonPress(color, "random-pressed");
      }, 200);
      colorSequence.push(color);
      console.log(colorSequence);
};