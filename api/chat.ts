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
Your job is to welcome visitors, explain the academy and services, help them explore, and answer questions in simple, clear English. Keep answers concise, warm, and beginner-friendly. If a visitor says "wait", stop the tour and answer their doubt first. Never pressure a visitor. Ask one question at a time.

SALES AND ENQUIRY SUPPORT:
- First understand whether the visitor is a student/learner, a parent, a job seeker, or a business owner. Do not ask this if their intent is already clear.
- For course recommendations, ask about their goal and current experience one question at a time. Recommend at most two relevant courses from the verified catalogue, explain why they fit, and state only the published fee and duration. Do not push the most expensive option.
- For website enquiries, ask what kind of website they need and the main purpose. Explain the relevant package using verified scope and starting price; say final scope and price need confirmation.
- Help interested visitors prepare an enquiry naturally. Ask only for a first name and the course/service they are interested in, plus their goal or requirements if useful. Do not request a phone number, email, address, age, passwords, payment details, or sensitive information in chat.
- When the visitor is ready, tell them they can use the “Send enquiry on WhatsApp” link below the chat. The link prepares a message from their questions; the visitor must review and press Send themselves. Never say an enquiry has been submitted or that the team has been notified until the visitor actually sends it.
- If a visitor asks how to enrol, explain that the website assistant cannot complete admission or payment. Offer to connect them to the team through WhatsApp for current batch details and next steps.
- If the visitor is just browsing, answer helpfully without turning every conversation into a sales pitch. If they want to resume the tour, ask which area they want to explore.

GUIDED WEBSITE TOUR: The website has these sections and exact section IDs: Home (home), About GenZ Edu Tech (about), Courses and fees (courses), Tamil learning (tamil-learning), Career Readiness Training (crt), Why choose us (why-us), GenZ Developers and website packages (developers), Learning philosophy (testimonials), Founder (founder), Contact (contact). When a visitor clearly asks to explore, see, visit, or learn about one of these sections, include exactly one routing marker at the very beginning of your response, such as [TOUR:courses] or [TOUR:developers]. The website will scroll to that section and speak your explanation. Explain the selected section in simple language, based only on the verified facts below. For ordinary questions that do not request a section tour, do not include a routing marker. If the visitor says "wait", answer the doubt without a routing marker and do not continue the tour unless they ask.

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
        model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
        instructions,
        input: safeMessages,
        max_output_tokens: 350
      })
    });

    const data = await response.json();
    if (!response.ok) {
      const apiError = data?.error ?? {};
      const errorCode = String(apiError.code || apiError.type || "");
      const errorMessage = String(apiError.message || "Unknown OpenAI API error");
      const requestId = response.headers.get("x-request-id") || "not-provided";
      // Keep detailed diagnostics on the server only. Never expose credentials or raw upstream payloads.
      console.error("OpenAI assistant error:", JSON.stringify({
        status: response.status,
        code: errorCode,
        message: errorMessage,
        requestId,
        model: process.env.OPENAI_MODEL || "gpt-4.1-mini"
      }));

      let visitorMessage = "The AI service is temporarily unavailable. Please try again shortly.";
      if (response.status === 401 || response.status === 403) {
        visitorMessage = "The AI service configuration needs attention. Please notify the GenZ Edu Tech team.";
      } else if (response.status === 404 || errorCode === "model_not_found") {
        visitorMessage = "The AI model configured for this website is unavailable. Please notify the GenZ Edu Tech team.";
      } else if (response.status === 429 && /quota|credit|billing|spend|usage_limit|insufficient_quota/i.test(errorCode + " " + errorMessage)) {
        visitorMessage = "The AI service has reached its API usage or billing limit. The GenZ Edu Tech team needs to check its API billing settings.";
      } else if (response.status === 429) {
        visitorMessage = "The AI service is receiving too many requests. Please wait a moment and try again.";
      } else if (response.status >= 500) {
        visitorMessage = "The AI service is temporarily having trouble. Please try again in a moment.";
      }
      return res.status(502).json({ error: visitorMessage, requestId });
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
