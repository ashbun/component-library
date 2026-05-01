# Deployment Checklist

## Pre-Deployment

- [ ] All tests passing locally
- [ ] No TypeScript errors: `npm run type-check`
- [ ] No lint errors: `npm run lint`
- [ ] Storybook builds: `npm run build:storybook`
- [ ] All packages build: `npm run build`
- [ ] Documentation updated
- [ ] CHANGELOG.md updated with new version
- [ ] package.json version bumped

## Vercel Deployment

### Initial Setup (One-time)
- [ ] Create Vercel account at vercel.com
- [ ] Connect GitHub account
- [ ] Create new project (or use Vercel CLI)
- [ ] Configure build settings:
  - Build Command: `npm run build:storybook`
  - Output Directory: `packages/ui-library/storybook-static`

### Each Deployment
- [ ] Push to `main` branch
- [ ] Wait for automatic deployment
- [ ] Verify Storybook is live at your-project.vercel.app
- [ ] Test component links and navigation
- [ ] Check mobile responsiveness

## NPM Package Publishing

### Initial Setup (One-time)
- [ ] Create npm account at npmjs.com
- [ ] Set up GitHub token (if using GitHub Packages)
- [ ] Run `npm login` (for npm registry)
- [ ] Configure publishConfig in package.json

### Each Release
- [ ] Update package.json versions
- [ ] Create git tag: `git tag v1.0.0`
- [ ] Push tag: `git push origin v1.0.0`
- [ ] Wait for GitHub Actions to publish
- [ ] OR manually: `npm publish -w packages/design-tokens && npm publish -w packages/ui-library`
- [ ] Verify packages on npmjs.com
- [ ] Check install works: `npm install @cc-ecommerce/ui-library`

## Post-Deployment

- [ ] Test Storybook components live
- [ ] Verify npm package installation
- [ ] Update README with live URLs
- [ ] Share Storybook link with team
- [ ] Announce deployment in team chat
- [ ] Monitor for any issues

## Rollback Plan

If something goes wrong:

**Storybook:**
- Vercel auto-keeps last 10 deployments
- Roll back via Vercel dashboard

**NPM Package:**
- Can't delete published versions
- Publish a new patch version with fixes
- Mark broken version as deprecated: `npm deprecate @cc-ecommerce/ui-library@1.0.0`

---

**Ready to deploy?** Start with Step 1 of DEPLOYMENT_GUIDE.md
