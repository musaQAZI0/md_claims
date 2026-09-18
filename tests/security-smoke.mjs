const baseUrl = process.env.BASE_URL || "http://localhost:3000";
const response = await fetch(`${baseUrl}/md-claims/`);
const requiredHeaders = ["content-security-policy", "x-content-type-options", "referrer-policy"];
for (const header of requiredHeaders) {
  if (!response.headers.get(header)) console.warn(`WARN missing security header: ${header}`);
  else console.log(`PASS security header: ${header}`);
}
if (response.status !== 200) throw new Error(`homepage returned ${response.status}`);
console.log("Security smoke checks complete; review warnings before production launch");
