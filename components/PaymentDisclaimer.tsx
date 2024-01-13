const PaymentDisclaimer = () => (
    <div className="w-full">
        <div>
            <h2 className="flex-center text-2xl lg:text-3xl font-bold py-6">Payment Disclaimer</h2>
            <p className="font-semibold text-base lg:text-lg text-center">
            All payments, including deposits, are <span className="font-bold text-pink-500">final</span> and <span className="font-bold text-pink-500">non-refundable</span>. 
            </p>
            <p className="text-center text-base lg:text-lg mt-2"> Deposits will guarantee your puppy for 30 days only. If your adoption is not finalized 
            within that time frame, you risk losing your deposit. If you choose to secure your puppy with a deposit we require a 50% deposit.</p>
        </div>
        <div className="pt-10">
            <h2 className="text-2xl flex-center font-bold py-6">Payment Methods</h2>
                <p className="font-semibold text-pink-500 text-base lg:text-lg text-center">
                    Please contact us for payment options.
                </p>
            {/* 
                <p className="font-semibold text-base lg:text-lg text-center">
                    We accept all major credit cards and cash.
                </p>
                <p className="text-center text-base lg:text-lg mt-2">
                    Please note that credit cards are only accepted for online transactions.
                </p>
            */}
        </div>    
    </div>
)

export default PaymentDisclaimer
