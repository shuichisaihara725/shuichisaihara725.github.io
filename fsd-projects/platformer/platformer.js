$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();



    // TODO 2 - Create Platforms
    createPlatform(100, 700, 100, 10, "red")
    createPlatform(200, 600, 100, 10, "orange")
    createPlatform(300, 500, 100, 10, "yellow")
    createPlatform(400, 400, 100, 10, "green")
    createPlatform(500, 300, 100, 10, "blue")



    // TODO 3 - Create Collectables
    createCollectable("database", 700, 300)
    createCollectable("diamond", 200, 170, 0.5, 1);
    createCollectable("grace", 100, 100, 1, 1, 100, 1300, 5)



    
    // TODO 4 - Create Cannons
//createCannon("top bottom left right", position, timeBetweenShots, BulletWidth, BulletHeight, minCannonPos, maxCannonPos, cannonSpeed)
//createCannon("top bottom left right", position, timeBetweenShots, BulletWidth, BulletHeight)
//createCannon("top bottom left right", position, timeBetweenShots)
    createCannon("top", 800, 1000, 5, 5, 800, 1300, 2)
    createCannon("right", 400, 1000/10, 10, 10)
    createCannon("left", 200, 5000)




    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
