import React from 'react'
import navLogo from '../assets/img/navbar-logo.png';
import Products from './Products';
import OrderForm from './OrderForm';


function Main() {
  return (
    <>
        {/* <!-- Masthead--> */}
        <header className="masthead">
            <div className="container">
                <img src={navLogo} />
                <div className="masthead-heading">Personalization made personal again!</div>
                <div className="masthead-subheading text-uppercase">Once your Order Request is submitted we will get to work to give you a personalized gift that isn't straight from a template.</div>
                <a className="btn btn-primary btn-xl text-uppercase" href="#contact">Order Now</a>
            </div>
        </header>
        {/* <!-- Services--> */}
        <section className="page-section" id="services">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">The Process</h2>
                </div>
                <div className="row text-center">
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-edit fa-stack-1x"></i>
                        </span>
                        <h4 className="my-3">Step 1: Submit Order Request</h4>
                        <p className="text-muted">Let us know what and how many you would like to order & let us know how we can make it personal.</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-credit-card fa-stack-1x"></i>
                        </span>
                        <h4 className="my-3">Step 2: Confirm Design & Pay</h4>
                        <p className="text-muted">Confirm quantities and design with our artist & finalize your order.</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-box-open fa-stack-1x"></i>
                        </span>
                        <h4 className="my-3">Step 3: Wait for Package!</h4>
                        <p className="text-muted">Sit, stay, and await your package.</p>
                    </div>
                </div>
            </div>
        </section>
        <Products />
        <OrderForm />
    </>
  )
}

export default Main