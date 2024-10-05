const lodeData = (id = 'samsung', sowall) => {
      fetch(`https://openapi.programming-hero.com/api/phones?search=${id ? id : 12}`)
            .then(res => res.json())
            .then(data => displayAllMobileData(data.data, id, sowall))
            .catch(err => console.error(err))



}

// const sowData = (data) => {

// }

const showDetels = (slug) => {
      console.log(slug);

      fetch(`https://openapi.programming-hero.com/api/phone/${slug}`)
            .then(res => res.json())
            .then(data => displayModal(data.data))
}

lodeData()


// {
//       "status": true,
//       "data": {
//         "mainFeatures": {
//           "storage": "128GB/256GB/1TB storage, no card slot",
//           "displaySize": "6.7 inches, 109.8 cm2 (~87.4% screen-to-body ratio)",
//           "chipSet": "Apple A15 Bionic (5 nm)",
//           "memory": "128GB 6GB RAM, 256GB 6GB RAM, 512GB 6GB RAM, 1TB 6GB RAM",
//           "sensors": [
//             "Face ID",
//             "accelerometer",
//             "gyro",
//             "proximity",
//             "compass",
//             "barometer"
//           ]
//         },
//         "slug": "apple_iphone_13_pro_max-11089",
//         "name": "iPhone 13 Pro Max",
//         "releaseDate": "Released 2021, September 24",
//         "brand": "Apple",
//         "image": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-pro-max.jpg",
//         "others": {
//           "WLAN": "Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, hotspot",
//           "Bluetooth": "5.0, A2DP, LE",
//           "GPS": "Yes, with A-GPS, GLONASS, GALILEO, BDS, QZSS",
//           "NFC": "Yes",
//           "Radio": "No",
//           "USB": "Lightning, USB 2.0"
//         }
//       }
//     }

const displayModal = (data) => {
      console.log(data.name);
      document.getElementById('modalCont').innerHTML = `
       <dialog id="myModal1" class="modal">
            <div class="modal-box">
                  <div class=" flex gap-4 justify-between ">
                         <div>
                        <img class="" src="${data.image}">
                         <h3 class="text-lg font-bold" id="title">${data.name}</h3>
                         <p class=" text-sm border px-4  rounded-full w-fit mt-2">${data.brand}</p>
                       </div>
                    <div class=" w-6/12">
                    <p>- ${data.mainFeatures.storage}</p>
               
                    <p>- ${data.mainFeatures.displaySize}</p>
                    
                    <p>- ${data.mainFeatures.chipSet}</p>
               
                    <p>- ${data.mainFeatures.memory}</p>
                     <div class="border border-gray-200"></div>
                     
                       
                      </div>
                  </div>
                  
                  <div class="modal-action">
                        <form method="dialog">
                              
                              <button class="btn">Close</button>
                        </form>
                  </div>
            </div>
      </dialog>
      `

      myModal1.showModal()


}
const searchInput = document.getElementById('searchInput')

document.getElementById('sowAllBtn').addEventListener('click', () => {

      lodeData(searchInput.value, true)
      document.getElementById('sowAllBtn').classList.add('hidden')


})


searchInput.addEventListener('keyup', () => {
      lodeData(searchInput.value)
      document.getElementById('sowAllBtn').classList.remove('hidden')
})
// searchInput.addEventListener('onkeydown', () => {
//       lodeData(searchInput.value)
// })
lodeData(13)

// {
//       "brand": "Apple ",
//       "phone_name": "iPhone 13 mini",
//       "slug": "apple_iphone_13_mini-11104",
//       "image": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-mini.jpg"
//     },



const displayAllMobileData = (data, input, sowall) => {

      let sliceData;

      if (sowall) {
            sliceData = data
      }
      else {
            sliceData = data.slice(0, 16)
      }



      const mobileCards = document.getElementById('cards')

      mobileCards.innerHTML = ``
      if (sliceData.length == 0) {
            const h1 = document.createElement('h1')
            // h1.classList = " text-3xl text-center font-bold"
            // mobileCards.appendChild(h1)
            mobileCards.innerText = `${input} No data`
            mobileCards.classList.add("text-4xl", "text-center", "font-bold")
            mobileCards.classList.remove('grid')
            return

      }
      else {
            mobileCards.classList.remove("text-4xl", "text-center", "font-bold")
            mobileCards.classList.add('grid')
      }

      sliceData.map(phone => {
            const { brand, phone_name, slug, image } = phone
            const phoneCard = document.createElement('div')
            phoneCard.classList = "w-full w-10/12 mx-auto md:w-full h-full border flex flex-col justify-between  gap-5 text-start p-6 rounded-lg  shadow-md"
            phoneCard.innerHTML = `
                   <div class=" flex justify-center"> <image style=" transition: .5s;
                  transition-timing-function: ease;

                  &:hover {
                        /* filter: drop-shadow(4px 10px 10px rgba(0, 0, 0, 0.39)); */
                        transform: scale(1.5) rotate(-5deg);"  src="${image}"></div>
                  <div>
                  <h1 class=" font-bold text-2xl">${phone_name}</h1>
                  <p class=" text-sm border px-4  rounded-full w-fit mt-2">${brand}</p>
                 <div class="  flex w-full justify-end mt-6"> 
                <button class="btn" onclick="showDetels('${slug}')">View details</button>

                 </div>
                  </div>
            `
            mobileCards.appendChild(phoneCard)
      })

}

