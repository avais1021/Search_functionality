const user_list = document.querySelector('.user_list');


const getUserData = async () => {
    try {
        const res = await fetch('https://api.github.com/users');
        const data = await res.json();

        let login_name = document.querySelectorAll('.login_name');
        console.log('login name', login_name)

        console.log(data);

        data.map((item) => {
            const li = document.createElement('li');
            li.insertAdjacentHTML('afterbegin', `
            <div class="user_data">
              <img src="${item.avatar_url}" alt="${item.avatar_url}">
                  <div>
                    <p class="login_name">${item.login}</p>
                    <a href="${item.html_url}" target="_bla">${item.html_url}</a>
                  </div>
            </div>
            `)
            user_list.appendChild(li);

            let inputVal = document.querySelector('#inputVal');
            let inputValUpper = inputVal.value.toUpperCase();
            let user_data = li.querySelector('.user_data');
            let name = li.querySelector('.login_name');
            let nameUpper = name.innerHTML.toUpperCase()

            inputVal.addEventListener('keyup', () => {

                console.log('index', nameUpper.indexOf(inputValUpper))
                if (nameUpper.indexOf(inputValUpper) > -1) {
                    user_data.style.display = 'none';
                } else {
                    user_data.style.display = 'none';
                }
                // console.log(nameUpper)

            })

            // var name = item.login; 
            // console.log(name.toUpperCase())       

        })
    } catch {
        console.log('errror')
    }
}

// const serachUser = () => {
//     let inputValUpper = inputVal.value.toUpperCase();

//     login_name.forEach((name) => {
//         console.log(name.innerHTML);
//     })

// }
// serachUser();





getUserData();