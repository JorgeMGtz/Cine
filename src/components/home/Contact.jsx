import React from 'react'


const Contact = () => {
  return (
    <div className='contactContainer'>
      <div className="row">
        <div className="col-md-7">
          <form>
          <div className="mb-3">
              <label for="exampleInputEmail1" class="form-label">Name</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" class="form-label">Contac Number</label>
              <input type="phone-number" class="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3">
              <laberl for='exampletextarea' class='form-label'>Send your coments</laberl>
              <textarea className='form-control' id='exampleFormControlTextarea' rows='3'></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
        <div className="col-md-5">
          <h4>Contact us</h4>
          <div className="mt-5">
            <div className="d-flex">
                <i className="bi bi-geo-alt"></i>
                <p> Avenida Siempreviva 742</p>
            </div>
            <div className="d-flex">
                <i className="bi bi-telephone"></i>
                <p> 1234567</p>
            </div>
            <div className="d-flex">
                <i className="bi bi-whatsapp"></i>
                <p>+5513246598 </p>
            </div>
            <div className="d-flex">
                <i class="bi bi-envelope"></i>               
                <p>Cine@Cine.com </p>
            </div>
            <div className="d-flex">
                <i class="bi bi-globe"></i> 
                <p> www.CineBmore.com.mx </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact