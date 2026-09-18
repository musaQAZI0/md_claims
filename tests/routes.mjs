const baseUrl = process.env.BASE_URL || "http://localhost:3000";
const routes = ["/", "/md-claims/", "/md-claims/about/", "/md-claims/contact/", "/md-claims/specialties/", "/md-claims/why-choose-us/", "/privacy-policy/", "/terms-of-service/"];
for (const route of routes) {
  const response = await fetch(`${baseUrl}${route}`);
  if (!response.ok) throw new Error(`${route} returned ${response.status}`);
  const html = await response.text();
  if (!html.includes("<html")) throw new Error(`${route} did not return an HTML document`);
  console.log(`PASS route ${route}`);
}
console.log("Route smoke checks complete");
