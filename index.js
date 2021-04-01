colors = ["red", "green", "blue", "yellow"];
let colorSequence = [];

$(".btn").on("click", (e) => {
      color = e.target.id;
      console.log(color);
});

$(document).on("keydown", () => {
      console.log("keydown");
      randomPress();
      $(document).off("keydown");
});

function randomPress () {
      let index = Math.random() * 4;
      index = Math.floor(index);
      let color = colors[index];
      console.log(color);
};