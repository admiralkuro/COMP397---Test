module objects
{
    export class Button extends createjs.Bitmap
    {
        //variables
        //constructor
        constructor(imagePath:string, x:number = 0, y:number = 0)
        {
            super(imagePath);

            this.x = x;
            this.y = y;

            //setup event handlers
            this.on("mouseOver", this.mouseOver);
            this.on("mouseOut", this.mouseOut);
        }
        //functions / methods
        private mouseOver():void
        {
            this.alpha = 0.7;
        }

        private mouseOut():void
        {
            this.alpha = 1.0;
        }
    }
}