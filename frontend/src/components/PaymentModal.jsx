import { assets } from '../assets/assets'

const PaymentModal = ({ isOpen, onClose, onPaymentSelect, appointment }) => {

  if (!isOpen) return null

  const handlePayment = (method) => {
    onPaymentSelect(method, appointment._id)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Choose Payment Method</h3>
          <p className="text-gray-600 mb-6">Select your preferred payment option</p>
          
          <div className="space-y-4">
            {/* Stripe Payment */}
            <button
              onClick={() => handlePayment('stripe')}
              className="w-full p-4 border-2 border-gray-200 rounded-xl hover:border-primary hover:bg-blue-50 transition-all duration-300 flex items-center justify-center space-x-3"
            >
              <img src={assets.stripe_logo} alt="Stripe" className="h-8" />
              <span className="font-medium text-gray-700">Pay with Stripe</span>
            </button>

            {/* Razorpay Payment */}
            <button
              onClick={() => handlePayment('razorpay')}
              className="w-full p-4 border-2 border-gray-200 rounded-xl hover:border-primary hover:bg-blue-50 transition-all duration-300 flex items-center justify-center space-x-3"
            >
              <img src={assets.razorpay_logo} alt="Razorpay" className="h-8" />
              <span className="font-medium text-gray-700">Pay with Razorpay</span>
            </button>
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-xl">
            <p className="text-sm text-gray-600">
              <span className="font-medium">Amount: </span>
              ₹{appointment?.amount || 0}
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Secure payment processing with industry-standard encryption
            </p>
          </div>

          <button
            onClick={onClose}
            className="mt-6 w-full py-2 text-gray-600 hover:text-gray-800 transition-colors duration-300"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default PaymentModal
