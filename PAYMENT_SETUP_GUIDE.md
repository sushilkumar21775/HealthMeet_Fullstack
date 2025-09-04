# Real Payment Setup Guide

## 🚨 Demo Payment Removed - Real Payment Only

I've removed the demo payment option as requested. Now you have only **real payment gateways** (Stripe and Razorpay).

## 🔧 Setup Instructions

### 1. **Stripe Setup** 
1. Go to [https://stripe.com](https://stripe.com)
2. Create an account or log in
3. Go to Dashboard → Developers → API Keys
4. Copy your **Secret Key** (starts with `sk_test_` for testing or `sk_live_` for production)
5. Update your `.env` file:
   ```env
   STRIPE_SECRET_KEY="sk_test_your_actual_stripe_secret_key_here"
   ```

### 2. **Razorpay Setup**
1. Go to [https://razorpay.com](https://razorpay.com)
2. Create an account or log in
3. Go to Dashboard → Settings → API Keys
4. Generate new API Keys if needed
5. Copy your **Key ID** and **Key Secret**
6. Update your `.env` file:
   ```env
   RAZORPAY_KEY_ID="rzp_test_your_actual_key_id_here"
   RAZORPAY_KEY_SECRET="your_actual_key_secret_here"
   ```

### 3. **Current .env File Status**
Your current `.env` file has placeholder values:
```env
RAZORPAY_KEY_ID = "------ Razorpay Key Id here ------"
RAZORPAY_KEY_SECRET = "------ Razorpay Key Secret here ------"
STRIPE_SECRET_KEY="------ Stripe Secret Key here ------"
```

**⚠️ Replace these with your actual API keys to enable real payments!**

### 4. **Testing vs Production**
- **Test Mode**: Use test API keys (safe, no real money)
- **Production Mode**: Use live API keys (real money transactions)

### 5. **Restart Server**
After updating `.env` file:
```bash
cd backend
npm run server
```

## ✅ What Works Now
- ✅ Clean payment modal with only Stripe and Razorpay options
- ✅ Professional payment interface
- ✅ Real payment processing (once you add API keys)
- ✅ No demo/fake payment options

## 🚀 How to Test
1. Add your test API keys to `.env`
2. Restart backend server
3. Book an appointment
4. Click "Pay Online"
5. Choose Stripe or Razorpay
6. Complete payment with test card details

## 💳 Test Card Details

### Stripe Test Cards:
- **Visa**: `4242424242424242`
- **Expiry**: Any future date
- **CVC**: Any 3 digits

### Razorpay Test Cards:
- **Visa**: `4111111111111111`
- **Expiry**: Any future date  
- **CVC**: Any 3 digits

---
**Note**: Only real payment gateways are available now. Demo payment has been completely removed as requested.
