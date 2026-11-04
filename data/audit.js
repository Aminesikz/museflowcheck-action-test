const db = require("../db");

exports.since = (since, cb) => db.query("SELECT * FROM audit WHERE created_at > '" + since + "'", cb);
