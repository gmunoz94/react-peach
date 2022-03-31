import React from 'react'
import navLogo from '../assets/img/navbar-logo.png';
import item1 from '../assets/img/portfolio/1.png'
import item2 from '../assets/img/portfolio/2.png'
import item3 from '../assets/img/portfolio/3.png'
import item4 from '../assets/img/portfolio/4.png'
import item5 from '../assets/img/portfolio/5.png'
import item6 from '../assets/img/portfolio/6.jpg'
import item7 from '../assets/img/portfolio/7.png'
import item8 from '../assets/img/portfolio/8.png'


function Main() {
  return (
    <>
        {/* <!-- Masthead--> */}
        <header class="masthead">
            <div class="container">
                <img src={navLogo} />
                <div class="masthead-heading">Personalization made personal again!</div>
                <div class="masthead-subheading text-uppercase">Once your Order Request is submitted we will get to work to give you a personalized gift that isn't straight from a template.</div>
                <a class="btn btn-primary btn-xl text-uppercase" href="#contact">Order Now</a>
            </div>
        </header>
        {/* <!-- Services--> */}
        <section class="page-section" id="services">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">The Process</h2>
                </div>
                <div class="row text-center">
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-edit fa-stack-1x"></i>
                        </span>
                        <h4 class="my-3">Step 1: Submit Order Request</h4>
                        <p class="text-muted">Let us know what and how many you would like to order & let us know how we can make it personal.</p>
                    </div>
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-credit-card fa-stack-1x"></i>
                        </span>
                        <h4 class="my-3">Step 2: Confirm Design & Pay</h4>
                        <p class="text-muted">Confirm quantities and design with our artist & finalize your order.</p>
                    </div>
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-box-open fa-stack-1x"></i>
                        </span>
                        <h4 class="my-3">Step 3: Wait for Package!</h4>
                        <p class="text-muted">Sit, stay, and await your package.</p>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Portfolio Grid--> */}
        <section class="page-section bg-light" id="portfolio">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Products</h2>
                    <h3 class="section-subheading text-muted">All items below are available to be customized with whatever design you desire.</h3>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-3 col-sm-6 mb-4">
                        {/* <!-- Portfolio item 1--> */}
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src={item1} alt="..." />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">12 oz. Mug</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 mb-4">
                        {/* <!-- Portfolio item 2--> */}
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src={item2} alt="..." />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">T-Shirt</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 mb-4">
                        {/* <!-- Portfolio item 3--> */}
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src={item3} alt="..." />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Keychain</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                        {/* <!-- Portfolio item 4--> */}
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal4">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src={item4} alt="..." />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">20 oz. Tumbler</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 mb-4 mb-sm-0">
                        {/* <!-- Portfolio item 5--> */}
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal5">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src={item5} alt="..." />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Mousepad</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        {/* <!-- Portfolio item 6--> */}
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal6">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src={item6} alt="..." />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Logo Design</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        {/* <!-- Portfolio item 7--> */}
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal7">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src={item7} alt="..." />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Car Coaster (2-pack)</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        {/* <!-- Portfolio item 7--> */}
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal8">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src={item8} alt="..." />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Coaster (4-pack)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Contact--> */}
        <section class="page-section" id="contact">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Order Request</h2>
                    <h3 class="section-subheading text-muted">After we have received your order request you can expect a phone call or email to discuss the details and confirm design; especially if were adding a photo of your fur baby or a loved one.</h3>
                </div>
                {/* <!-- * * * * * * * * * * * * * * *-->
                <!-- * * SB Forms Contact Form * *-->
                <!-- * * * * * * * * * * * * * * *-->
                <!-- This form is pre-integrated with SB Forms.-->
                <!-- To make this form functional, sign up at-->
                <!-- https://startbootstrap.com/solution/contact-forms-->
                <!-- to get an API token!--> */}
                <form id="contactForm" data-sb-form-api-token="4da146ef-76da-4ba4-b372-9e30e9b95134">
                    <div class="row align-items-stretch mb-5">
                        <div class="col-md-4">
                            <div class="form-group">
                                {/* <!-- Name input--> */}
                                <input class="form-control" id="name" type="text" placeholder="Your Name *" data-sb-validations="required" />
                                <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                            </div>
                            <div class="form-group">
                                {/* <!-- Email address input--> */}
                                <input class="form-control" id="email" type="email" placeholder="Your Email *" data-sb-validations="required,email" />
                                <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                            </div>
                            <div class="form-group mb-md-0">
                                {/* <!-- Phone number input--> */}
                                <input class="form-control" id="phone" type="tel" placeholder="Your Phone *" data-sb-validations="required" />
                                <div class="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group p-1 row">
                                {/* <!-- Phone number input--> */}
                                <div class="form-check col-6">
                                    <input class="form-check-input" id="mug" type="checkbox" name="productSelection" data-sb-validations="" />
                                    <label class="form-check-label px-1 py-2" for="mug">12 oz. Mug</label>
                                </div>
                                <div class="form-check col-6">
                                    <input class="form-check-input" id="t-shirt1" type="checkbox" name="productSelection" data-sb-validations="" />
                                    <label class="form-check-label px-1 py-2" for="t-shirt1">T-Shirt</label>
                                </div>
                                <div class="form-check col-6">
                                    <input class="form-check-input" id="t-shirt2" type="checkbox" name="productSelection" data-sb-validations="" />
                                    <label class="form-check-label px-1 py-2" for="t-shirt2">Keychain</label>
                                </div>
                                <div class="form-check col-6">
                                    <input class="form-check-input" id="tumbler" type="checkbox" name="productSelection" data-sb-validations="" />
                                    <label class="form-check-label px-1 py-2" for="tumbler">20 oz. Tumbler</label>
                                </div>
                                <div class="form-check col-6">
                                    <input class="form-check-input" id="mousepad" type="checkbox" name="productSelection" data-sb-validations="" />
                                    <label class="form-check-label px-1 py-2" for="mousepad">Mousepad</label>
                                </div>
                                <div class="form-check col-6">
                                    <input class="form-check-input" id="logoDesign" type="checkbox" name="productSelection" data-sb-validations="" />
                                    <label class="form-check-label px-1 py-2" for="logoDesign">Logo Design</label>
                                </div>
                                <div class="form-check col-6">
                                    <input class="form-check-input" id="carCoaster" type="checkbox" name="productSelection" data-sb-validations="" />
                                    <label class="form-check-label px-1 py-2" for="carCoaster">Car Coaster</label>
                                </div>
                                <div class="form-check col-6">
                                    <input class="form-check-input" id="coaster4" type="checkbox" name="productSelection" data-sb-validations="" />
                                    <label class="form-check-label px-1 py-2" for="coaster4">Coaster</label>
                                </div>
                        </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group form-group-textarea mb-md-0">
                                {/* <!-- Message input--> */}
                                <textarea class="form-control" id="message" placeholder="Your Message *" data-sb-validations="required"></textarea>
                                <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Submit success message-->
                    <!---->
                    <!-- This is what your users will see when the form-->
                    <!-- has successfully submitted--> */}
                    <div class="d-none" id="submitSuccessMessage">
                        <div class="text-center text-white mb-3">
                            <div class="fw-bolder">Form submission successful!</div>
                        </div>
                    </div>
                    {/* <!-- Submit error message-->
                    <!---->
                    <!-- This is what your users will see when there is-->
                    <!-- an error submitting the form--> */}
                    <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                    {/* <!-- Submit Button--> */}
                    <div class="text-center"><button class="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit">Send Message</button></div>
                </form>
            </div>
        </section>    
    </>
  )
}

export default Main