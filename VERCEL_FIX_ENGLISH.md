# 🔧 Fix 404 Error in hmcar-client-app - Step by Step

## ⚠️ Problem
Website https://hmcar-client-app.vercel.app shows 404 NOT_FOUND error

## ✅ Root Cause
Environment Variables are NOT added in Vercel Dashboard

---

## 📋 Required Steps (Must be done manually)

### Step 1️⃣: Access Vercel Dashboard

1. Open browser and go to: https://vercel.com/dashboard
2. Login with your account
3. You'll see a list of all your projects

### Step 2️⃣: Select the Correct Project

1. Find the project named: **hmcar-client-app**
2. Click on it to open

### Step 3️⃣: Navigate to Environment Variables Settings

1. In the project page, click on **Settings** tab
2. From the sidebar, click on **Environment Variables**

### Step 4️⃣: Add Environment Variables

Now you'll add 5 variables. For each variable:

#### Variable #1:
- **Name**: `NEXT_PUBLIC_API_URL`
- **Value**: `https://hmcar-system.vercel.app/api/v2`
- **Environment**: ✅ Production, ✅ Preview, ✅ Development (select all three)
- Click **Save**

#### Variable #2:
- **Name**: `NEXT_PUBLIC_TENANT`
- **Value**: `hmcar`
- **Environment**: ✅ Production, ✅ Preview, ✅ Development
- Click **Save**

#### Variable #3:
- **Name**: `NEXT_PUBLIC_APP_NAME`
- **Value**: `HM CAR`
- **Environment**: ✅ Production, ✅ Preview, ✅ Development
- Click **Save**

#### Variable #4:
- **Name**: `NEXT_PUBLIC_WHATSAPP`
- **Value**: `+967781007805`
- **Environment**: ✅ Production, ✅ Preview, ✅ Development
- Click **Save**

#### Variable #5:
- **Name**: `NODE_ENV`
- **Value**: `production`
- **Environment**: ✅ Production ONLY (select Production only)
- Click **Save**

### Step 5️⃣: Redeploy

After adding all variables:

1. Go to **Deployments** tab
2. You'll see a list of all deployments
3. Select the latest deployment (first in the list)
4. Click on the three dots **(...)**
5. Select **Redeploy**
6. In the popup, click **Redeploy** again to confirm

### Step 6️⃣: Wait and Verify

1. Wait 2-3 minutes for the build to complete
2. Status will show "Ready" when finished
3. Open the link: https://hmcar-client-app.vercel.app
4. The website should now work correctly! ✅

---

## 🎯 Important Notes

### Why wasn't `.env.production` file enough?
- `.env.production` file exists in code but it's for local development only
- Vercel needs Environment Variables in Dashboard to be available during build time
- This is a security measure by Vercel

### How to verify the fix worked?
1. Open https://hmcar-client-app.vercel.app
2. You should see the website homepage
3. All features should work (browse cars, login, etc.)

### What if the error persists?
1. Make sure all 5 variables are added correctly
2. Make sure there are no extra spaces in values
3. Make sure correct environments are selected for each variable
4. Try Redeploy again

---

## 📊 Summary of Required Variables

| Name | Value | Environment |
|------|-------|-------------|
| NEXT_PUBLIC_API_URL | https://hmcar-system.vercel.app/api/v2 | Production, Preview, Development |
| NEXT_PUBLIC_TENANT | hmcar | Production, Preview, Development |
| NEXT_PUBLIC_APP_NAME | HM CAR | Production, Preview, Development |
| NEXT_PUBLIC_WHATSAPP | +967781007805 | Production, Preview, Development |
| NODE_ENV | production | Production only |

---

## ✅ After Fix

When the website works successfully:
- ✅ Website opens at https://hmcar-client-app.vercel.app
- ✅ Connects to API at https://hmcar-system.vercel.app/api/v2
- ✅ Displays data for tenant "hmcar"
- ✅ All features work correctly

---

**Created**: April 1, 2026
**Repository**: https://github.com/majedalhashdi7-ux/hmcar-client-app
**Website**: https://hmcar-client-app.vercel.app
