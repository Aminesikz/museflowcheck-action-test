const dao = require(process.env.AUDIT_DAO || "../data/audit");

exports.recent = (req, res) => {
  dao.since(req.query.since, (err, rows) => (err ? res.status(500).end() : res.json(rows)));
};
