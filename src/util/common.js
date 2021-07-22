import {picPath} from "../json/picPath";

export const picLen = picPath.length

export const setPic = function(i) {
  return `${picPath[i].file}.${picPath[i].extension}`
}
