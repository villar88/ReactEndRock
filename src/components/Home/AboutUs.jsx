import img1 from './../../assets/images/150-6.jpg';
import img2 from './../../assets/images/150-7.jpg';
import img3 from './../../assets/images/150-8.jpg';

const AboutUs = () => {
    return ( 
        <div className="bg-white">
            <div className="py-10 py-lg-20">
				<div className="text-center mb-12">
                    <h2 className="mt-6 mb-2 text-5xl font-bold font-heading text-center">About Us</h2>
					<div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet lorem sodales, venenatis sem eget, scelerisque sem. Fusce ultrices bibendum lacus, vitae posuere lectus elementum in. Ut in ligula sollicitudin, laoreet lectus id, posuere magna. In lacinia elementum massa non ultricies. Nulla magna augue, scelerisque eu mauris in, ornare dignissim massa. Aliquam blandit nisl ut nisl ultricies porttitor. Quisque nec auctor nunc. Vivamus massa leo, tincidunt quis euismod facilisis, pulvinar at orci. Suspendisse ac orci quis turpis sollicitudin pretium et molestie tortor. Ut porta iaculis vehicula. Mauris sit amet convallis lorem, non ultrices velit. Ut mollis nunc non magna volutpat, nec rhoncus eros posuere. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

                        <div className='md:inline-flex mt-6 mb-2'>
                            <div className="text-center px-8">
                                <div className="mb-5 mx-auto octagon" style={{ backgroundImage: `url(${img1})` , height: "150px",  width: "150px" , backgroundRepeat: "no-repeat"}}></div>
                                <div className="mb-0">
                                    <span className="text-dark fw-bolder text-hover-primary fs-3 text-2xl">Ricky Hunt</span>
                                    <div className="text-muted fs-6 fw-bold mt-1">Marketing Manager</div>
                                </div>				
                            </div>

                            <div className="text-center px-8">
                                <div className="mb-5 mx-auto octagon" style={{ backgroundImage: `url(${img2})` , height: "150px",  width: "150px" , backgroundRepeat: "no-repeat"}}></div>
                                <div className="mb-0">
                                    <span className="text-dark fw-bolder text-hover-primary fs-3 text-2xl">Alice Wayde</span>
                                    <div className="text-muted fs-6 fw-bold mt-1">Project Manager</div>
                                </div>				
                            </div>

                            <div className="text-center px-8">
                                <div className="mb-5 mx-auto octagon" style={{ backgroundImage: `url(${img3})` , height: "150px",  width: "150px" , backgroundRepeat: "no-repeat"}}></div>
                                <div className="mb-0">
                                    <span className="text-dark fw-bolder text-hover-primary fs-3 text-2xl">Paul Miles</span>
                                    <div className="text-muted fs-6 fw-bold mt-1">QA Managers</div>
                                </div>				
                            </div>
                        </div>
                    </div>
				</div>
			</div>
		</div>
    );
  }
  
  export default AboutUs;
