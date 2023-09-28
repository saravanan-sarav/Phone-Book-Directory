let PhoneBook = [];
let textField = document.getElementById("name");
let phoneNumberField = document.getElementById("phone");
let directory = document.getElementById("directory");
let addNumber = document.getElementById("addNumber");
// console.log(textField);
// console.log(phoneNumberField);
// console.log(addNumber);


// Random Number Generator
const randomNumber = (max = 1000) => {
  return Math.floor(Math.random() * max);
};
let editDone = 0;
// Edit The Directory
const editDirectory = (check) => {
  editDone = check;
  //   console.log(check);
  const editedDirectory = PhoneBook.find((val) => val.id === check);
  textField.value = editedDirectory.name;
  phoneNumberField.value = editedDirectory.phone;
  addNumber.innerText = "Edit";
};
// Print the telephone directory
const render = () => {
  let htmlInput = " ";
  for (let output of PhoneBook) {
    htmlInput += `<div class="d-flex align-items-center justify-content-between p-2 border-bottom border-primary">
          <div class=" m-0">
            <p class="fs-5 ">Name: ${output.name}</p>
            <p class="fs-5 ">Number: ${output.phone}</p>
          </div>
          <div>
            <button onclick="editDirectory(${output.id})" class="btn">Edit</button>
            <button onclick="deleteDirectory(${output.id})" class="btn text-danger">Delete</button>
          </div>
        </div>`;
    // console.log(output.name);
    directory.innerHTML = htmlInput;
  }
};

// Delete the Directory
const deleteDirectory = (check) => {
  PhoneBook = PhoneBook.filter((del) => {
    if (del.id !== check) {
      return del;
    }
  });
  render();
};



// ADD DATA IN ARRAY
addNumber.addEventListener("click", () => {
  if (textField !== "" && phoneNumberField !== "") {
    if (editDone === 0) {
      PhoneBook.push({
        id: randomNumber(),
        name: textField.value,
        phone: phoneNumberField.value,
      });
      textField.value = "";
      phoneNumberField.value = "";
      render();
    } else {
      PhoneBook = PhoneBook.map((val) => {
        if (val.id == editDone) {
          return {
            ...val,
            name: textField.value,
            phone: phoneNumberField.value,
          };
        } else {
          return val;
        }
      });

      editDone = 0;
      addNumber.innerText = "add Phone";
      textField.value = "";
      phoneNumberField.value = "";
      render();
      //   console.log(PhoneBook);
    }
  } 
  else{

  }
  
});
render();