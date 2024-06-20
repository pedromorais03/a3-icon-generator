import { G } from "@svgdotjs/svg.js"
import detailslist from "./details-list.js"

export default function (key) {
    let keys = Object.keys(detailslist)
    let name = keys[key%keys.length]
    //console.log(name);
    let details = detailslist[name]
    let path = details.path
    let g = new G()
    g.path(path)
    return g
}