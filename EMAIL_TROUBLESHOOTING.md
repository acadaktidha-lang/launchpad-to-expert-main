# Email Submission Troubleshooting Checklist

## Quick Diagnosis

### 1. Check Frontend Build-Time Configuration
- [ ] `VITE_API_URL` environment variable is set in Vercel frontend project
- [ ] Value is: `https://your-backend.vercel.app/api/contact`
- [ ] Frontend project was redeployed AFTER setting this variable

### 2. Test Backend Availability
- [ ] Open browser console (F12)
- [ ] Go to your backend URL: `https://your-backend.vercel.app/api/health`
- [ ] Should see: `{"status":"ok","timestamp":"..."}` (not an error page)

### 3. Test Form Submission with DevTools
- [ ] Open your form page
- [ ] Open DevTools (F12) → Network tab
- [ ] Fill form and submit
- [ ] Look for request to `/api/contact`
- [ ] Check the request URL - it should be your backend domain
- [ ] Check response status - should be 200 for success, not 4xx or 5xx

### 4. Check Backend Logs
- [ ] Go to Vercel → Backend project → Deployments → Logs
- [ ] Look for recent logs when you submit the form
- [ ] Should see:
  - `📨 New form submission from [email] for service: [track]`
  - `✅ Mail transporter is ready`
  - `✅ Email sent successfully!`

### 5. Verify Environment Variables on Backend
In Vercel backend project → Settings → Environment Variables:
- [ ] `GMAIL_USER` is set (your Gmail address)
- [ ] `GMAIL_APP_PASSWORD` is set (16-character app password)
- [ ] `RECEIVER_EMAIL` is set (where emails should be received)
- [ ] `FRONTEND_URL` is set (your frontend Vercel URL)

### 6. Check Gmail Account
- [ ] 2-Step Verification is enabled on Gmail account
- [ ] App Password created in Gmail security settings
- [ ] Using the correct 16-character app password (not regular password)
- [ ] Check Gmail inbox AND spam folder for test emails

## Common Issues & Solutions

| Issue | Possible Cause | Solution |
|-------|-------|----------|
| "Could not reach the server" error | `VITE_API_URL` not set or wrong format | Set correct backend URL in frontend Vercel project, redeploy |
| 404 Page at `/api/contact` | Backend `/api/contact` route not found | Verify backend is deployed correctly |
| 500 Error / "Failed to send email" | Gmail credentials missing/wrong | Double-check credentials in backend Vercel project |
| Form submits but no email received | Email configured to wrong recipient | Verify `RECEIVER_EMAIL` in backend project settings |
| Email in spam folder | Gmail security settings | Add sender email to contacts; check SPF/DKIM |
| No "Application Received" auto-reply | Missing `GMAIL_USER` in env | Set `GMAIL_USER` in backend Vercel project |

## Reset & Redeploy

If stuck, try this:

1. **Backend**:
   - Go to Vercel → Backend project → Settings → Environment Variables
   - Delete and re-add: `GMAIL_USER`, `GMAIL_APP_PASSWORD`, `RECEIVER_EMAIL`
   - Go to Deployments → Redeploy latest

2. **Frontend**:
   - Go to Vercel → Frontend project → Settings → Environment Variables
   - Re-check `VITE_API_URL` is set correctly
   - Go to Deployments → Redeploy latest

3. **Test**:
   - Wait 2-3 minutes for deployment to complete
   - Clear browser cache (Ctrl+Shift+Delete)
   - Try form submission again

## Debug Logging

To enable more detailed error messages, check backend logs:

1. Open your browser's DevTools (F12)
2. Go to Network tab
3. Submit the form
4. Click on the POST request to `/api/contact`
5. View the Response tab - any error messages will be shown there

If you see detailed error info, share it for specific troubleshooting.
