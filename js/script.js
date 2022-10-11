function nambahKomen(){

    let komen = document.getElementById("input-komen").value

    document.getElementById("kolom-komen").innerHTML += `<p>${komen}</p>`

    document.getElementById("kolom-komen").style.backgroundColor = "White"