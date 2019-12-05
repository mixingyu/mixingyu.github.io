let target = null
if (window) {
  target = window
} else if (global) {
  target = global
}

if (target) {
  target.mijs = {
    jsontostr: (json, format) => {
      return format ? JSON.stringify(json) : JSON.stringify(json, null, 2)
    },
    strtojson: (str) => {
      return JSON.parse(str)
    }
  }
} else {
  console.log("Injection failed !!!!!!!!!")
}