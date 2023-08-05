# Pixyp5js
Pixy (Credit to Nyaaborn for the name, you can find his github here: https://github.com/Nyaaboron) from Wireframe, but for p5js

Pixyp5js is a version of [Pixy](https://github.com/RandomGamingDev/Wireframe/blob/main/Extensions/Pixy.h) (which is for the [Wireframe](https://github.com/RandomGamingDev/Wireframe)), but for p5js!

To use the library simply create a new instance of the pixy class with the offset, size and resolution (they're all arrays with 2 elements) and then just change the Pixy.pixels array via Pixy.setPixel(), update the pixel buffer via Pixy.updatePixels() and execute Pixy.display() in order to display (if you need to do something that involves shader simply activate the shader before calling Pixy.shaderDisp() with the shader as the first parameter (this is since p5.js doesn't currently support shader overloading for the image function))!

To use it you can simply include https://cdn.jsdelivr.net/gh/RandomGamingDev/Pixyp5js/pixy.js in your HTML file! If you want to you can also just download the file and include it in your HTML file that way.

btw stuff updates so remember to specify a version/commit for your library if you want to use a link and don't want your code to automatically update to the newest version of the library
