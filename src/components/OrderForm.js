import React from 'react'

function OrderForm() {
  return (
      <>
         {/* <!-- Contact--> */}
         <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Order Request</h2>
                    <h3 className="section-subheading text-muted">After we have received your order request you can expect a phone call or email to discuss the details and confirm design; especially if were adding a photo of your fur baby or a loved one.</h3>
                </div>
                {/* <!-- * * * * * * * * * * * * * * *-->
                <!-- * * SB Forms Contact Form * *-->
                <!-- * * * * * * * * * * * * * * *-->
                <!-- This form is pre-integrated with SB Forms.-->
                <!-- To make this form functional, sign up at-->
                <!-- https://startbootstrap.com/solution/contact-forms-->
                <!-- to get an API token!--> */}
                <form id="contactForm" data-sb-form-api-token="4da146ef-76da-4ba4-b372-9e30e9b95134">
                    <div className="row align-items-stretch mb-5">
                        <div className="col-md-4">
                            <div className="form-group">
                                {/* <!-- Name input--> */}
                                <input className="form-control" id="name" type="text" placeholder="Your Name *" data-sb-validations="required" />
                                <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                            </div>
                            <div className="form-group">
                                {/* <!-- Email address input--> */}
                                <input className="form-control" id="email" type="email" placeholder="Your Email *" data-sb-validations="required,email" />
                                <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                            </div>
                            <div className="form-group mb-md-0">
                                {/* <!-- Phone number input--> */}
                                <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" data-sb-validations="required" />
                                <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group p-1 row">
                                {/* <!-- Phone number input--> */}
                                <div className="form-check col-6">
                                    <input className="form-check-input" id="mug" type="checkbox" name="productSelection" data-sb-validations="" />
                                    <label className="form-check-label px-1 py-2" htmlFor="mug">12 oz. Mug</label>
                                </div>
                                <div className="form-check col-6">
                                    <input className="form-check-input" id="t-shirt1" type="checkbox" name="productSelection" data-sb-validations="" />
                                    <label className="form-check-label px-1 py-2" htmlFor="t-shirt1">T-Shirt</label>
                                </div>
                                <div className="form-check col-6">
                                    <input className="form-check-input" id="t-shirt2" type="checkbox" name="productSelection" data-sb-validations="" />
                                    <label className="form-check-label px-1 py-2" htmlFor="t-shirt2">Keychain</label>
                                </div>
                                <div className="form-check col-6">
                                    <input className="form-check-input" id="tumbler" type="checkbox" name="productSelection" data-sb-validations="" />
                                    <label className="form-check-label px-1 py-2" htmlFor="tumbler">20 oz. Tumbler</label>
                                </div>
                                <div className="form-check col-6">
                                    <input className="form-check-input" id="mousepad" type="checkbox" name="productSelection" data-sb-validations="" />
                                    <label className="form-check-label px-1 py-2" htmlFor="mousepad">Mousepad</label>
                                </div>
                                <div className="form-check col-6">
                                    <input className="form-check-input" id="logoDesign" type="checkbox" name="productSelection" data-sb-validations="" />
                                    <label className="form-check-label px-1 py-2" htmlFor="logoDesign">Logo Design</label>
                                </div>
                                <div className="form-check col-6">
                                    <input className="form-check-input" id="carCoaster" type="checkbox" name="productSelection" data-sb-validations="" />
                                    <label className="form-check-label px-1 py-2" htmlFor="carCoaster">Car Coaster</label>
                                </div>
                                <div className="form-check col-6">
                                    <input className="form-check-input" id="coaster4" type="checkbox" name="productSelection" data-sb-validations="" />
                                    <label className="form-check-label px-1 py-2" htmlFor="coaster4">Coaster</label>
                                </div>
                        </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group form-group-textarea mb-md-0">
                                {/* <!-- Message input--> */}
                                <textarea className="form-control" id="message" placeholder="Your Message *" data-sb-validations="required"></textarea>
                                <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Submit success message-->
                    <!---->
                    <!-- This is what your users will see when the form-->
                    <!-- has successfully submitted--> */}
                    <div className="d-none" id="submitSuccessMessage">
                        <div className="text-center text-white mb-3">
                            <div className="fw-bolder">Form submission successful!</div>
                        </div>
                    </div>
                    {/* <!-- Submit error message-->
                    <!---->
                    <!-- This is what your users will see when there is-->
                    <!-- an error submitting the form--> */}
                    <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                    {/* <!-- Submit Button--> */}
                    <div className="text-center"><button className="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit">Send Message</button></div>
                </form>
            </div>
        </section> 
        {/* <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *-->
        <!-- * *                               SB Forms JS                               * *-->
        <!-- * * Activate your form at https://startbootstrap.com/solution/contact-forms * *-->
        <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *--> */}
        <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
      </>
  )
}

export default OrderForm