function reverse() {
    var a = document.getElementById("number").value;
    console.log(a);
    var array = a.split("");
    console.log(array);
    var newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.unshift(a[i]);
    }
    console.log(newArray);
    var string = newArray.join("");
    console.log(string);
    document.getElementById("reverse").innerHTML = string;
}
