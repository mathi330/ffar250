let numPrompts = 6;
let prompts = [];

createPromptsButtons();
createHomeButton();

function createPromptsButtons() {
  const buttonSection = $(`#buttons`);

  for (let i = 0; i < numPrompts; i++) {
    let $button = $(`<a></a>`);

    let xPos = random(100, $(window).width() - 100);
    let yPos = ($(window).height() / numPrompts) * i + 70;

    let link = `prompt${i + 1}.html`;
    let buttonText = `Prompt ${i + 1}`;

    createButton($button, xPos, yPos, link, buttonText);

    prompts.push($button);
    buttonSection.append(prompts);
  }
}

function createHomeButton() {
  const homeButtonSection = $(`.back-to-home`);

  let $homeButton = $(`<a></a>`);

  let xPos = `5%`;
  let yPos = `5%`;

  let link = `index.html`;
  let buttonText = `Home`;
  createButton($homeButton, xPos, yPos, link, buttonText);

  homeButtonSection.append($homeButton);
}

function createButton(myButton, x, y, linkToPage, text) {
  myButton.css({
    position: `absolute`,
    left: x,
    top: y,
    transform: `translate(-50%, -50%)`,
  });
  myButton.addClass(`prompts`);
  myButton.attr(`href`, linkToPage);
  myButton.text(text);
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
