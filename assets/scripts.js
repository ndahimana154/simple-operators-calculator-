resultField = document.getElementById("displayField");
const deleteValues = () => {
  resultsValues = resultField.value
  rvArray = resultsValues.split('')
  newArray = ""
  for (let i = 0;i<rvArray.length - 1;i++) {
    newArray += rvArray[i]
  }
  resultField.value = newArray
}