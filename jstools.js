window.mijs = {
  jsontostr: (json, format) => {
    return format ? JSON.stringify(json) : JSON.stringify(json, null, 2)
  },
  strtojson: (str) => {
    return JSON.parse(str)
  }
}