onEvent("submit", "click", function () {
  var name = getValue("name");
  var age = getValue("Age");
  var position = getValue("Position");
  var userMessage =
    "Hi  " +
    name +
    ", Wow, " +
    age +
    " looks good on you! When holding a " +
    position +
    " job title, its important to remember that it is more than just a label, its a reflection of your responsibilities, professionalism, and career trajectory.\nMaintaining a strong professional image requires clarity, communication, and a proactive approach to managing both your duties and your work-life balance.";
  console.log(name);
  console.log(age);
  console.log(position);
  setText("text1", userMessage);
});
