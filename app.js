let isFeedbackDone = false;
function question() {
  if (isFeedbackDone) {
    alert("You already sent your feedback!");
    return;
  }
  let feedback = prompt(
    "By reading this page, how much are you interested in traveling to Hormuz Island(Low, Medium, High)?"
  );
  feedback = feedback.toLocaleLowerCase().trim();
  if (feedback === "high" || feedback === "medium") {
    alert(
      "Hope to see you in Hormuz island after the end of the Corona pandemic!😊"
    );
  } else {
    alert("Thank you for giving your time!😊");
  }
  isFeedbackDone = true;
}
let Button = document.querySelector("button");
Button.addEventListener("click", question);