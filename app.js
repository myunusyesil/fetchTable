const container = document.querySelector(".tbody")
const initBtn = document.querySelector(".btn-primary")
const clearBtn = document.querySelector(".btn-clear")

initBtn.addEventListener('click', initTable);
clearBtn.addEventListener('click', clearTable);


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


