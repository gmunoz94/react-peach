import React from 'react'

function Foot() {
  return (
    <>
        <footer class="footer py-4 bg-light">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-3 text-lg-start">&copy; 2022 Perfect Peach Designs LLC</div>
                    <div class="col-lg-3 my-3 my-lg-0">
                        <a class="btn btn-dark btn-social mx-2" target="_blank" rel="noreferrer" href="https://www.instagram.com/perfectpeachdesigns/"><i class="fab fa-instagram"></i></a>
                        <a class="btn btn-dark btn-social mx-2" target="_blank" rel="noreferrer" href="https://www.facebook.com/PerfectPeachDesigns"><i class="fab fa-facebook-f"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Foot