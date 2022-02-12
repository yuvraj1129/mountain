function bloodpressure(formName) {
  var systolic = formName.systolic.value;
  var diastolic = formName.diastolic.value;

  if (systolic < 80 && diastolic < 50) {
    document.getElementById("result").innerHTML =
      "very low! possible hypotension. jake doctor se milo agar kuch lag rha ho to";
  } else if (systolic < 91 && diastolic < 65) {
    document.getElementById("result").innerHTML = "very low! ";
  } else if (systolic < 101 && diastolic < 71) {
    document.getElementById("result").innerHTML = "low!";
  } else if (systolic < 121 && diastolic < 81) {
    document.getElementById("result").innerHTML =
      "normal! risk for coronary heart disease is minimal";
  } else if (systolic < 130 && diastolic < 86) {
    document.getElementById("result").innerHTML =
      "slightly above normal! risk for coronary heart disease is minimal";
  } else if (systolic < 140 && diastolic < 90) {
    document.getElementById("result").innerHTML =
      "slightly increased! risk for coronary heart disease is minimal to low.";
  } else if (systolic < 160 && diastolic < 100) {
    document.getElementById("result").innerHTML =
      "increased! possible hypertension (stage 1). risk for coronary disease is increased.";
  } else if (systolic < 180 && diastolic < 110) {
    document.getElementById("result").innerHTML =
      "moderately increased!. possible hypertension(stage 2). risk badh gya hai doctor se jake milo";
  } else if (systolic < 250 && diastolic < 190) {
    document.getElementById("result").innerHTML =
      "severely increased!. possible hypertension(stage 3). seek medical advice";
  }
}
