import React from 'react'
import item1 from '../assets/img/portfolio/1.png'
import item2 from '../assets/img/portfolio/2.png'
import item3 from '../assets/img/portfolio/3.png'
import item4 from '../assets/img/portfolio/4.png'
import item5 from '../assets/img/portfolio/5.png'
import item6 from '../assets/img/portfolio/6.jpg'
import item7 from '../assets/img/portfolio/7.png'
import item8 from '../assets/img/portfolio/8.png'

function Products() {
  return (
    <>
        {/* <!-- Portfolio Grid--> */}
        <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Products</h2>
                    <h3 className="section-subheading text-muted">All items below are available to be customized with whatever design you desire.</h3>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-3 col-sm-6 mb-4">
                        {/* <!-- Portfolio item 1--> */}
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={item1} alt="..." />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">12 oz. Mug</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb-4">
                        {/* <!-- Portfolio item 2--> */}
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={item2} alt="..." />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">T-Shirt</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb-4">
                        {/* <!-- Portfolio item 3--> */}
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={item3} alt="..." />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Keychain</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                        {/* <!-- Portfolio item 4--> */}
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal4">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={item4} alt="..." />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">20 oz. Tumbler</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb-4 mb-sm-0">
                        {/* <!-- Portfolio item 5--> */}
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal5">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={item5} alt="..." />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Mousepad</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        {/* <!-- Portfolio item 6--> */}
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal6">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={item6} alt="..." />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Logo Design</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        {/* <!-- Portfolio item 7--> */}
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal7">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={item7} alt="..." />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Car Coaster (2-pack)</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        {/* <!-- Portfolio item 7--> */}
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal8">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={item8} alt="..." />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Coaster (4-pack)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Portfolio Modal 1 */}
        <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="modal-body">
                                    {/* <!-- Project details--> */}
                                    <h2 className="text-uppercase">12 oz Mug</h2>
                                    <p className="item-intro text-muted"></p>
                                    <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/1.png" alt="..." />
                                    <h3>$12</h3>
                                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i className="fas fa-times me-1"></i>
                                        Back to Products
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Products