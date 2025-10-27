# Deployment Guide - KwestAI Landing Page

## Overview
This document provides step-by-step instructions for deploying the KwestAI Next.js landing page using GitHub Actions and GitHub Pages with a custom domain.

## Prerequisites
- GitHub repository access (admin or settings permissions)
- Your own custom domain (e.g., `kwest-ai.com`)
- Resend API key for email functionality
- Node.js and npm installed locally (for development)

## Environment Variables

### Required Variables
- **RESEND_API_KEY**: Your Resend API key for sending emails through the contact form

### How to Add Environment Variables

#### Local Development
1. Create a `.env.local` file in the project root:
   ```bash
   cp .env.example .env.local
   ```
2. Fill in your actual API keys:
   ```
   RESEND_API_KEY=your_actual_resend_api_key_here
   ```
3. The `.env.local` file is git-ignored and will not be committed

#### GitHub Production (Secrets)
GitHub Secrets allow you to store sensitive information securely. These variables are used during the CI/CD pipeline.

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add `RESEND_API_KEY` and paste your Resend API key
5. Click **Add secret**

**Note**: Environment variables in GitHub Secrets are automatically injected during the workflow run.

## GitHub Actions Workflow

### Trigger Events
The deployment workflow automatically triggers on:
- **Push to `master` branch**: Production deployment
- **Push to `deployment-setup` branch**: Testing deployment
- **Manual trigger**: Via GitHub Actions tab (Workflow Dispatch)

### Workflow Steps
1. **Checkout**: Clones the repository code
2. **Detect Package Manager**: Identifies npm, yarn, or pnpm
3. **Setup Node**: Installs Node.js LTS with dependency caching
4. **Setup Pages**: Configures GitHub Pages with custom domain (kwest-ai.com)
5. **Cache Management**: Caches `.next` build artifacts for faster builds
6. **Install Dependencies**: Runs `npm ci` to install packages
7. **Build**: Executes `npm run build` with RESEND_API_KEY injected
8. **Upload Artifact**: Uploads the built site to GitHub Pages
9. **Deploy**: Deploys the artifact to your custom domain

## Custom Domain Setup

### Files Included
- **`.github/workflows/deploy.yml`**: GitHub Actions workflow configuration
- **`public/CNAME`**: Contains your custom domain name (`kwest-ai.com`)

### DNS Configuration (One-time Setup)
To use `kwest-ai.com`, you need to configure DNS records at your domain registrar:

#### Option A: Using GitHub Pages IP Addresses (Recommended)
Add these `A` records to your DNS:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

#### Option B: Using CNAME Record (Alternative)
Add a `CNAME` record:
- **Host**: `www` (for www.kwest-ai.com)
- **Target**: `kwest-ai.github.io`

#### Option C: Apex Domain with ALIAS/ANAME
For root domain (`kwest-ai.com` without www):
- **Host**: `@` or leave blank
- **Target**: `kwest-ai.github.io`
- **Type**: `ALIAS` or `ANAME` (depending on your registrar)

### GitHub Pages Settings
1. Go to your GitHub repository
2. Navigate to **Settings** → **Pages**
3. **Source**: Should be set to **Deploy from a branch**
4. **Branch**: Select `gh-pages` and `/ (root)`
5. Under **Custom domain**: Enter `kwest-ai.com`
6. Check **Enforce HTTPS** (after DNS is configured)

### DNS Propagation
After adding DNS records, it may take 24-48 hours for propagation. You can check status at:
- https://dnschecker.org

## Deployment Process

### Step 1: Create a New Branch
```bash
git checkout -b deployment-setup
```

### Step 2: Make Your Changes
Edit your files, add features, update content, etc.

### Step 3: Commit Your Changes
```bash
git add .
git commit -m "feat: add deployment setup with GitHub Actions and custom domain"
```

### Step 4: Push to Your Branch
```bash
git push origin deployment-setup
```

### Step 5: Create a Pull Request (Optional)
On GitHub, create a PR from `deployment-setup` to `master` for code review.

### Step 6: Merge to Master (When Ready)
Once approved, merge the PR or push directly to `master`:
```bash
git checkout master
git merge deployment-setup
git push origin master
```

### Step 7: GitHub Actions Automatically Deploys
- The workflow triggers automatically on push to `master`
- Check **Actions** tab to monitor deployment progress
- Once complete, your site is live at `https://kwest-ai.com`

## Monitoring & Troubleshooting

### Check Deployment Status
1. Go to **GitHub** → Your repository
2. Click **Actions** tab
3. View workflow runs and their status

### Common Issues & Solutions

#### Issue: Build Fails
**Solution**: 
- Check the **Actions** tab for error messages
- Ensure `RESEND_API_KEY` is added to GitHub Secrets
- Verify all dependencies are in `package.json`

#### Issue: Site Not Live on Custom Domain
**Solution**:
- Wait 24-48 hours for DNS propagation
- Verify DNS records are correctly configured at your registrar
- Check GitHub Pages settings for custom domain configuration
- Clear browser cache or try incognito mode

#### Issue: HTTPS Not Working
**Solution**:
- Wait for GitHub to provision SSL certificate (usually 24 hours after domain setup)
- Once ready, enable "Enforce HTTPS" in repository Settings → Pages
- Refresh page after enabling HTTPS

#### Issue: Contact Form Not Sending Emails
**Solution**:
- Verify `RESEND_API_KEY` is valid (check at https://resend.com)
- Ensure the GitHub Secret `RESEND_API_KEY` is set correctly
- Check browser console and network tab for API errors
- Verify email recipient address in `src/app/api/contact/route.ts`

### View Logs
To see detailed deployment logs:
1. Go to **Actions** tab
2. Click on the failed workflow run
3. Expand the failed step to view logs

## Production vs Development

### Local Development
```bash
npm run dev
```
Runs on `http://localhost:3000` with hot-reload.

### Production Build (Local Testing)
```bash
npm run build
npm start
```
Tests the production build locally before deploying.

## Rollback

If deployment breaks production, you can rollback:

1. Revert the problematic commit:
   ```bash
   git revert <commit-hash>
   git push origin master
   ```

2. GitHub Actions will trigger and deploy the previous version

3. Or manually switch the Pages source to an older deployment in GitHub Settings

## Contact Form Configuration

The contact form in your landing page uses Resend for email delivery:

- **API Endpoint**: `src/app/api/contact/route.ts`
- **Email Recipient**: `kaushik.kumar@kwest-ai.com` (update as needed)
- **Email Provider**: Resend (`resend` package)

### To Change Email Settings
Edit `src/app/api/contact/route.ts`:
```typescript
const result = await resend.emails.send({
  from: 'KwestAI Contact Form <onboarding@resend.dev>',
  to: 'your-email@domain.com',  // ← Change this
  // ... rest of config
});
```

## Security Best Practices

1. **Never commit `.env.local`** - Use `.gitignore` (already configured)
2. **Use GitHub Secrets** for all sensitive information
3. **Rotate API keys regularly** - Update in both local `.env.local` and GitHub Secrets
4. **Limit branch access** - Use branch protection rules for `master`
5. **Enable HTTPS** - Always enforce HTTPS on GitHub Pages
6. **Monitor API usage** - Check Resend dashboard for email sending limits

## Useful Links

- [Next.js Documentation](https://nextjs.org/docs)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Resend Documentation](https://resend.com/docs)
- [Custom Domain Setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## Support

For issues or questions:
1. Check this guide first
2. Review GitHub Actions logs
3. Check error messages in browser console
4. Visit relevant documentation links above
5. Contact your development team

---

**Last Updated**: October 27, 2025
**Version**: 1.0
