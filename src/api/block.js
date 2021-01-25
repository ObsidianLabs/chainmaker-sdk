import { get, post } from './request'

const block = {
  getsdk: function (baseUrl, data) {
    return post(`${baseUrl}/api/v1/org/list`, data)
  }
}




// const block = function (baseUrl) {
//   return {
//     getsdk: function (data) {
//       return post(`${baseUrl}/api/v1/org/list`, data)
//     }
//   }
  
// }

export default block
