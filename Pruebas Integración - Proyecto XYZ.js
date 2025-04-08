pm.test("Estado debe ser 200", function () {
  pm.response.to.have.status(200);
});

pm.environment.set("dato", pm.response.json().fact);
