var Projects = [];

function Project (obj) {
  for (var key in obj){
    this[key] = obj[key]
  }
}
