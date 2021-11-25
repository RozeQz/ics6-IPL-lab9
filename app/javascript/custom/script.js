// document.addEventListener("DOMContentLoaded", function() {
//     let btn = document.getElementById("btn_commit");
//     btn.addEventListener("click", send_query);
// })

// palindrome_url = location.protocol + "//" + location.host + "/palindrome/view.json"

// function send_query() {
//     let input_number = document.getElementById("input_number");
//     console.log(input_number.value)
//     let param_str = "?n=" + input_number.value;
//     if (param_str == "?n=") return false;
//     let received_data = [];
//     var http_request = new XMLHttpRequest();
//     http_request.open("GET", palindrome_url + param_str, true);
//     http_request.onreadystatechange = function () {
//         let done = 4, ok = 200;
//         if (http_request.readyState == done &&
//             http_request.status == ok) {
//             received_data = JSON.parse(http_request.responseText);
//             show_result(received_data);
//         }
//     };
//     http_request.send(null);
//     return false;
// }

// function show_result(data) {
//     let typed_output = document.getElementById("typed_output");
//     typed_output.innerText = `You entered: ${document.getElementById("input_number").value}`;
//     let table = document.getElementById("table_result");
//     let error_output_el = document.getElementById("error_output");

//     const tbody = document.createElement('tbody')

//     table.innerHTML = `
//         <thead>
//             <tr>
//                 <th scope="col"> # </th>
//                 <th scope="col"> Number </th>
//                 <th scope="col"> Square </th>
//             </tr>
//         </thead>
//     `;
//     let index = 0;
//     data.value.forEach((element) => {
//         tbody.innerHTML += 
//             <tr>
//                 <td scope="row"> ${ index++ } </td>
//                 <td scope="row"> ${ element } </td>
//                 <td scope="row"> ${ element**2 } </td>
//             </tr>
//     })
//     result.appendChild(tbody)
// }