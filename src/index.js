function Instance(url) {
  this.url = url;
}
Instance.prototype.getUrl = function() {
  let url = this.url
  return url
}

const chainMaker = function(string) {
  let created = new Instance(string);
  return created;
}

export default chainMaker