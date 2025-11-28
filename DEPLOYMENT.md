# 🚀 Deployment Guide - Live Hindustan Clone

## Quick Deployment Summary

Your Next.js application is production-ready and can be deployed to multiple platforms. Choose the option that best fits your needs.

---

## 1. **VERCEL** (Recommended - Easiest) ⭐

Vercel is the company behind Next.js and provides the best experience for Next.js projects.

### Pros
- ✅ Automatic deployment on git push
- ✅ Zero-config for Next.js
- ✅ Global CDN
- ✅ Automatic HTTPS
- ✅ Free tier available
- ✅ Built-in ISR support

### Steps

#### A. Push Code to GitHub
```powershell
# Initialize git
git init
git add .
git commit -m "Initial commit: Live Hindustan Clone"

# Create repo on github.com
# Push to GitHub
git remote add origin https://github.com/YOUR_USERNAME/live-hindustan.git
git push -u origin main
```

#### B. Deploy to Vercel
1. Go to https://vercel.com
2. Click "New Project"
3. Select your GitHub repository
4. Click "Import"
5. Click "Deploy"
6. Website goes live! 🎉

#### C. Custom Domain (Optional)
1. In Vercel dashboard
2. Go to Settings → Domains
3. Add your domain
4. Update DNS records

**Live at**: https://your-project-name.vercel.app

---

## 2. **NETLIFY** (Second Best)

Great alternative with good Next.js support.

### Pros
- ✅ Git integration
- ✅ Easy setup
- ✅ Good free tier
- ✅ Form handling built-in
- ✅ Analytics included

### Steps

1. Push code to GitHub (see Vercel step A)
2. Go to https://netlify.com
3. Click "New site from Git"
4. Choose GitHub
5. Select repository
6. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
7. Click "Deploy site"
8. Wait 2-5 minutes
9. Live! 🎉

---

## 3. **AWS AMPLIFY**

For AWS infrastructure integration.

### Steps

```bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Initialize Amplify
amplify init

# Add hosting
amplify add hosting

# Deploy
amplify publish
```

---

## 4. **DOCKER DEPLOYMENT** (Self-hosted)

For deploying on your own server or VPS.

### Create Dockerfile

```dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build
RUN npm run build

# Expose port
EXPOSE 3000

# Start
CMD ["npm", "start"]
```

### Build & Run Docker

```bash
# Build image
docker build -t live-hindustan .

# Run container
docker run -p 3000:3000 live-hindustan
```

### Deploy to Docker Hub

```bash
# Tag image
docker tag live-hindustan YOUR_DOCKER_USERNAME/live-hindustan

# Push to Docker Hub
docker push YOUR_DOCKER_USERNAME/live-hindustan
```

### Run on Server

```bash
docker run -d -p 3000:3000 YOUR_DOCKER_USERNAME/live-hindustan
```

---

## 5. **TRADITIONAL NODE.JS SERVER** (VPS/Dedicated)

For dedicated servers (DigitalOcean, Linode, AWS EC2, etc.)

### Prerequisites
- Ubuntu/Linux server
- Node.js 18+ installed
- Git installed
- SSH access

### Deployment Steps

```bash
# SSH into server
ssh user@your-server-ip

# Create project directory
mkdir -p /var/www/live-hindustan
cd /var/www/live-hindustan

# Clone repository
git clone https://github.com/YOUR_USERNAME/live-hindustan.git .

# Install dependencies
npm install

# Build project
npm run build

# Install PM2 (process manager)
npm install -g pm2

# Start with PM2
pm2 start npm --name "live-hindustan" -- start

# Save PM2 configuration
pm2 save

# Set PM2 to auto-start on reboot
pm2 startup

# Check status
pm2 status
```

### Setup Nginx Reverse Proxy

```bash
# Install Nginx
sudo apt-get install nginx

# Create Nginx config
sudo nano /etc/nginx/sites-available/live-hindustan
```

Paste:
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/live-hindustan /etc/nginx/sites-enabled/

# Test Nginx
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

### SSL Certificate (Let's Encrypt)

```bash
# Install Certbot
sudo apt-get install certbot python3-certbot-nginx

# Get certificate
sudo certbot --nginx -d your-domain.com

# Auto-renewal
sudo systemctl enable certbot.timer
```

---

## 6. **HEROKU** (Legacy - Slower but Simple)

### Steps

```bash
# Install Heroku CLI
# https://devcenter.heroku.com/articles/heroku-cli

# Login
heroku login

# Create app
heroku create your-app-name

# Add buildpack
heroku buildpacks:add heroku/nodejs

# Deploy
git push heroku main

# Open
heroku open
```

---

## 7. **FLY.IO** (Modern Alternative)

