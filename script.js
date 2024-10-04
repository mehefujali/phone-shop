fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
      .then(res => res.json())
      .then(data => displayAllMobileData(data.data))
      .catch(err => console.error(err))



// {
//       "brand": "Apple ",
//       "phone_name": "iPhone 13 mini",
//       "slug": "apple_iphone_13_mini-11104",
//       "image": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-mini.jpg"
//     },



const displayAllMobileData = (data) => {

      const mobileCards = document.getElementById('cards')
      data.map(phone => {
            const { brand, phone_name, slug, image } = phone
            const phoneCard = document.createElement('div')
            phoneCard.classList = "w-full flex flex-col justify-between items-center gap-5 "
            phoneCard.innerHTML = `
                   <div> <image  src="${image}"></div>
                  <div>
                  <h1 class=" font-bold text-2xl">${phone_name}</h1>
                  <p class="">${brand}</p>

                  </div>
            `
            mobileCards.appendChild(phoneCard)
      })

}