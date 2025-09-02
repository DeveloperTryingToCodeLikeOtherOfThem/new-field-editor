class Image implements Image {
   constructor () { }
}

const canvas = new Image(); // for the new field editor

namespace images {
    export function canvas() {
        return canvas;
    }
}