```bash
# Install Fly CLI
# https://fly.io/docs/hands-on/install-flyctl/

# Login
fly auth login

# Launch app
fly launch

# Deploy
fly deploy

# Open
fly open
```

---

## Environment Variables for Production

Create `.env.production.local`:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_SITE_NAME=Live Hindustan

# API Keys (if using real news API)
# NEXT_PUBLIC_NEWSAPI_KEY=your_key_here

# Analytics (optional)
# NEXT_PUBLIC_GA_ID=UA-XXXXX-X
```

---

## Pre-Deployment Checklist

- [ ] Run `npm run build` locally (ensure no errors)
- [ ] Run `npm run lint` (check TypeScript)
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Test all links and navigation
- [ ] Add custom domain (optional)
- [ ] Set up SSL/HTTPS
- [ ] Configure environment variables
- [ ] Set up monitoring (optional)
- [ ] Test contact forms (if added)
- [ ] Verify SEO meta tags
- [ ] Test image loading
- [ ] Check build size (`npm run build` output)

---

## Performance Optimization for Production

### 1. Enable Compression
Already enabled by default in Next.js

### 2. Use CDN
- Vercel: Automatic (recommended)
- Netlify: Automatic
- Manual: Use Cloudflare (free tier)

### 3. Optimize Images
Already done with Next.js `<Image>` component

### 4. Monitor Performance

**Vercel Analytics**:
```bash
# In package.json, add:
"next": "^14.0.0"
# Web Vitals automatically tracked
```

**Google Analytics** (optional):
1. Create property at google.com/analytics
2. Add to `.env.local`:
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### 5. Database Optimization
When you add a database:
- Use connection pooling
- Add caching layer (Redis)
- Monitor query performance

---

## Monitoring & Analytics

### Vercel Analytics (Free)
- Automatic in Vercel
- View in dashboard
- Web Vitals included

### Custom Analytics
```bash
npm install next-pwa
```

### Error Tracking (Sentry)
```bash
npm install @sentry/nextjs
```

Setup in `next.config.js`:
```javascript
const withSentryConfig = require('@sentry/nextjs').withSentryConfig;

module.exports = withSentryConfig(nextConfig);
```

---

## Rollback Procedures

### Vercel
1. Go to Deployments
2. Click on previous deployment
3. Click "Redeploy"

### GitHub-based deployments
```bash
git revert <commit-hash>
git push
# Auto-deploys previous version
```

### Manual server
```bash
git reset --hard <commit-hash>
npm run build
pm2 restart live-hindustan
```

---

## Cost Estimation

| Platform | Free Tier | Paid |
|----------|-----------|------|
| Vercel | Yes (generous) | $20+/month |
| Netlify | Yes | $19+/month |
| Heroku | ❌ (ended 2022) | - |
| AWS | 12 months free | Variable |
| DigitalOcean | No | $4+/month |
| Fly.io | Yes | Pay-as-you-go |
| VPS | - | $5-20/month |

**Recommendation**: Start with Vercel free tier

---

## Domain Setup

### For any platform:

1. **Register domain**
   - Namecheap.com
   - GoDaddy.com
   - Google Domains

2. **Update DNS**
   - Point to your deployment platform
   - Instructions provided by hosting

3. **Enable HTTPS**
   - Automatic on Vercel/Netlify
   - Use Let's Encrypt for VPS

---

## Troubleshooting Deployment

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Slow Performance
- [ ] Check image sizes
- [ ] Enable caching headers
- [ ] Use CDN
- [ ] Optimize database queries

### Environment Variables Not Working
- [ ] Check `.env.local` (development)
- [ ] Add to platform settings (production)
- [ ] Use `NEXT_PUBLIC_` prefix for client-side
- [ ] Restart deployment after changing

### ISR Not Regenerating
- [ ] Check revalidate time in getStaticProps
- [ ] Verify server time is correct
- [ ] Check server logs
- [ ] Use on-demand regeneration API

---

## Next Steps After Deployment

1. **Set up monitoring**
   - Monitor uptime
   - Track errors
   - Monitor performance

2. **Add analytics**
   - Track user behavior
   - Monitor traffic
   - Analyze conversions

3. **Backup plan**
   - Regular database backups
   - Code in version control
   - Environment variables documented

4. **Maintenance**
   - Update dependencies monthly
   - Monitor security advisories
   - Keep Node.js updated
   - Review logs weekly

---

## Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Netlify Docs**: https://docs.netlify.com
- **Docker Docs**: https://docs.docker.com
- **Nginx Docs**: https://nginx.org/en/docs/

---

**Your app is production-ready!** Choose a deployment option above and go live. 🎉

Recommended: **Vercel** (easiest setup, best performance)
