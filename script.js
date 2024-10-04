const lodeData = (id = 12) => {
      fetch(`https://openapi.programming-hero.com/api/phones?search=${id}`)
            .then(res => res.json())
            .then(data => displayAllMobileData(data.data))
            .catch(err => console.error(err))
}

lodeData()


const searchInput = document.getElementById('searchInput')
searchInput.addEventListener('keyup', (event) => {
      lodeData(searchInput.value)
})

// {
//       "brand": "Apple ",
//       "phone_name": "iPhone 13 mini",
//       "slug": "apple_iphone_13_mini-11104",
//       "image": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-mini.jpg"
//     },



const displayAllMobileData = (data) => {

      const mobileCards = document.getElementById('cards')
      mobileCards.innerHTML = ``
      data.map(phone => {
            const { brand, phone_name, slug, image } = phone
            const phoneCard = document.createElement('div')
            phoneCard.classList = "w-full h-full border flex flex-col justify-between  gap-5 text-start p-6 rounded-lg  shadow-md"
            phoneCard.innerHTML = `
                   <div class=" flex justify-center"> <image  src="${image}"></div>
                  <div>
                  <h1 class=" font-bold text-2xl">${phone_name}</h1>
                  <p class=" text-sm border px-4  rounded-full w-fit mt-2">${brand}</p>
                 <div class=" flex w-full justify-end mt-6"> <button class=" btn ">Vew detels</button></div>
                  </div>
            `
            mobileCards.appendChild(phoneCard)
      })

}

