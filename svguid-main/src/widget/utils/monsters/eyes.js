import { G } from "@svgdotjs/svg.js"
import eyeslist from "./eyes-list.js"

export default function (key) {
    let keys = Object.keys(eyeslist)
    let name = keys[key%keys.length]
    //console.log(name);
    let eyes = eyeslist[name]
    let path = eyes.path
    let g = new G()
    g.path(path)
    return g
}