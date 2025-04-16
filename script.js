let countEL = document.getElementById("count-el");
let saveEL = document.getElementById("save-el");
//console.log(countEL);
let count = 0;
function increment() {
  count = count + 1; // count += 1;
  countEL.textContent = count;
  //console.log(count);
}
function save(){
  let countStr = count + " - ";
  saveEL.textContent += countStr; // saveEL.innerText += countStr;
  countEL.textContent = 0; // Reset the count display to 0 after saving
  count = 0; // Reset the count variable to 0 after saving
  //console.log(countStr);
  //console.log(count); 
}