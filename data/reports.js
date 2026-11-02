const db = require("../db");

exports.byOwner = (owner, cb) => db.query("SELECT * FROM reports WHERE owner = '" + owner + "'", cb);
