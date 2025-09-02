class Image implements Image {
   constructor () { }
}

// const canvas = new Image() // for the new field editor

namespace images {
    //% blockId=images_canvas block="canvas %image=screen_image_picker"
    //% weight=155  
    export function canvas(image: Image): Image {
        return image;
    }
}
