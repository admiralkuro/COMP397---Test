// IIFE - Immediate Invokes Function Expression
/*
  Closure
  Calls an anonymous self-executing function
  Anything in braces is in a closure. Won't go to global namespace
*/

(function()
{
    function Init()
    {
        console.log("Initialized.....");
    }


    window.onload = Init;


})();
