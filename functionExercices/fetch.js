var list = document.getElementById("list");



function fetchData()
{
    fetch("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8")
        .then(function (res)
        {
            console.log(res);
            if (res.ok)
            {
                res.json().then(function (data)
                {
                    console.log(data);
                    data.forEach(el =>
                    {
                        var listElement = document.createElement("li");
                        var textNode = document.createTextNode(el.name);
                        listElement.appendChild(textNode);
                        list.appendChild(listElement);
                    })

                })
            } else
            {
                console.log("something went wrong");
            }





        }
        )
        .catch(er =>
        {
            console.log(er);
        })
}
