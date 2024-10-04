const lodeData = (id = 'apple', input) => {
      fetch(`https://openapi.programming-hero.com/api/phones?search=${id ? id : a}`)
            .then(res => res.json())
            .then(data => displayAllMobileData(data.data, id))
            .catch(err => console.error(err))
      console.log(input);

}

lodeData()


const searchInput = document.getElementById('searchInput')
searchInput.addEventListener('keyup', () => {
      lodeData(searchInput.value)
})
lodeData(13)

// {
//       "brand": "Apple ",
//       "phone_name": "iPhone 13 mini",
//       "slug": "apple_iphone_13_mini-11104",
//       "image": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-mini.jpg"
//     },



const displayAllMobileData = (data, input) => {
      const sliceData = data.slice(0, 16)



      const mobileCards = document.getElementById('cards')
      console.log(sliceData.length);
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

