console.log("hello world");


const car = {
    carname: "mini",
    model: "cooper s",
    year: "2006",
    color: "grey"
};
console.log(car);
console.log(car.model + " " + car.year);

const student = {
    firstname: "gela",
    lastname: "kodua",
    age: "21",
    height: "1.80",
    fullname: function (){
        return this.firstname + " " + this.lastname

    }
};
console.log("name: " + student.firstname + " lastname: " + student.lastname);
console.log(student.fullname());
 const masw ={
    firstname: "lela",
    lastname:  "gogitidze"
 }
  let maswfullname = student.fullname.bind(masw);
  console.log(maswfullname());


  let cars =["bmw", "opel", "skoda", "alfa-romeo", "renault", "saab"];
  console.log(cars);
  console.log(cars[4]);
  console.log(cars.length);
  console.log(cars[cars.length -1]);
  cars[6]= "audi";
  console.log(cars);
  cars.push("mazda");
  console.log(cars);
  cars.sort();
  console.log(cars);

  const cars2 =["mercedes-benz", "ford", "nissan"] 

  const carsboth = cars.concat(cars2);
  console.log(carsboth)

  for( let i=0; i<carsboth.length; i++){
    console.log(carsboth[i]);
  }


  function gamravleba(a,b){
    return a*b;
  }
  console.log(gamravleba(3,5));



const navigation = ["home", "about", "contact", "offers "]; 
const links = ["index.html", "about.html", "contact.html", "offers.html"]
let navigationsigrdze = navigation.length;

let navigationtxt = '<ul>';
 
for(let i=0; i<navigationsigrdze; i++){
    navigationtxt +='<li><a href="'+ links[i] +'">'  + navigation[i] + "</a></li>"
}
navigationtxt += "</ul>";
console.log(navigationtxt);
document.getElementById("nav").innerHTML = navigationtxt;










