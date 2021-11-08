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
