const dao = require(process.env.REPORTS_DAO || "../data/reports");

exports.list = (req, res) => {
  dao.byOwner(req.query.owner, (err, rows) => (err ? res.status(500).end() : res.json(rows)));
};
