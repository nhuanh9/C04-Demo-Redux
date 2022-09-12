const axios = require('axios')
 const xxx = axios.create({
    headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`
    }
})
export default xxx;
