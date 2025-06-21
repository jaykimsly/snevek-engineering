# EmailJS Setup Guide for Snevek Engineering

This guide will help you set up EmailJS to handle form submissions from your website.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for an account
2. Verify your email address

## Step 2: Create an Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Name your service `service_snevek` (or update the code to match your service ID)

## Step 3: Create an Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Design your email template with the following variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{from_phone}}` - Sender's phone
   - `{{service_required}}` - Service requested
   - `{{message}}` - Message content
4. Name your template ID `template_snevek` (or update the code to match your template ID)

## Step 4: Get Your Public Key

1. Go to "Account" > "API Keys"
2. Copy your "Public Key"
3. Replace `your_public_key` in the Contact.jsx file with your actual public key:

```javascript
const publicKey = 'your_public_key'; // Replace with your actual public key
```

## Step 5: Test Your Form

1. Fill out the contact form on your website
2. Submit the form
3. Check that you receive the email at both sales@snevek.co.za and thabethe0909@gmail.com

## Troubleshooting

- If emails aren't being sent, check your EmailJS dashboard for any error messages
- Verify that your service, template, and public key are correctly set up
- Make sure your email service provider isn't blocking the emails

## Additional Configuration

You can customize the email template further by adding more variables or changing the design in the EmailJS dashboard.