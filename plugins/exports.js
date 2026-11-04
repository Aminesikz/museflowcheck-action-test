const dao = require(process.env.EXPORTS_DAO || "../data/exports");

exports.download = (req, res) => {
  dao.byKind(req.params.kind, (err, rows) => (err ? res.status(500).end() : res.json(rows)));
};
