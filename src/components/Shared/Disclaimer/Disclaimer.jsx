import shopping from '/icons/shopping-cart.png'
import settings from '/icons/settings.png'
import showroom from '/icons/showroom.png'
import calculator from '/icons/calculator.png'
const Disclaimer = () => {
    return (
        <div className="max-w-screen-xl mx-auto mb-20 mt-24 px-4 md:px-10">
            <h1 className="text-3xl font-bold text-center md:text-left">
                Legal disclaimers and annotations:
            </h1>
            <hr className="my-4" />
            <p className="text-justify">
                The prices specified herein are indicative and may not be final.
                The indicated price may differ due to purchase of any additional
                accessories, parts or products, services that may be availed by
                the customer, discounts offered, change in government taxes,
                duties, fees or levies, change of state of registration etc.
                Mercedes- Benz India or the Authorised Franchise Partner shall
                not be responsible or liable to compensate for the difference in
                the prices due to aforesaid reasons or any reason beyond the
                control of Mercedes-Benz India or the Authorised Franchise
                Partner. Actual colour of the vehicle may differ from those
                shown in pictures. While Mercedes-Benz India tries to make sure
                that all information provided herein is accurate, we shall not
                be responsible for typographical and other errors (e.g., data
                transmission) that may appear on the site. If the posted price
                (including finance and lease payments) for a vehicle is
                incorrect, Mercedes-Benz India will endeavor to provide you with
                the correct prices as soon as we become aware of the error. In
                the event a vehicle is priced incorrectly, Mercedes-Benz India
                shall have the right to refuse or cancel any orders placed for
                the vehicle presented with the incorrect price. In addition,
                vehicle prices are subject to change and all vehicles are
                subject to prior sale and may not be available when you are
                ready to purchase.
            </p>

            <div className="grid mt-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="border p-4 pb-10 flex gap-4">
                    <img className='w-6 h-6 mt-2' src={shopping} alt="" />
                    <div>
                        <h1 className='text-xl font-bold'>Online Store</h1>
                        <p>discover Your new Product</p>
                    </div>
                </div>
                <div className="border p-4 pb-10 flex gap-4">
                    <img className='w-6 h-6 mt-2' src={settings} alt="" />
                    <div>
                        <h1 className='text-xl font-bold'>Configurator</h1>
                        <p>Configure your vehicle now.</p>
                    </div>
                </div>
                <div className="border p-4 pb-10 flex gap-4">
                    <img className='w-6 h-6 mt-2' src={showroom} alt="" />
                    <div>
                        <h1 className='text-xl font-bold'>Neares Showroom</h1>
                        <p>Find a brand pertner</p>
                    </div>
                </div>
                <div className="border p-4 pb-10 flex gap-4">
                    <img className='w-6 h-6 mt-2' src={calculator} alt="" />
                    <div>
                        <h1 className='text-xl font-bold'>Finance $ Insurance</h1>
                        <p>Find Your suitable financial product</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Disclaimer;
