# Deployment Setup Guide

## Architecture
- **Frontend**: React + Vite (Vercel)
- **Backend**: Express.js with Node.js (Vercel)
- **Email**: Gmail via Nodemailer

## Prerequisites
- Two separate Vercel projects (frontend & backend)
- Gmail account with App Password enabled

## Step 1: Set Up Gmail App Password

1. Go to: https://myaccount.google.com/security
2. Enable "2-Step Verification" if not already enabled
3. Go to: https://myaccount.google.com/apppasswords
4. Select "Mail" and "Windows Computer"
5. Copy the 16-character app password

## Step 2: Deploy Backend on Vercel

1. Push `/backend` folder to GitHub
2. Create new Vercel project → Import from Git → Select backend repo
3. Set Root Directory to `backend/`
4. Add Environment Variables:
   - `GMAIL_USER`: your-email@gmail.com
   - `GMAIL_APP_PASSWORD`: your-16-char-app-password
   - `RECEIVER_EMAIL`: admissions@bbt.edu.pk
   - `FRONTEND_URL`: https://your-frontend-url.vercel.app
5. Note the backend deployment URL (e.g., `https://your-backend.vercel.app`)

## Step 3: Deploy Frontend on Vercel

1. Push root directory to GitHub
2. Create new Vercel project → Import from Git
3. Do NOT set Root Directory (leave empty for root)
4. Add Environment Variables:
   - `VITE_API_URL`: https://your-backend-url.vercel.app/api/contact
5. Deploy

## Step 4: Update Backend CORS

Backend already accepts all Vercel deployments (*.vercel.app), so CORS should work automatically.

## Step 5: Test the Form

1. Fill out the enrollment form on your deployed frontend
2. Submit the form
3. Check:
   - Your inbox (business email)
   - Applicant's inbox (auto-reply)
   - Backend logs in Vercel for any errors

## Troubleshooting

### Form submission fails with "Could not reach the server"
- Check that `VITE_API_URL` is set correctly in frontend project
- Verify backend URL is accessible: `https://your-backend.vercel.app/api/health`

### Emails not sending
- Check backend Vercel logs for error messages
- Verify Gmail credentials are correct
- Ensure 2FA and App Password are enabled on Gmail
- Check that `GMAIL_USER` and `GMAIL_APP_PASSWORD` are set in backend

### CORS errors in browser console
- Backend CORS is set to accept all `*.vercel.app` domains
- If using custom domain, add to backend `allowedOrigins` in server.js

## Local Development

### Frontend
```bash
npm install
npm run dev
```

### Backend
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your credentials
npm run dev
```

Example `.env`:
```
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-16-char-app-password
RECEIVER_EMAIL=admissions@bbt.edu.pk
FRONTEND_URL=http://localhost:5173
PORT=5000
```

Frontend will automatically use `http://localhost:5000/api/contact` in development (fallback to relative URL).
