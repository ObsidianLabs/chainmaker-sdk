
import block from './api/block'

class Instance{
  constructor(url){
    this.url = url;
  }
  getsdk(data) {
    return block.getsdk(this.url, data)
  }
 
}

const chainMaker = function(url) {
  let created = new Instance(url);
  return created;
}

export default chainMaker