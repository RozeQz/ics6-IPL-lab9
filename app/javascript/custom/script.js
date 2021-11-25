document.addEventListener("DOMContentLoaded", function() {
    let btn = document.getElementById("btn_commit");
    btn.addEventListener("click", send_query);
})

palindrome_url = location.protocol + "//" + location.host + "/palindrome/view.json"

function send_query() {
    let input_number = document.getElementById("input_number");
    console.log(input_number.value)
    let param_str = "?n=" + input_number.value;
    if (param_str == "?n=") return false;
    let received_data = [];
    var http_request = new XMLHttpRequest();
    http_request.open("GET", palindrome_url + param_str, true);
    http_request.onreadystatechange = function () {
        let done = 4, ok = 200;
        if (http_request.readyState == done &&
            http_request.status == ok) {
            received_data = JSON.parse(http_request.responseText);
            show_result(received_data);
        }
    };
    http_request.send(null);
    return false;
}

function show_result(data) {
    let input_output = document.getElementById("input_output");
    let answer_output = document.getElementById("answer_output");
    let table = document.getElementById("table_result");
    let error_output_el = document.getElementById("error_output");
    input_output.style.display = "block";
    answer_output.style.display = "block";
    table.style.display = "none";
    error_output_el.style.display = "none";
    input_output.innerText = `You entered: ${document.getElementById("input_number").value}`;

    for (let i = 0; i < table.tBodies.length; i++) {
        table.removeChild(table.tBodies[i]);
    }

    let tbody = document.createElement("tbody");
    table.appendChild(tbody);
    try {
        for (let i = 0; i < data.length; i++) {
            switch (data[i].name) {
                case "result": {
                    answer_output.innerText = `Answer: ${data[i].value}`;
                    break;
                }
                case "numbers": {
                    num_arr = data[i].value;
                    if (data[i].type !== "NilClass")
                    for (let j = 0; j < num_arr.length; j++) {
                        tbody.innerHTML += `
                        <tr>
                            <td> ${ j + 1 } </td>
                            <td> ${ num_arr[j] } </td>
                            <td id="square${ j }"> ${ num_arr[j]**2 } </td>
                        </tr>`;
                    }
                    break;
                }
                case "error":
                    if (data[i].type !== "NilClass")
                    throw new Error(data[i].value);
                    break;
            }
        }
    console.log(data);
    table.style.display = "block";
    }
    catch(e) {
        console.error(e);
        error_output_el.innerText = e.message;
        error_output_el.style.display = "block";
    }
}