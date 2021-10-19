

const authorization = async (props) => {
  props.stopPropagation()
  const login = document.getElementById('login_id').value;
  const password = document.getElementById('password_id').value;
  console.log(login, password)
  const url = 'https://sirius-crm-api.herokuapp.com/api/v1/certificate_login'
  try {
    await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *client
      body: JSON.stringify({
        login, password
      }) // body data type must match "Content-Type" header
    }).then((res) => {
      if (res.ok) document.location.href = "form.html";
      else {
        const error = document.getElementById('error')
        error.innerHTML = 'Что-то пошло не так'
      }
    })
  } catch (err) {
    console.log(err)
  }
}
