function formSubmit() {
    let data1 = document.getElementById("data1").value
    let data2 = document.getElementById("data2").value
    let data3 = document.getElementById("data3").value
    let data4 = document.getElementById("data4").value
    let data5 = document.getElementById("data5").value
    let data6 = document.getElementById("data6").value
    let data7 = document.getElementById("data7").value;

    let maleId = document.getElementById("maleId").checked
    let femaleId = document.getElementById("femaleId").checked

    let success = false;

    if (!maleId && !femaleId) {
        document.getElementById("gender").style.display = "block"
        success = false;
    }
    else {
        document.getElementById("gender").style.display = "none"
       success = true;
    }

    if (data1 == "") {
        document.getElementById("input1").style.display = "block"
        success = false;
    }
    else {
        document.getElementById("input1").style.display = "none"
        success = true;
    }


    if (data2 == "") {
        document.getElementById("input2").style.display = "block"
        success = false;
    }
    else {
        document.getElementById("input2").style.display = "none"
        success = true;
    }


    if (data3 == "") {
        document.getElementById("input3").style.display = "block"
        success = false;
    }
    else {
        document.getElementById("input3").style.display = "none"
        success = true;
    }


    if (data4 == "") {
        document.getElementById("input4").style.display = "block"
        success = false;
    }
    else {
        document.getElementById("input4").style.display = "none"
        success = true;
    }


    if (data5 == "") {
        document.getElementById("input5").style.display = "block"
        success = false;
    }
    else {
        document.getElementById("input5").style.display = "none"
        success = true;
    }


    if (data6 == "") {
        document.getElementById("input6").style.display = "block"
        success = false;
    }
    else {
        document.getElementById("input6").style.display = "none"
        success = true;
    }


    if (data7 == "") {
        document.getElementById("myId").style.display = "block"
        success = false;
    }
    else {
        document.getElementById("myId").style.display = "none"
        success = true;
    }

    if (data1 != '' && data2 != '' && data3 != '' && data4 != '' && data5 != '' && data6 != '' && data7 != '' && (maleId || femaleId)) {
        alert('form is submitted')
    }
}


// function formSubmit(){
//         let data1 = document.getElementById("data1").value
//     let data2 = document.getElementById("data2").value
//     let data3 = document.getElementById("data3").value
//     let data4 = document.getElementById("data4").value
//     let data5 = document.getElementById("data5").value
//     let data6 = document.getElementById("data6").value
//     let data7 = document.getElementById("data7").value;

//     if(data1 == ""){
//         document.getElementById("input1").style.display = "block"
//     }

// }