// IIFE - Immediate Invokes Function Expression
/*
  Closure
  Calls an anonymous self-executing function
  Anything in braces is in a closure. Won't go to global namespace
*/

(function()
{

    //Global Variables
    let canvas = document.getElementById("canvas");
    let stage: createjs.Stage;
    let helloLabel: objects.Label;
    let clickableButton: objects.Button;

    function Init():void 
    {
        console.log("Initialized.....");
        Start();
        
    }

    function Start():void
    {
        console.log("Starting App...");

        //initialize CreateJS
        stage = new createjs.Stage(canvas);

        stage.enableMouseOver(20); //frequency of checks. Expensive because it checks every frame

        createjs.Ticker.framerate = 60; //60 frames per second (FPS)
        createjs.Ticker.on("tick", Update);

        Main();
    }

    function Update():void
    {
        stage.update();
       
    }

    //BUTTON EVENT LISTENER FUNCTIONS
    

    function clickableButtonClick():void
    {
        helloLabel.text = "KONO DIO DA!";
        helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
        helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
    }

    function Main():void
    {
        console.log("Game Started!");

        helloLabel = new objects.Label("Hi!", "40px", "Consolas", "#000000", 320, 240); 
        stage.addChild(helloLabel);
        
        
        clickableButton = new objects.Button("./Assets/Sprites/clickableButton.png", 320, 340);
        clickableButton.regX = clickableButton.getBounds().width * 0.5;
        clickableButton.regY = clickableButton.getBounds().height * 0.5;
        clickableButton.on("click", clickableButtonClick);
        stage.addChild(clickableButton);

        
        

    }

    window.onload = Init;


})();
