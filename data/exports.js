const db = require("../db");

exports.byKind = (kind, cb) => db.query("SELECT * FROM exports WHERE kind = '" + kind + "'", cb);
