import axios from 'axios'
const axiosInstance = axios.create({
  baseURL: 'http://172.32.1.91:8080',
  headers: {
    'Content-type': 'application/x-www-form-urlencoded'
  }
})

export default async ({ Vue }) => {
  Vue.prototype.$axios = axiosInstance
}
export { axiosInstance }
