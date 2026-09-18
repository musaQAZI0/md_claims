type ContactPayload = { fullName?: unknown; practiceName?: unknown; email?: unknown; phone?: unknown; specialty?: unknown; npi?: unknown; message?: unknown };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export async function POST(request: Request) {
  let body: ContactPayload;
  try { body = await request.json() as ContactPayload; } catch { return Response.json({ success: false, message: "Invalid request body." }, { status: 400 }); }
  const text = (value: unknown) => typeof value === "string" ? value.trim() : "";
  const fullName=text(body.fullName), practiceName=text(body.practiceName), email=text(body.email), npi=text(body.npi), message=text(body.message); const errors: Record<string,string> = {};
  if (!fullName) errors.fullName="Full name is required."; if (!practiceName) errors.practiceName="Practice name is required."; if (!email || !emailPattern.test(email)) errors.email="Enter a valid email address."; if (!/^\d{10}$/.test(npi)) errors.npi="Enter a valid 10-digit NPI number."; if (!message || message.length < 10) errors.message="Message must be at least 10 characters.";
  if (Object.keys(errors).length) return Response.json({ success:false, message:"Incorrect information. Please check your details and enter a valid 10-digit NPI.", errors }, { status:422 });
  try { const response = await fetch("https://npiregistry.cms.hhs.gov/api/?version=2.1&number=" + npi, { cache:"no-store" }); const result = await response.json() as { result_count?: number; results?: Array<{ basic?: { status?: string } }> }; if (!response.ok || result.result_count !== 1 || result.results?.[0]?.basic?.status !== "A") return Response.json({ success:false, message:"Incorrect NPI information. Please enter a valid active 10-digit NPI and try again.", errors:{ npi:"NPI verification failed." } }, { status:422 }); } catch { return Response.json({ success:false, message:"NPI verification is temporarily unavailable. Please try again." }, { status:503 }); }
  return Response.json({ success:true, submitted:false, message:"Your NPI was verified. Email delivery is not configured yet, so this message was not sent." });
}
