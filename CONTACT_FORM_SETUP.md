# Setting Up Contact Form with Formspree

## Quick Setup Instructions

### 1. Create Formspree Account
1. Go to [formspree.io](https://formspree.io)
2. Sign up for a free account
3. Click "New Form"
4. Enter form name: "Portfolio Contact Form"
5. Enter your email where you want to receive messages

### 2. Get Your Form ID
1. After creating the form, you'll get an endpoint like:
   `https://formspree.io/f/xpznkqbo`
2. Copy the form ID (the part after `/f/`)

### 3. Update Configuration
1. Open `src/config/services.js`
2. Replace `YOUR_FORM_ID` with your actual form ID:
   ```javascript
   endpoint: 'https://formspree.io/f/xpznkqbo'  // Your actual ID
   ```

### 4. Test the Form
1. Deploy your changes or test locally
2. Fill out the contact form
3. Check your email for the message
4. On first submission, Formspree will send a confirmation email

## Features Included

✅ **Form Validation** - Required fields and email format validation
✅ **Loading States** - Shows "Sending..." while submitting
✅ **Success Messages** - Confirms when message is sent
✅ **Error Handling** - Shows error if submission fails
✅ **Spam Protection** - Formspree includes built-in spam filtering
✅ **Email Notifications** - You'll receive emails for each submission

## Alternative Services

If you prefer other services, you can easily switch:

### Netlify Forms (if using Netlify hosting)
- Add `data-netlify="true"` to your form element
- No external service needed

### EmailJS
- Sends emails directly from frontend
- Good for custom email templates

### Custom Backend
- Full control over form processing
- Requires backend development

## Free Tier Limits

**Formspree Free Tier:**
- 50 submissions per month
- Basic spam filtering
- Email notifications

This should be sufficient for a personal portfolio. If you need more, paid plans start at $10/month.
