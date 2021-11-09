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
function convertToUpperCase() {
    var b = document.getElementById("string").value;
    console.log(b);
    var newArrays = b.split(" ");
    console.log(newArrays);
    var upperCase = [];
    for (var i = 0; i < newArrays.length; i++) {
        var string = newArrays[i];

        var firstLetter = string.charAt(0).toUpperCase();

        var finalResult = firstLetter + string.substring(1);
        console.log(finalResult);
        upperCase.push(finalResult);
    }
    console.log(upperCase);
    var string = upperCase.join(" ");
    console.log(string);
    document.getElementById("upperCase").innerHTML = string;

    for (let n = 1; n >= 100; n++) {
        let output = "";
        if (n % 3 == 0) output += "Fizz";
        if (n % 5 == 0) output += "Buzz";
        console.log(output);
    }
}

// const names = ['John', 'Dana', 'Nora', 'Stef']
// const list = document.getElementById("list")
// for (let i = 0; i < names.length; i++) {
//     var item = document.createElement("");

// }

document.getElementById("li1").innerHTML = "John Doe";
document.getElementById("li2").innerHTML = "Dana Doe";
document.getElementById("li3").innerHTML = "Nora Doe";
document.getElementById("li4").innerHTML = "Stef Doe";

var list2 = document.getElementById("list2");
const names = ["John", "Dana", "Nora", "Stef"];
for (var i = 0; i < names.length; i++) {
    var element = document.createElement("li");
    var text = document.createTextNode(names[i] + " " + "Doe");
    element.appendChild(text);
    list2.appendChild(element);
}

var flowers = document.getElementById("flowers");
const sources = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Die_Tulpe_3918.JPG/1200px-Die_Tulpe_3918.JPG",
    "http://ankert.hu/wp-content/uploads/2018/07/tulip%C3%A1n.jpg",
    "https://www.szepzold.hu/files/Image/Sulyok%20J%C3%B3zsefn%C3%A9/Hogyan%20nevelj%C3%BCnk%20t%C3%B6k%C3%A9letes%20tulip%C3%A1nt/721444_34888536_resize.jpg",
    "https://ripost.hu/wp-content/uploads/kepadatbazis/thumbs/2018-03-05/619d5fc820a0159802a44849feb4e942/620x0.jpg",
];
for (var i = 0; i < sources.length; i++) {
    var element = document.createElement("img");
    element.src = sources[i];
    element.style.width = "200px";
    element.style.display = "block";
    flowers.appendChild(element);
}
