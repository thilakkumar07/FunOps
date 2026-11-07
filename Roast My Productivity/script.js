// const plannedInput = document.getElementById("plannedHours");
// const actualInput = document.getElementById("actualHours");
// const result = document.getElementById("result");
// const button = document.querySelector("button");

// button.addEventListener("click", function () {
//   let final = 0
//   const planned = Number(plannedInput.value);
//   const actual = Number(actualInput.value);
  
//   if(actual < 0 || planned <= 0){
//     alert("Invalid Hours! Please Check!!");
//     result.textContent = `Good You Don't Do anything!\nYour Score: ${final}%`;

//   }
//   else if(actual > planned){
//     alert("Enter valid Actual Hours! ");
//   }
//   else{
//    final = (actual/planned) * 100;
//    result.textContent = `I know your Potential! Your Score: ${final.toFixed(1)}%`;
//   }
  
// });


const plannedInput = document.getElementById("plannedHours");
const actualInput = document.getElementById("actualHours");
const result = document.getElementById("result");
const button = document.querySelector("button");

button.addEventListener("click", function () {
  const planned = Number(plannedInput.value);
  const actual = Number(actualInput.value);

  // Validate the inputs
  if (plannedInput.value.trim() === "" || actualInput.value.trim() === "") {
    result.textContent = "Please enter both planned and actual hours.";
  }
  else if (planned <= 0 || actual < 0) {
    result.textContent = "Invalid hours! Please enter valid numbers.";
  }
  else if (actual > planned) {
    result.textContent = "Actual hours cannot exceed planned hours!";
  }
  else {
    const final = (actual / planned) * 100;
    const percentage = final.toFixed(1);

    if (final === 100) {
      result.textContent = `Perfect! You completed your plan: ${percentage}%`;
    }
    else if (final >= 70) {
      result.textContent = `Great work! Your productivity is ${percentage}%`;
    }
    else if (final >= 40) {
      result.textContent = `Not bad, but you can do better! ${percentage}%`;
    }
    else {
      result.textContent = `Bro, your distractions won today! ${percentage}%`;
    }
  }
});
