# canvasJS
A convenient wrapper around HTML5's canvas API. Suitable for game development and animations.

To make use of this boilerplate, add your script in the body as marked by the comments

This API provides the following global variables:
    - Global canvas and context objects
    - Global isMobile boolean variable
    - A function init

The init function starts the game loop.

A function called 'draw' will be called every time the browser is ready to render;
A function called 'update' will be called according a specified interval;
A function with the corresponding event name will be called with no arguments for each of the events:
    mousedown,
    mouseup,
    mousemove,
    touchstart,
    touchend,
    touchmove
Each of these functions will update the global variables:
    either mouseX and mouseY,
    or touchX and touchY

Functions called keydown and keyup will be called when their corresponding events are fired.
They will be passed (event.key, event.keyCode).

It accepts one optional argument which should be a JS object - options.
By default it is an empty object.

It can contain the following properties:
    - clear - whether to clear the canvas before your 'draw' function is called
    - fullScreen - whether to adjust the canvas width and height properties to the viewport width and height
    - updateDelay - how long to wait before queueing the next 'update' function call when the current one is finished

It is advisable to call the 'init' function at the end of your main game file,
so as to ensure that all variable initializations in your file are made before the game loop begins.

If you want to see this in use check out the demo/demo.js.
If you want this demo to run uncomment the line in index.html where demo/demo.js is included.

To add a title to your game change the contents of the <title> tag in index.html to your preference.
