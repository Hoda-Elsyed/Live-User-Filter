
const URL = 'https://randomuser.me/api/?results=50'
let resutsWrapper = document.querySelector('.results')
let searchInput = document.querySelector('input')
const resultsList = []

showResults()

async function showResults(){
    const fetchURL = await fetch(URL)
    const data =await fetchURL.json()
  
    const results = data.results

    resutsWrapper.innerHTML = ''

    results.forEach(result => {
        const { name, picture, location} = result
        const createResult= document.createElement('div')
        resultsList.push(createResult)
        createResult.classList.add('result')
        createResult.innerHTML = ` 
        <div class="img-div"><img src="${picture.medium}" alt=""></div>
        <div class="text">
        <h4 class="text">${name.first} ${name.last}</h3>
        <small class="address">${location['city']}, ${location['country']}</small>
        </div>
        `
         resutsWrapper.appendChild(createResult)
    });
    
}

searchInput.addEventListener('input', (e)=>{
    searchUser = e.target.value;
    resultsList.forEach(user=>{
        if(user.innerText.toLowerCase().includes(searchUser.toLowerCase())){
            user.style.display = 'block'
        }else{
            
            user.style.display = 'none'
        }
    })
})