import React from 'react'
import './Home.css'



const Home = () => {
  return (
    <main>

        <div class="cover">
            <div class="text-information-cover">
                <span>Hi!</span>
                <h1>Welcome to my Web Site.</h1>

                <h2>Web Desing | Full Stack Developper | Content Creator</h2>
                <p>I design and code beautifully simple things, and I love what I do.</p>

                <div class="buttons-cover">
                    <input type="button" class="btn-register-cover" id="btn" value="registrarse" />
                    <input type="button" class="btn-readMore-cover" id="btn" value="leer mas" />
                </div>
            </div>

            <div class="media-cover">
                <video src="media/media_animacion_cover.webm" autoplay playinline loop preload="auto" muted />
            </div>

        </div>

        <div class="container-banner">

            <div class="banner">
                <div class="banner-icon-heart">
                    <img src="media/heart_notify.png" id='heart' alt="" />
                </div>
                <div class="banner-icon-fire">
                    <img src="media/fire-dynamic-color.png" id='fire' alt="" />
                </div>
                <div class="banner-text">
                    <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro sit assumenda esse tenetur ipsa exercitationem iste maxime architecto eum eligendi quam officia quo ex repudiandae accusantium veniam, cupiditate provident facere?</h2>
                    <a href="#">Leer mas</a>
                </div>
            </div>

        </div>

    </main>
  )
}

export default Home