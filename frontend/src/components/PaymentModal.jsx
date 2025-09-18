import { assets } from '../assets/assets'

const PaymentModal = ({ isOpen, onClose, onPaymentSelect, appointment }) => {

  if (!isOpen) return null

  const handlePayment = (method) => {
    onPaymentSelect(method, appointment._id)
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full mx-4 relative overflow-hidden animate-scale-in">
        {/* Header Gradient */}
        <div className="h-2 bg-gradient-to-r from-primary via-purple-600 to-blue-600"></div>
        
        <div className="p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Choose Payment Method</h3>
            <p className="text-gray-600">Select your preferred payment option for secure checkout</p>
          </div>
          
          <div className="space-y-4 mb-8">
            {/* Stripe Payment */}
            <button
              onClick={() => handlePayment('stripe')}
              className="w-full p-5 border-2 border-gray-200 rounded-2xl hover:border-primary hover:bg-gradient-to-r hover:from-primary/5 hover:to-purple-500/5 transition-all duration-300 flex items-center justify-between group relative overflow-hidden"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <img src={assets.stripe_logo} alt="Stripe" className="h-6" />
                </div>
                <div className="text-left">
                  <span className="font-semibold text-gray-800 block">Pay with Stripe</span>
                  <span className="text-sm text-gray-500">Credit/Debit Cards</span>
                </div>
              </div>
              <div className="w-6 h-6 border-2 border-gray-300 rounded-full group-hover:border-primary transition-colors duration-300 flex items-center justify-center">
                <div className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </button>

            {/* Razorpay Payment */}
            <button
              onClick={() => handlePayment('razorpay')}
              className="w-full p-5 border-2 border-gray-200 rounded-2xl hover:border-primary hover:bg-gradient-to-r hover:from-primary/5 hover:to-purple-500/5 transition-all duration-300 flex items-center justify-between group relative overflow-hidden"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                  <img src={assets.razorpay_logo} alt="Razorpay" className="h-6" />
                </div>
                <div className="text-left">
                  <span className="font-semibold text-gray-800 block">Pay with Razorpay</span>
                  <span className="text-sm text-gray-500">UPI, Cards, Wallets</span>
                </div>
              </div>
              <div className="w-6 h-6 border-2 border-gray-300 rounded-full group-hover:border-primary transition-colors duration-300 flex items-center justify-center">
                <div className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </button>
          </div>

          {/* Payment Summary */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600 font-medium">Consultation Fee:</span>
              <span className="text-2xl font-bold text-gray-800">₹{appointment?.amount || 0}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Secure payment with 256-bit SSL encryption</span>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-full py-3 text-gray-600 hover:text-gray-800 transition-colors duration-300 font-medium border border-gray-200 rounded-2xl hover:bg-gray-50"
          >
            Cancel Payment
          </button>
        </div>
        
        {/* Close Icon */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
        >
          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default PaymentModal