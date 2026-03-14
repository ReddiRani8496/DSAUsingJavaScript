function checkEligibleForVote(age) {
  if (age < 0) {
    console.log("Invalid input");
  } else if (age > 18) {
    console.log("Eligible for vote");
  } else {
    console.log("Not eligible for vote");
  }
}

checkEligibleForVote(18);
checkEligibleForVote(20);
