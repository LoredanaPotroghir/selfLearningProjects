// do a function that has a few variables that describe a person 
// from this function return another function that does few operations with the variables from the outer function and return that value. 

function person()
{
    const name = "Dana";
    const age = 27;
    const height = 176;
    return function more(surname)
    {
        const phraseToReturn = "My name is " + name + " " + surname;
        return phraseToReturn;

    }
}
const finalResult = person();
const final = finalResult("Potroghir)";
console.log(final);
