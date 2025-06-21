# EmailJS Setup Instructions for Snevek Engineering

Follow these steps to set up EmailJS for your contact form:

## 1. Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for an account (the free tier allows 200 emails per month)
3. Verify your email address

## 2. Create an Email Service

1. In your EmailJS dashboard, go to "Email Services" in the left sidebar
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps to connect your email account
5. Name your service "Snevek Contact Form" or something similar
6. Note the Service ID (it will look like "service_xxxxxxx")
7. Update the `serviceId` in `src/config/emailjs.js` with this value

## 3. Create an Email Template

1. Go to "Email Templates" in the left sidebar
2. Click "Create New Template"
3. Design your email template with the following variables:
   - `{{from_name}}` - The name of the person submitting the form
   - `{{from_email}}` - The email address of the person submitting the form
   - `{{from_phone}}` - The phone number of the person submitting the form
   - `{{service_required}}` - The service they're interested in
   - `{{message}}` - Their message
   - `{{to_email}}` - The recipient email addresses

4. Example template:
```
Subject: New Quote Request from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}
Phone: {{from_phone}}
Service Required: {{service_required}}

Message:
{{message}}

This message was sent via the Snevek Engineering website contact form.
```

5. Note the Template ID (it will look like "template_xxxxxxx")
6. Update the `templateId` in `src/config/emailjs.js` with this value

## 4. Get Your Public Key

1. Go to "Account" in the left sidebar
2. Find your "Public Key" under the "API Keys" section
3. Update the `publicKey` in `src/config/emailjs.js` with this value

## 5. Test Your Form

1. After updating all the values in `src/config/emailjs.js`, test your contact form
2. Fill out all the fields and submit
3. Check that you receive the email at both sales@snevek.co.za and thabethe0909@gmail.com

## Troubleshooting

If you encounter any issues:

1. Check the browser console for error messages
2. Verify that your Service ID, Template ID, and Public Key are correct
3. Make sure your email template contains all the variables used in the code
4. Check your EmailJS dashboard for any error messages or logs

## Security Note

The Public Key is safe to include in your frontend code, but never include your Private Key or any email account passwords in your code.