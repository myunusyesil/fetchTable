const container = document.querySelector(".tbody")
const initBtn = document.querySelector(".btn-primary")
const clearBtn = document.querySelector(".btn-clear")

// form elements
const inputName = document.querySelector(".name");
const inputUsername = document.querySelector(".username");
const inputCompanyName = document.querySelector(".company-name");
const inputPhone = document.querySelector(".phone");
const inputEmail = document.querySelector(".email");
const form = document.querySelector("form");
console.log(form);

var counter = 1;

const user = { 
    name: "",
    username: "",
    companyName: "",
    phone: 05321234567,
    email: ""
} 

form.addEventListener('submit', e => {
    e.preventDefault();
    user.name = inputName.value;
    user.username = inputUsername.value;
    user.companyName = inputCompanyName.value;
    user.phone = inputPhone.value;
    user.email = inputPhone.value;
    
    initFormUser(user);
    loadDefault();
})

console.log(user);


initBtn.addEventListener('click', initTable);
clearBtn.addEventListener('click', clearTable);

function loadDefault () {
    inputName.value = "";
    inputUsername.value = "";
    inputCompanyName.value = "";
    inputPhone.value = "";
    inputEmail.value = "";
}

function initFormUser (userSubmit) {
    let rowInput = `
    <tr class="each-row">
    <th scope="row">${counter}</th>
    <td>${userSubmit.name}</td>
    <td>${userSubmit.username}</td>
    <td>${userSubmit.companyName}</td>
    <td>${userSubmit.phone}</td>
    <td>${userSubmit.email}</td>
    <th scope="col"> <button class="btn btn-danger">Delete</button></th>
    </tr>
`   
    container.innerHTML += rowInput;
         
}

// console.log(container)

function initTable () {
    let url = "http://jsonplaceholder.typicode.com/users";

    fetch(url).then((response) => {
        let promise = response.json();
        promise.then((data) => {
      
            data.forEach(element => {
                let row = `
                    <tr class="each-row">
                    <th scope="row">${element.id}</th>
                    <td>${element.name}</td>
                    <td>${element.username}</td>
                    <td>${element.company.name}</td>
                    <td>${element.phone}</td>
                    <td>${element.email}</td>
                    <th scope="col"> <button class="btn btn-danger">Delete</button></th>
                    </tr>
                `
                // console.log(row);
                container.innerHTML += row;
                counter = element.id;
                counter++;
            });
            const deleteBtns = document.querySelectorAll(".btn-danger")
            console.log(deleteBtns)
            deleteBtns.forEach(element => {
                element.addEventListener('click', e => {
                    let rowSelected =  e.currentTarget.parentElement.parentElement;
                    container.removeChild(rowSelected)
                })
            });
        })
    })
}

function clearTable () {
    container.innerHTML = "";
}
