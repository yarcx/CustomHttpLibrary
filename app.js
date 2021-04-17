const customer = document.getElementById("customer");
const customers = document.getElementById("customers");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const output = document.getElementById("output")
const deletePost = document.getElementById("deletePost");

const http = new EasyHttp()
const url = "https://jsonplaceholder.typicode.com/posts";
const putUrl = "https://jsonplaceholder.typicode.com/posts/1";

customer.addEventListener("click", getCustomer);
customers.addEventListener("click", getCustomers);
button2.addEventListener("click", postJson);
button3.addEventListener("click", putJson);
deletePost.addEventListener("click", deletePut);

  function getCustomer() {
  const data =  http.get("customers.json")
    data.then(response => {
      const { id, name, company, phone  } = response
      
      let outputS = `
         <ul >
        <li>${company}</li>
        <li>${name}</li>
        <li>${phone}</li>
      </ul>
      `;

      output.innerHTML = outputS; 
       
  })
}



function getCustomers() {
  const data = http.get("data.json");
  data.then(response => {
    let customersInfo = ""

    response.forEach(customer => {
      const { title, body } = customer
      
      customersInfo += `
         <ul >
        <li>${title}</li>
        <li>${body}</li>
      </ul>
      `;
    })
    
    output.innerHTML = customersInfo
  })
}


function postJson() {
  const data = {
    title: "Im gettin a hold of this thing gradually",
  };
  const response = http.Post(url, data)
  response.then((response) => {
    const { id, title } = response
      
    let outputS = `
         <ul >
        <li>${id}</li>
        <li>${title}</li>
      </ul>
      `;

    output.innerHTML = outputS; 
})
}

function putJson() {
  const data = {
    title: "Watch a Put request come to life",
  };
  const details = http.Put(putUrl, data);
  
  details.then(response => {
    const { title } = response;

    let outputS = `
         <ul>
          <li>${title}</li>
        </ul>
      `;

    output.innerHTML = outputS; 
  })
}

function deletePut() {
  const data = http.delete(putUrl);
  data.then(response => {
    let outputS = `
         <ul>
          <li>${response}</li>
        </ul>
      `;

    output.innerHTML = outputS;
  }).catch(error => console.log(error))
}