// server-actions/submitApplication.ts
"use server";

import { Resend } from "resend";
import { z } from "zod";

// Define the type for the state object
const formStateSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  error: z.string().optional(),
});
type FormState = z.infer<typeof formStateSchema>;

const resend = new Resend(process.env.RESEND_API_KEY);

// The function now accepts 'prevState' as the first argument
export async function submitApplication(prevState: FormState, formData: FormData): Promise<FormState> {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Log the API key to make sure it's loaded (first 10 characters only for security)
  console.log("API Key loaded:", process.env.RESEND_API_KEY ? process.env.RESEND_API_KEY.substring(0, 10) + "..." : "NOT FOUND");
  
  // Extract text data and files from the form
  const textData = {
    fullName: formData.get("fullName"),
    gender: formData.get("gender"),
    phoneNumber: formData.get("phoneNumber"),
    whatsappNumber: formData.get("whatsappNumber"),
    emailAddress: formData.get("emailAddress"),
    location: formData.get("location"),
    preferredRole: formData.get("preferredRole"),
  };

  // Define the schema for form data validation
  const formSchema = z.object({
    fullName: z.string().min(1, "Full name is required."),
    gender: z.string().min(1, "Gender is required."),
    phoneNumber: z.string().regex(/^[0-9]{10}$/, "Invalid phone number."),
    whatsappNumber: z.string().regex(/^[0-9]{10}$/, "Invalid WhatsApp number."),
    emailAddress: z.string().email("Invalid email address."),
    location: z.string().min(1, "Location is required."),
    preferredRole: z.string().min(1, "Preferred role is required."),
  });

  // Validate the text data
  const validation = formSchema.safeParse(textData);
  if (!validation.success) {
        return { success: false, message: "", error: validation.error.issues[0].message };
  }

  const files = {
    resume: formData.get("resume") as File,
    aadharCard: formData.get("aadharCard") as File,
    panCard: formData.get("panCard") as File,
    passportPhoto: formData.get("passportPhoto") as File,
  };
  
  // Check that all required files are present and are of type File
  const requiredFiles = ["resume", "aadharCard", "panCard", "passportPhoto"];
  for (const fileKey of requiredFiles) {
    const file = files[fileKey as keyof typeof files];
    if (!file || file.size === 0) {
      return { success: false, message: "", error: `Please upload your ${fileKey.replace(/([A-Z])/g, " $1").toLowerCase()}.` };
    }
  }

  const htmlContent = `
    <h1>New Career Application - Internacia India</h1>
    <h2>Personal Information</h2>
    <p><strong>Full Name:</strong> ${validation.data.fullName}</p>
    <p><strong>Gender:</strong> ${validation.data.gender}</p>
    <p><strong>Phone Number:</strong> ${validation.data.phoneNumber}</p>
    <p><strong>WhatsApp Number:</strong> ${validation.data.whatsappNumber}</p>
    <p><strong>Email:</strong> ${validation.data.emailAddress}</p>
    <p><strong>Location:</strong> ${validation.data.location}</p>
    <p><strong>Preferred Role:</strong> ${validation.data.preferredRole}</p>
    <hr>
    <p><strong>Documents Attached:</strong></p>
    <ul>
      <li>Resume/CV: ${files.resume.name}</li>
      <li>Aadhar Card: ${files.aadharCard.name}</li>
      <li>PAN Card: ${files.panCard.name}</li>
      <li>Passport Photo: ${files.passportPhoto.name}</li>
    </ul>
    <hr>
    <p><em>This application was submitted through the Internacia India career website.</em></p>
  `;

  // Prepare file attachments for the email
  try {
    console.log("Preparing to send email...");
    
    const attachments = await Promise.all(
      Object.values(files).map(async (file) => ({
        filename: file.name,
        content: Buffer.from(await file.arrayBuffer()),
      }))
    );

    console.log("Attachments prepared, sending email...");

    const emailResult = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "vanshkayarkar993@gmail.com",
      subject: `New Job Application from ${validation.data.fullName} - Internacia India`,
      html: htmlContent,
      attachments: attachments,
    });

    console.log("Email sent successfully!", emailResult);
    
    // Log successful submission
    console.log("Application submitted:", {
      fullName: validation.data.fullName,
      phoneNumber: validation.data.phoneNumber,
      emailAddress: validation.data.emailAddress,
      files: {
        resume: files.resume.name,
        aadharCard: files.aadharCard.name,
        panCard: files.panCard.name,
        passportPhoto: files.passportPhoto.name
      }
    });
    
    return { 
      success: true, 
      message: "Your application has been submitted successfully! Our team will contact you within 24 hours.",
      error: ""
    };
  } catch (error) {
    console.error("DETAILED Resend API Error:", error);
    console.error("Error type:", typeof error);
    console.error("Error message:", error instanceof Error ? error.message : 'Unknown error');
    
    return { success: false, message: "", error: "Failed to send application. Please try again or contact us directly." };
  }
}