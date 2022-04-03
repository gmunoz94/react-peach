import React from 'react'

function Foot() {
  return (
    <>
        <footer className="footer py-4 bg-light">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-3 text-lg-start">&copy; 2022 Perfect Peach Designs LLC</div>
                    <div className="col-lg-3 my-3 my-lg-0">
                        <a className="btn btn-dark btn-social mx-2" target="_blank" rel="noreferrer" href="https://www.instagram.com/perfectpeachdesigns/"><i className="fab fa-instagram"></i></a>
                        <a className="btn btn-dark btn-social mx-2" target="_blank" rel="noreferrer" href="https://www.facebook.com/PerfectPeachDesigns"><i className="fab fa-facebook-f"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Foot