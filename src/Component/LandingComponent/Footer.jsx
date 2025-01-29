import React from 'react'

const Footer = () => {
  return (
    <>
    
      <div id="footer" className="lg:w-10/12 md:w-10/12 w-full m-auto lg:mt-48 mt-24">
        
        <div class="text-center text-lg">Contact <span class="tracking-wider bg-gradient-to-br from-blue-700 from-10% to-purple-700 to-100%0% w-56 text-transparent bg-clip-text">Us</span></div>

        <div class="flex text-lg justify-between  font-sans tracking-widest pt-7 lg:w-535 w-full m-auto">



          <div class="flex flex-col justify-center items-center lg:scale-100 scale-75">
            <div class="bg-[url('./src/assets/Landing/images/socials-bg.png')] bg-center bg-no-repeat w-24 h-20 flex justify-center items-center"><img src="./src/assets/Landing/images/github.png" alt=""/></div>
            <p class="relative top-1">Github</p>
          </div>
          <div class="flex flex-col justify-center items-center lg:scale-100 scale-75">
            <div class="bg-[url('./src/assets/Landing/images/socials-bg.png')] bg-center bg-no-repeat w-24 h-20 flex justify-center items-center"><img src="./src/assets/Landing/images/Instagram.png" alt=""/></div>
            <p class="relative top-1">Instagram</p>
          </div>
          <div class="flex flex-col justify-center items-center lg:scale-100 scale-75">
            <div class="bg-[url('./src/assets/Landing/images/socials-bg.png')] bg-center bg-no-repeat w-24 h-20 flex justify-center items-center"><img src="./src/assets/Landing/images/email.png" alt=""/></div>
            <p class="relative top-1">Email</p>
          </div>
          <div class="flex flex-col justify-center items-center lg:scale-100 scale-75">
            <div class="bg-[url('./src/assets/Landing/images/socials-bg.png')] bg-center bg-no-repeat w-24 h-20 flex justify-center items-center"><img src="./src/assets/Landing/images/telp.png" alt=""/></div>
            <p class="relative top-1">Telp</p>
          </div>


        </div>

      </div>
      <div id="footer-bottom" class="mt-20 lg:text-sm text-2xs lg:tracking-wider">
        <hr/>
        <div class="p-10 text-center">Powered By Sampad IT & Computer Association(SITCA)</div>
      </div>
    
    </>
  )
}

export default Footer