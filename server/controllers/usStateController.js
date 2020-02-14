module.exports = {

  getRegUrl: async (req, res) => {
    const db = req.app.get('db')
    const [result] = await db.get_reg_url(req.params.usstate)
    res.status(200).send(result.reg_to_vote_url)
  }



}