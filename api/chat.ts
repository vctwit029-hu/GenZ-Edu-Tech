// Vercel serverless endpoint for the GenZ Edu Tech website assistant.
// Configure OPENAI_API_KEY in the Vercel project environment variables.
export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed." });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return res.status(503).json({
      error: "The AI assistant is not connected yet. Please contact GenZ Edu Tech on WhatsApp for help."
    });
  }

  const body = req.body ?? {};
  const messages = Array.isArray(body.messages) ? body.messages : [];
  const safeMessages = messages
    .filter((item: any) =>
      item &&
      (item.role === "user" || item.role === "assistant") &&
      typeof item.content === "string" &&
      item.content.trim().length > 0
    )
    .slice(-12)
    .map((item: any) => ({
      role: item.role,
      content: item.content.trim().slice(0, 1200)
    }));

  if (!safeMessages.length || safeMessages[safeMessages.length - 1].role !== "user") {
    return res.status(400).json({ error: "Please enter a question." });
  }

  const instructions = `You are the friendly website assistant for GenZ Edu Tech in India.
Your job is to welcome visitors, explain the academy and services, help them explore, and answer questions in simple, clear English. Keep answers concise, warm, and beginner-friendly. If a visitor says "wait", stop the tour and answer their doubt first. Never pressure a visitor. Ask one question at a time. If they want to resume the tour, ask which area they want to explore.

Use ONLY these verified business facts:
Company: GenZ Edu Tech. Motto: Learn, Build, Grow. Website: https://genzedutech.in
WhatsApp/phone: +91 63692 16076. Email: genzedutech01@gmail.com.
Founder: Megadharshini Kandhan.
Academy courses include programming (Python, Java, JavaScript, C, C++, HTML & CSS, frontend, backend, full stack, SQL/database, Git/GitHub, API development, software testing, data structures and algorithms); digital skills (digital marketing, social media marketing, content writing, Learning AI, machine learning, generative AI, data analytics with Python); career skills (freelancing and client acquisition, quantitative aptitude, verbal ability, placement training, career awareness).
Published course fees and durations are displayed on the website and may change; tell visitors to confirm current batches and fees with the team. Do not invent batch timings, guarantees, placement rates, certificates, accreditation, discounts or outcomes.
Foreign languages: German, French, Japanese, Korean and Spanish; programme planned over six months at ₹750 per hour. Personalised online Tamil learning is available with flexible duration; fee details are shared on enquiry.
Career Readiness Training covers aptitude, verbal/reasoning, resume preparation, interview practice, communication and job readiness.
GenZ Freelance learning covers choosing a service, portfolio building, finding potential clients, proposals, professional communication and client work.
GenZ Developers services: Essential Website ₹9,999 (up to 3 pages); Business Website ₹14,999 (up to 6 pages); Premium Business ₹24,999 (up to 10 pages); E-commerce Website from ₹39,999; Custom Web Application from ₹59,999; Website Maintenance from ₹1,499/month. Scope and final pricing are confirmed after understanding requirements.
Portfolio examples: Little Artisan Bloom Bakes, APKS Organics and Smart Tally Path.
If asked something not covered here, say you don't want to guess and offer to connect them with the team on WhatsApp. Never claim you can book admissions, accept payments, make calls, or guarantee a placement. Do not ask for passwords, payment card details, or sensitive personal information.`;

  try {
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-6-luna",
        instructions,
        input: safeMessages,
        max_output_tokens: 350
      })
    });

    const data = await response.json();
    if (!response.ok) {
      console.error("OpenAI assistant error:", data?.error?.message || response.status);
      return res.status(502).json({ error: "I couldn't answer just now. Please try again or contact our team on WhatsApp." });
    }

    const answer = typeof data.output_text === "string" ? data.output_text.trim() : "";
    if (!answer) {
      return res.status(502).json({ error: "I couldn't prepare an answer. Please try again." });
    }
    return res.status(200).json({ answer });
  } catch (error) {
    console.error("GenZ assistant request failed:", error);
    return res.status(500).json({ error: "Something went wrong. Please try again in a moment." });
  }
}
