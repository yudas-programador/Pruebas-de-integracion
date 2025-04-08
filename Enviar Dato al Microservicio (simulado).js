// Test for successful response status
pm.test("POST recibido correctamente", () => {
  pm.response.to.have.status(200);
});

// Test response structure and properties
pm.test("Response structure and values", function () {
  const response = pm.response.json();
  
  // Check essential properties
  ['args', 'data', 'files', 'form', 'headers', 'origin', 'url'].forEach(prop => {
    pm.expect(response).to.have.property(prop);
  });
  
  // Check headers and JSON null value
  pm.expect(response.headers).to.not.be.empty;
  pm.expect(response.json).to.be.null;
  
  // Only compare "dato" if it's defined
  if (pm.environment.get("dato")) {
    pm.expect(response.args).to.eql(pm.environment.get("dato"));
  }
});