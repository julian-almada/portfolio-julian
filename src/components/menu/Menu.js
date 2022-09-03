import React from 'react'
import './Menu.css'

const Menu = () => {
  return (
    <header>
        <div class="container-header">
            <div class="logo">
                    <img src='media/a.png' id='a'></img>
                <span className='title'>lmada</span>
                    <img src='media/j.png' id='j'></img>
                <span className='title'>ulian</span>

            </div>

            <div class="menu">
                <ul className='menu'>
                    <i className='item'>
                      <a className='item-link'>
                        <span className='icon'><ion-icon name="home-outline"></ion-icon></span>
                        <span className='title'>Home</span>
                      </a>
                    </i>

                    <i className='item'>
                      <a className='item-link'>
                        <span className='icon'><ion-icon name="person-outline"></ion-icon></span>
                        <span className='title'>About</span>
                      </a>
                    </i>

                    <i className='item'>
                      <a className='item-link'>
                        <span><ion-icon name="code-slash-outline"></ion-icon></span>
                        <span className='title'>Proyects</span>
                      </a>
                    </i>

                    <i className='item'>
                      <a className='item-link'>
                        <span className='icon'><a className='item-link'><ion-icon name="information-circle-outline">
                        </ion-icon></a></span>
                        <span className='title'>Info</span>
                      </a>
                    </i>

                    <i className='item'>
                      <a className='item-link'>
                        <span><ion-icon name="chatbox-outline">
                        </ion-icon></span>
                        <span className='title'>Contact</span>
                      </a>
                    </i>
                    
                    <i className='item'>
                      <a className='item-link'>
                        <span><ion-icon name="settings-outline">
                        </ion-icon></span>
                        <span className='title'>Settings</span>
                      </a>
                    </i>

                    

                    
                  </ul>
            </div>

            <div class="header-boton">
                <input type="button" class="btn-header" id="btn" value="settings" />
            </div>
        </div>
    </header>
  )
}

export default Menu