const imageCreate = (text = 'Иван Иванович') => {
  const svgText = document.getElementById("svg_text");
  svgText.innerHTML = text;
}

imageCreate()
