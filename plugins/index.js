// Loads each plugin's handlers by name, so plugins can be added without touching the server.
const names = ["reports", "exports", "audit"];
const load = (name) => require("./" + name);

module.exports = (app) => {
  const [reports, exports_, audit] = names.map(load);
  app.get("/reports", reports.list);
  app.get("/exports/:kind", exports_.download);
  app.get("/audit", audit.recent);
};
