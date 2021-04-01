colors = ["red", "green", "blue", "yellow"];
let colorSequence = [];
let level = 0;
let pushNum = 0;
let audio;

$(document).on("keydown", () => {
      game();
      randomPress();
      $(document).off("keydown");
      $("h1").text(`Level ${level}`);
});

function game() {
      $(".btn").on("click", (e) => {
            color = e.target.id;
            audio = new Audio(`sounds/${color}.mp3`);
            buttonPress(color, "player-pressed");
            if (color === colorSequence[pushNum] && level === pushNum + 1)
            {
                  audio.play();
                  pushNum = 0;
                  randomPress();
                  $("h1").text(`Level ${level}`);
            }
            else if (color === colorSequence[pushNum])
            {
                  audio.play();
                  pushNum++;
            }
            else
            {
                  audio = new Audio("sounds/wrong.mp3");
                  audio.play();
                  $("h1").text("Game over, press any key to play again.");
                  $("body").toggleClass("game-over");
                  pushNum = 0;
                  colorSequence = [];
                  $(".btn").off("click");
                  $(document).on("keydown", () => {
                        game();
                        randomPress();
                        $(document).off("keydown");
                        $("body").toggleClass("game-over");
                        $("h1").text(`Level ${level}`);
                  });
            }
      });
}

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
      audio = new Audio(`sounds/${color}.mp3`);
      setTimeout( () => {
            buttonPress(color, "random-pressed");
            audio.play();
      }, 250);
      colorSequence.push(color);
      level = colorSequence.length;
      console.log(level);
};