# Deployment Guide

## 🚀 Quick Start

Your component library is ready to deploy! Follow these steps:

### Step 1: Deploy Storybook to Vercel

**Option A: Using Vercel Dashboard (Easiest)**

1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with GitHub
3. Click "New Project"
4. Import this repository: `CC/component-library`
5. Configure:
   - **Framework Preset:** Next.js (or Other)
   - **Build Command:** `npm run build:storybook`
   - **Output Directory:** `packages/ui-library/storybook-static`
6. Click "Deploy" ✅

**Option B: Using Vercel CLI**

```bash
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
cd /Users/abungla/claude-projects/CC/component-library
vercel --prod
```

**Option C: Using GitHub Actions (Automatic)**

1. Set up secrets in GitHub:
   - `VERCEL_TOKEN` - From vercel.com/account/tokens
   - `VERCEL_ORG_ID` - Your Vercel organization ID
   - `VERCEL_PROJECT_ID` - Your Vercel project ID

2. Push to `main` or `develop` branch
3. GitHub Actions automatically deploys! ✅

### Step 2: Publish NPM Packages

**Option A: npm Registry (Public)**

```bash
# Login to npm
npm login

# Build all packages
npm run build

# Publish both packages
npm publish -w packages/design-tokens
npm publish -w packages/ui-library
```

**Option B: GitHub Packages (Private)**

1. Add to `packages/*/package.json`:
```json
{
  "publishConfig": {
    "registry": "https://npm.pkg.github.com"
  }
}
```

2. Create GitHub token at github.com/settings/tokens
3. Login:
```bash
npm login --scope=@yourorg --registry=https://npm.pkg.github.com
```

4. Publish:
```bash
npm publish -w packages/design-tokens --registry=https://npm.pkg.github.com
npm publish -w packages/ui-library --registry=https://npm.pkg.github.com
```

**Option C: Automatic via GitHub Actions**

1. Add GitHub token secret to Actions
2. Push a git tag: `git tag v1.0.0 && git push origin v1.0.0`
3. GitHub Actions automatically publishes! ✅

## 📋 What Gets Deployed

### Storybook
- **URL:** `your-project.vercel.app`
- **Contains:** Interactive component demos, token documentation
- **Updates:** Auto-deploy on push to main/develop
- **Audience:** Designers, developers, stakeholders

### NPM Packages
- **@cc-ecommerce/design-tokens** - Design tokens package
- **@cc-ecommerce/ui-library** - React components package
- **Updates:** Manual publish or via GitHub Actions
- **Installation:** `npm install @cc-ecommerce/ui-library`

## 🔧 Environment Variables (GitHub Actions)

For automatic Vercel deployment, add these to GitHub Secrets:

```
VERCEL_TOKEN        # From https://vercel.com/account/tokens
VERCEL_ORG_ID       # Organization ID (if team account)
VERCEL_PROJECT_ID   # Project ID (from Vercel dashboard)
NPM_TOKEN           # From https://npmjs.com/settings/~/tokens (optional)
```

## 📊 Deployment Options Comparison

| Option | Storybook | NPM Packages | Setup Time | Cost |
|--------|-----------|--------------|-----------|------|
| **Vercel Dashboard + Manual npm** | ✅ | ✅ | 5 min | Free |
| **Vercel CLI + Manual npm** | ✅ | ✅ | 5 min | Free |
| **GitHub Actions (Full Auto)** | ✅ | ✅ | 10 min | Free |

## ✅ Deployment Checklist

Before deploying:

- [ ] Run `npm install`
- [ ] Run `npm run lint`
- [ ] Run `npm run type-check`
- [ ] Run `npm run build`
- [ ] Run `npm run build:storybook`
- [ ] Test locally: `npm run dev`
- [ ] All tests passing
- [ ] Update `package.json` version
- [ ] Update `CHANGELOG.md`
- [ ] Create git tag: `git tag v1.0.0`

## 🌐 After Deployment

### Update Documentation
- Add Storybook URL to README
- Add npm installation instructions
- Update integration guides

### Share with Team
- Send Storybook link to designers/stakeholders
- Share npm package instructions
- Update project documentation

### Monitor Deployments
- Check Vercel dashboard for build status
- Monitor npm package downloads (if public)
- Set up notifications for failures

## 🔄 Deployment Workflow

```
Developer Push
    ↓
GitHub Actions (auto)
    ↓
Build & Test
    ↓
✅ Deploy to Vercel → Storybook URL
✅ Publish to npm → npm registry
```

## 📝 Example URLs

After deployment, you'll have:

```
Storybook:  https://yourteam-components.vercel.app
NPM Pkg:    https://www.npmjs.com/package/@cc-ecommerce/ui-library
GitHub:     https://npm.pkg.github.com/@cc-ecommerce/ui-library
```

## 🚨 Troubleshooting

### Vercel Deployment Fails
- Check build command: `npm run build:storybook`
- Verify output directory: `packages/ui-library/storybook-static`
- Check for missing dependencies: `npm install`

### NPM Publishing Fails
- Verify logged in: `npm whoami`
- Check version not already published: `npm view @cc-ecommerce/ui-library`
- Ensure `publishConfig` in package.json (if GitHub Packages)

### GitHub Actions Not Running
- Verify workflows file exists: `.github/workflows/deploy.yml`
- Check secrets are set in GitHub
- Review Actions tab for errors

## 📞 Support

**Vercel Docs:** https://vercel.com/docs
**npm Docs:** https://docs.npmjs.com
**GitHub Actions:** https://docs.github.com/en/actions

---

**You're ready to deploy!** 🚀
