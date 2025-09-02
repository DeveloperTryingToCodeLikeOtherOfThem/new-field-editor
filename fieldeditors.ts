class Image implements Image {
   constructor () { }
}

const canvas = new Image(); // for the new field editor

namespace images {
    //% blockId=images_canvas block="canvas"
    //% weight=95
    export function canvas() {
        return canvas;
    }
}
