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
        createjs.Ticker.framerate = 60; //60 frames per second (FPS)
        createjs.Ticker.on("tick", Update);

        Main();
    }

    function Update():void
    {
        stage.update();
       
    }

    function Main():void
    {
        console.log("Game Started!");
        helloLabel = new objects.Label("Hi!", "40px", "Consolas", "#000000", 320, 240);
        
        stage.addChild(helloLabel);

    }

    window.onload = Init;


})();
