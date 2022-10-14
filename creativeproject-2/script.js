document.getElementById("color-code").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("color-code").value;
  if (value === "")
    return;
  console.log(value);
});