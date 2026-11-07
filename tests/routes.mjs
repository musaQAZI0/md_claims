const baseUrl = process.env.BASE_URL || "http://localhost:3000";
const routes = ["/md-sonography/", "/md-sonography/about", "/md-sonography/services", "/md-sonography/patient-information", "/md-sonography/patient-information/preparation", "/md-sonography/patient-information/results", "/md-sonography/faq", "/md-sonography/appointment", "/md-sonography/contact", "/", "/md-claims/", "/md-claims/about/", "/md-claims/contact/", "/md-claims/specialties/", "/md-claims/why-choose-us/", "/privacy-policy/", "/terms-of-service/"];
for (const route of routes) {
  const response = await fetch(`${baseUrl}${route}`);
  if (!response.ok) throw new Error(`${route} returned ${response.status}`);
  const html = await response.text();
  if (!html.includes("<html")) throw new Error(`${route} did not return an HTML document`);
  console.log(`PASS route ${route}`);
}
console.log("Route smoke checks complete");

// Follow the imported site's navigation to catch namespace mistakes and missing assets.
const pending = ["/md-sonography/"];
const visited = new Set();
while (pending.length) {
  const route = pending.shift();
  if (visited.has(route)) continue;
  visited.add(route);
  const response = await fetch(`${baseUrl}${route}`);
  if (!response.ok) throw new Error(`Sonography link ${route} returned ${response.status}`);
  const html = await response.text();
  if (!html.includes('sonography-site')) throw new Error(`${route} is missing the sonography layout`);
  for (const [, href] of html.matchAll(/href="([^"#?]+)(?:[?#][^"]*)?"/g)) {
    if (!href.startsWith('/md-sonography')) continue;
    if (/\.[a-z0-9]+$/i.test(href)) {
      const asset = await fetch(`${baseUrl}${href}`);
      if (!asset.ok) throw new Error(`Sonography asset ${href} returned ${asset.status}`);
    } else if (!visited.has(href)) pending.push(href);
  }
  console.log(`PASS sonography navigation ${route}`);
}
const gateway = await (await fetch(baseUrl)).text();
if (!/href="\/md-sonography\/?"/.test(gateway)) throw new Error('Gateway is missing the sonography entry');
for (const route of ['/md-sonography/services/not-a-scan', '/md-sonography/patient-information/not-a-guide']) {
  const response = await fetch(`${baseUrl}${route}`);
  if (response.status !== 404) throw new Error(`${route} should return 404`);
}
console.log('Sonography gateway, navigation, assets, and invalid routes verified');
