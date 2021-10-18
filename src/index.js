const imageTextCreate = (text = 'Иван Иванович') => {
  const svgText = document.getElementById("svg_text");
  svgText.innerHTML = text;
}

const authorization = (props) => {
  props.stopPropagation()
}

const openCertificate = (props) => {
  props.stopPropagation()
  const text = document.getElementById("fio_input");
  imageTextCreate(text)
}
