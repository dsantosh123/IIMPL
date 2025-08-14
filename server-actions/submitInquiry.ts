// server-actions/submitInquiry.ts
"use server";

import { Resend } from "resend";
import { z } from "zod";

// Define the schema for the inquiry form data validation
const inquirySchema = z.object({
  name: z.string().min(1, "Name is required."),
  phone: z.string().regex(/^[0-9]{10}$/, "Invalid phone number."),
  message: z.string().min(1, "Message cannot be empty."),
});

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

// The server action function to handle the inquiry form submission
export async function submitInquiry(prevState: any, formData: FormData) {
  // Simulate API call delay (you can remove this if you want)
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Extract data from the form
  const data = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  };

  // Validate the data against the defined schema
  const validation = inquirySchema.safeParse(data);
  if (!validation.success) {
    return { success: false, message: "", error: validation.error.issues[0].message };
  }

  // Construct the HTML content for the email
  const htmlContent = `
    <h1>New Quick Inquiry from Internacia India Website</h1>
    <p><strong>Name:</strong> ${validation.data.name}</p>
    <p><strong>Phone Number:</strong> ${validation.data.phone}</p>
    <p><strong>Message:</strong> ${validation.data.message}</p>
    <hr>
    <p><em>This inquiry was submitted through the career website contact form.</em></p>
  `;

  try {
    // Send the email using the Resend API
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "vanshkayarkar993@gmail.com",
      subject: `New Inquiry from ${validation.data.name} - Internacia India`,
      html: htmlContent,
    });
    
    console.log("Inquiry submitted:", { name: validation.data.name, phone: validation.data.phone, message: validation.data.message });
    
    // Return a success state
    return { success: true, message: "Thank you for your inquiry! We'll get back to you soon.", error: "" };
  } catch (error) {
    console.error("Resend API Error:", error);
    // Return an error state if email sending fails
    return { success: false, message: "", error: "Failed to send inquiry. Please try again." };
  }
}