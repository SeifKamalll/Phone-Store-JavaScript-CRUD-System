// ............................. Phone Store CRUD ............................. //

let phones = [
  { name: "iphone 13 pro", price: 800, Qty: 10 },
  { name: "iphone 14 pro", price: 900, Qty: 5 },
  { name: "iphone 16 pro", price: 1000, Qty: 20 },
];

let PhoneIndexToEdit = null;

let phonename = document.querySelector("#phonename");
let phoneprice = document.querySelector("#phoneprice");
let phoneqty = document.querySelector("#phoneqty");
let table = document.querySelector("table tbody");
let showphones = () => {
  table.innerHTML = "";
  phones.forEach((el, index) => {
    let row = `<tr>
                <th>${index + 1}</th>
                <th>${el.name}</th>
                <th>${el.price} $</th>
                <th>${el.Qty}</th>
                <th>
                  <button onclick="editphone(${index})" class="btn btn-primary">Edit</button>
                  <button onclick="deletephone(${index})" class="btn btn-danger">Del</button>
                </th>
              </tr>
      `;
    table.innerHTML += row;
  });
};
showphones();

let addnewphone = () => {
  let newphone = {
    name: phonename.value,
    price: +phoneprice.value,
    Qty: +phoneqty.value,
  };
  phones.push(newphone);
  showphones();
  phonename.value = "";
  phoneprice.value = "";
  phoneqty.value = "";
};

let deletephone = (index) => {
  let areyousure = confirm("Are You Sure To Delete This Phone ?");
  if (areyousure == true) {
    phones.splice(index, 1);
    showphones();
  }
};

let savebutton = document.querySelector("#savebutton");
let newphonebutton = document.querySelector("#newphonebutton");
let editingmode = document.querySelector("h1");
let editphone = (index) => {
  PhoneIndexToEdit = index;
  editingmode.innerText = "Edit Phone";
  savebutton.classList.remove("d-none");
  newphonebutton.classList.add("d-none");
  phonename.value = phones[index].name;
  phoneprice.value = phones[index].price;
  phoneqty.value = phones[index].Qty;
};

let savephone = () => {
  let newphone = {
    name: phonename.value,
    price: +phoneprice.value,
    Qty: +phoneqty.value,
  };
  phones[PhoneIndexToEdit] = newphone;
  showphones();
  phonename.value = "";
  phoneprice.value = "";
  phoneqty.value = "";
  editingmode.innerText = "Add New Phone";
  savebutton.classList.add("d-none");
  newphonebutton.classList.remove("d-none");
};
