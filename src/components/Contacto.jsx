import React from "react";

function Contacto(){
    return(
        <section id="contacto" class="py-5 bg-dark text-light" style={{ minHeight: 'calc(100vh - 120px)' }}>
        <div class="container">
          <h2 class="section-title mb-5">Contáctame</h2>
          <div class="row">
            <div class="col-md-6">
                <form action="https://formspree.io/f/xgebrvpy"
                method="POST" data-netlify="true">
                <div class="mb-3">
                  <label for="name" class="form-label">Nombre completo</label>
                  <input type="text" class="form-control" id="name" name="name" required />
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Correo electrónico</label>
                  <input type="email" class="form-control" id="email" name="email" required/>
                </div>
                <div class="mb-3">
                  <label for="message" class="form-label">Mensaje</label>
                  <textarea class="form-control" id="message" rows="5" name="mensaje" required></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Enviar</button>
                
              </form>
            </div>
            <div class="col-md-6">
              <p>¡Contáctame para trabajar juntos en tu próximo proyecto!</p>
              <ul class="list-unstyled">
                <li><i class="fa-solid fa-location-dot"></i><a class="fa-githu a" > Santa Fe, Argentina</a></li>
                <li><i class="fa-solid fa-envelope"></i><a class="fa-githu a" >savarinomarco50@gmail.com</a></li>
                <li><i class="fa-solid fa-phone"></i><a class="fa-githu a" >+54 342-472-2458</a></li>
                <li><i class="fa-brands fa-github"></i><a href="https://github.com/MarcoSavarin0" class="fa-githu a" >GitHub</a></li>
                <li><i class="fa-brands fa-linkedin"></i><a href="https://github.com/MarcoSavarin0" class="fa-githu a" >Linkedin</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="text-center mt-5">
            <a href="https://drive.google.com/file/d/1EUN2BQsdslS7Gvf8WoFcxqMRo8jlFxxC/view?usp=sharing" class="btn btn-secondary btn-lg" >Descargar mi CV</a>
          </div>
      </section>
    )
}

export default Contacto