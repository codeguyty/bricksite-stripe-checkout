const BRICKS = [
  {
  name: "Brickson Brick",
  desc: "this is a plain brick",
  style: "is-so",
  cost: 1,
  images: [ 
    "https://www.kulucrete.co.za/website/wp-content/uploads/2016/11/smooth-brick.jpg"
      ],
  },
  {
    name: "Bricketty Brick",
    desc: "this is a cooler brick",
    style: "is-warning",
    cost: 5,
    images: [ 
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJc_W56qiCUiHHECVkar1jKQSrTniYAaqL_g&usqp=CAU" 
      ],
  },
  {
    name: "MyBrickerty McBrickson",
    desc: "this is the best brick",
    style: "is-success",
    cost: 100,
    images: [ 
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6LWKwpEFAfNXgPT6Ot5xdjHbqoKYa6ktG0g&usqp=CAU" 
    ],
  },
];


for (var i = 0; i < BRICKS.length; i++) {
  let newBrick = document.createElement("div");
  newBrick.className = "title is-parent";

  let newBrickArticle = document.createElement("article");
  newBrickArticle.className = "title this-child notification " + BRICKS[i].style;

  let newBrickTitle = document.createElement("p");
  newBrickTitle.className = "title";
  newBrickTitle.innerHTML = BRICKS[i].name;

  let newBrickDesc = document.createElement("p");
  newBrickDesc.className = "subtitle";
  newBrickDesc.innerHTML = BRICKS[i].desc;

  let newBrickCost = document.createElement("div");
  newBrickCost.className = "box";
  newBrickCost.innerHTML = "This brick costs: $" + BRICKS[i].cost;

  let newBrickButton = document.createElement("a");
  newBrickButton.id = i;
  newBrickButton.className = "button is-dark";
  newBrickButton.innerHTML = "Buy this brick";

  newBrickArticle.appendChild(newBrickTitle);
  newBrickArticle.appendChild(newBrickDesc);
  newBrickArticle.appendChild(newBrickCost);
  newBrickArticle.appendChild(newBrickButton);

  newBrick.appendChild(newBrickArticle);
  document.getElementById("bricks").appendChild(newBrick);
}

newBrickButton.href = "success.html";
newBrickButton.href = "cancel.html";