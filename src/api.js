import axios from 'axios'

const baseUrl = 'http://admin.zkteco-wa.com'

async function subscriberEmail (payload) {
  const response = await axios.post(`${baseUrl}/maillists`, payload)
  return response
}

export default {
    subscriberEmail
}