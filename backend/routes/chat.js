const express = require('express')
const router = express.Router()
const axios = require('axios')

router.post('/authenticate', async (req, res)=> {
  const {username} = req.body
  try {
    const response = await axios.put("https://api.chatengine.io/users/",
      {username: username, secret: username, first_name: username},
      {headers: {"private-key": "fe375580-371d-4ce9-a785-f4fd4ade2593"}}
    )
    return res.status(response.status).json(response.data)
  } catch (error) {
    return res.status(500).json({message: error.message})
  }

})
module.exports = router