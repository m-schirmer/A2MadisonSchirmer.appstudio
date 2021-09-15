// determines variables & messages
let firstName = prompt("Enter your first name:")
let state = prompt("Enter your state's two letter abbreviation, capitalized:")
let temp = Number(prompt("Enter the temperature in Fahrenheit:"))
let messages = ["Wear a warm coat, hat, scarf and gloves.", "Wear a warm coat but you won't need a hat, scarf or gloves.", "wear your warmest coat, a warm hat, a scarf, and warm gloves.", "wear a warm coat, hat and gloves. Maybe a scarf too."]

// gives the user a response depending on their input
if (state == "NE" && temp <= 32){
    console.log(`${firstName}, ${messages[0]}.`)
} else if(state == "NE" && temp >= 32 && temp <= 50) {
    console.log(`${firstName}, ${messages[1]}.`) 
} else if (state == "FL" && temp >= 32 && temp <= 50) {
    console.log(`${firstName}, ${messages[2]}.`)
} else if (state == "FL" && temp >= 50 && temp <= 70) {
    console.log(`${firstName}, ${messages[3]}.`)
}