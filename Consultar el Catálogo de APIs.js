pm.test("Catálogo disponible", () => {
  pm.response.to.have.status(200);
});

console.log(pm.response.json());

// Check if response is an array
const responseData = pm.response.json();
if (Array.isArray(responseData)) {
  let total = responseData.length;
  pm.test("Debe haber al menos 1 API", () => {
    pm.expect(total).to.be.above(0);
  });
} else {
  // Handle object response - maybe the data is nested
  // For example, if your API returns {items: []}
  let total = responseData.items ? responseData.items.length : 0;
  // Or use another appropriate property based on your API response
  pm.test("Debe haber al menos 1 API", () => {
    pm.expect(total).to.be.above(0);
  });
}