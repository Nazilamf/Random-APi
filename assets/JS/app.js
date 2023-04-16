let input = document.querySelector('#form input');
let users = [];

function GetUsers() {
    fetch('https://randomuser.me/api/?results=100')
        .then(response => response.json())
        .then(data => {
            let x = '';
            let male_count = 0;
            let female_count = 0;

            data.results.forEach(user => {
                users.push(user);
                if (user.gender === 'male') {
                    male_count++;
                }
                else {
                    female_count++;
                }
                x += `
                <div class="col-lg-3">
                <div id = ${user.gender === 'male' ? 'male' : 'female'} class="card">
                    <img src=${user.picture.medium} class="card-img-top" alt="...">
                    <div class="card-body">"
                      <h5 class="card-title">${user.name.first} ${user.name.last}</h5>
                      <p>Email:${user.email} </p>
                      <a href="#" class="btn btn-primary">About more...</a>
                    </div>
                  </div>
            </div>
            `
            });
            document.querySelector('#list').innerHTML = x
            document.querySelector('#male').innerHTML = male_count
            document.querySelector('#female').innerHTML = female_count
        })
        .catch(err => console.log(err))
}

GetUsers()



input.onkeyup = function () {
    let value = this.value
    let x = '';
    let male_count = 0;
    let female_count = 0;
    let filtereduser = users.filter(x => x.name.first.toLowerCase().includes(value.toLowerCase()))


    if (filtereduser.length === 0) {
        document.querySelector('.alert').classList.remove('d-none')
    }
    else {
        document.querySelector('.alert').classList.add('d-none')
    }
    filtereduser.forEach(item => {
        if (item.gender === 'male') {
            male_count++;
        }
        else {
            female_count++;
        }
        x += `
    <div class="col-lg-3">
    <div id = ${item.gender === 'male' ? 'male' : 'female'} class="card">
        <img src=${item.picture.medium} class="card-img-top" alt="...">
        <div class="card-body">"
          <h5 class="card-title">${item.name.first} ${item.name.last}</h5>
          <p>Email:${item.email} </p>
          <a href="#" class="btn btn-primary">About more...</a>
        </div>
      </div>
    </div>
    `
    });
    document.querySelector('#list').innerHTML = x
    document.querySelector('#male').innerHTML = male_count
    document.querySelector('#female').innerHTML = female_count



    
}

let selectedvalue = document.querySelector('#change')

