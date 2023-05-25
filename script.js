const user_list = document.querySelector('.user_list');
let inputVal = document.querySelector('#inputVal');
let loading = document.getElementById('loading');

const userArr = [];

const getUserData = async () => {
    try {
        const res = await fetch('https://api.github.com/users');
        const data = await res.json();
        // console.log(data);

        data.map((item) => {
            item ? loading.style.display = 'none' : 'block';

            const li = document.createElement('li');
            li.insertAdjacentHTML('afterbegin', `
            <div class="user_data">
              <img src="${item.avatar_url}" alt="${item.avatar_url}">
                  <div>
                    <p>${item.login}</p>
                    <a href="${item.html_url}" target="_bla">${item.html_url}</a>
                  </div>
            </div>
            `)
            user_list.appendChild(li);
            // console.log(li);
            userArr.push(li)
        })
    } catch {
        console.log('errror')
    }
}

inputVal.addEventListener('input' , (e)=>{
    const valueOfInput = e.target.value;
    // console.log(valueOfInput);

    userArr.forEach((currElem)=>{
        // if(currElem.innerText.toUpperCase().includes(valueOfInput.toUpperCase())){
        //     currElem.style.display = '';
        // }else{
        //     currElem.style.display = 'none';
        // }
        currElem.innerText.toUpperCase().includes(valueOfInput.toUpperCase()) ? currElem.style.display = '' 
        : currElem.style.display = 'none' ;

        // console.log(currElem.innerText)
    })
    console.log(userArr)
    // document.body.innerHTML
})

getUserData();