import { G } from "@svgdotjs/svg.js"
import bodylist from "./body-list.js"

export default function (key) {
    let keys = Object.keys(bodylist)
    let name = keys[key%keys.length]
    //console.log(name);
    let body = bodylist[name]
    let path = body.path
    let g = new G()
    g.path(path)
    return g
}