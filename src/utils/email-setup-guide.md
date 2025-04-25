# EmailJS Setup Guide for Your Portfolio

This guide will help you set up EmailJS to make your contact form fully functional.

## Step 1: Create an EmailJS Account

1. Go to https://www.emailjs.com/ and sign up for a free account
2. The free tier allows 200 emails per month, which should be sufficient for most portfolio sites

## Step 2: Create an Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose an email provider (Gmail, Outlook, or other)
4. Follow the authentication steps for your chosen provider
5. Name your service (e.g., "portfolio_service")
6. Note down the **Service ID**

## Step 3: Create an Email Template

1. Go to "Email Templates" in your EmailJS dashboard
2. Click "Create New Template"
3. Design your email template with a subject and body
4. Use the following variables in your template:
   - `{{from_name}}` - The name of the person contacting you
   - `{{from_email}}` - Their email address
   - `{{subject}}` - Subject of their message
   - `{{message}}` - The message content
5. Save the template and note down the **Template ID**

## Step 4: Get Your Public Key

1. Go to "Account" > "API Keys"
2. Copy your **Public Key**

## Step 5: Update Your Contact Component

1. Open `src/components/ContactSection.tsx`
2. Replace the placeholder values with your actual EmailJS credentials:
   ```typescript
   const serviceId = 'your_service_id'; // Replace with your EmailJS service ID
   const templateId = 'your_template_id'; // Replace with your EmailJS template ID
   const publicKey = 'your_public_key'; // Replace with your EmailJS public key
   ```

## Step 6: Test Your Form

After updating the credentials, test your contact form by filling it out and submitting. You should receive an email at the address you configured in your EmailJS service.

## Troubleshooting

If emails aren't being sent:
1. Check browser console for any errors
2. Verify your EmailJS credentials are correct
3. Ensure your email service is properly configured
4. Check your EmailJS dashboard for send logs and errors
