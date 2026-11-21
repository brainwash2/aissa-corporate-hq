"use server";

import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

// 1. Initialize Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

// 2. Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// 3. The Function called by the Form
export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  // --- Step A: Save to Database ---
  const { error: dbError } = await supabase
    .from("contact_submissions")
    .insert([{ name, email, message }]);

  if (dbError) {
    console.error("Supabase Error:", dbError);
    return { success: false, error: "Failed to save message." };
  }

  // --- Step B: Send Email to YOU ---
  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>", // Keep this as is for testing
      to: "sirmohamed66@gmail.com", // <--- CHANGE THIS TO YOUR EMAIL
      subject: `New Portfolio Lead: ${name}`,
      html: `
        <h2>New Message from ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <blockquote style="background: #f9f9f9; padding: 10px; border-left: 5px solid #3b82f6;">
          ${message}
        </blockquote>
      `,
    });
  } catch (emailError) {
    console.error("Resend Error:", emailError);
    // We don't fail here because the DB save was successful
  }

  return { success: true };
}