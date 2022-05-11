import banner from './../../assets/images/banner.jpg';
import { Link } from "react-router-dom";

const Banner = () => {
    return ( 
        <section className="relative overflow-x-hidden" style={{ backgroundColor: 'beige' }}>
            <div className="mx-auto">
                <div className="md:inline-flex block items-center">
                    <div className="w-full md:w-1/2 lg:w-2/5 md:h-128 md:pr-8 mb-20 md:mb-0 md:ml-3">
                        <div className="md:pt-20 max-w-md md:p-2 p-4">
                            <span className="mb-4 text-2xl">browse our selection and buy like new</span>
                            <h2 className="mt-6 mb-16 lg:mb-32 text-5xl font-bold font-heading">Click here to shop more product.</h2>
                            <Link className="inline-block bg-orange-300 hover:bg-orange-400 text-white font-bold font-heading py-6 px-8 rounded-md uppercase transition duration-200" to="/products">More</Link>
                        </div>
                    </div>
                    <div className="md:w-max md:h-37 md:ml-11">
                        <img className="h-full w-full md:w-auto max-w-none object-cover" src={banner} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
  }
  
  export default Banner;