const baseUrl = process.env.BASE_URL || "http://localhost:3000";
const endpoint = `${baseUrl}/api/contact`;
const valid = { fullName: "Test User", practiceName: "Test Practice", email: "test@example.com", phone: "5555555555", specialty: "Family Medicine", npi: "1679576722", message: "This is a valid test message." };

async function post(body, headers = {}) {
  return fetch(endpoint, { method: "POST", headers: { "content-type": "application/json", ...headers }, body: JSON.stringify(body) });
}
async function expectStatus(name, response, expected) {
  if (response.status !== expected) throw new Error(`${name}: expected ${expected}, received ${response.status}`);
  console.log(`PASS ${name}`);
}

await expectStatus("missing required fields", await post({}), 422);
await expectStatus("invalid NPI format", await post({ ...valid, npi: "123" }), 422);
await expectStatus("invalid email", await post({ ...valid, email: "not-an-email" }), 422);
await expectStatus("short message", await post({ ...valid, message: "short" }), 422);
await expectStatus("malformed JSON", await fetch(endpoint, { method: "POST", headers: { "content-type": "application/json" }, body: "{" }), 400);
const response = await post(valid);
if (![200, 422, 503].includes(response.status)) throw new Error(`valid request returned unexpected status ${response.status}`);
console.log(`PASS valid request contract (${response.status})`);
console.log("Contact API checks complete");
