function encriptar() {
  var text = document.getElementById('escriba').value.toLowerCase()
  var textCifrado = text.replace(/e/g, 'enter')
  var textCifrado = textCifrado.replace(/o/g, 'ober')
  var textCifrado = textCifrado.replace(/i/g, 'imes')
  var textCifrado = textCifrado.replace(/a/g, 'ai')
  var textCifrado = textCifrado.replace(/u/g, 'ufat')

  //document.getElementById('muñeco').style.display = 'none'
  document.getElementById('mensaje').innerHTML = textCifrado
  document.getElementById('escriba').value = ''
  //document.getElementById('enviar2').style.visibility = 'show'
  //document.getElementById('enviar2').style.display = 'inherit'
}

function desEncriptar() {
  var text = document.getElementById('escriba').value.toLowerCase()
  var textCifrado = text.replace(/enter/g, 'e')
  var textCifrado = textCifrado.replace(/ober/g, 'o')
  var textCifrado = textCifrado.replace(/imes/g, 'i')
  var textCifrado = textCifrado.replace(/ai/g, 'a')
  var textCifrado = textCifrado.replace(/ufat/g, 'u')

  //document.getElementById('muñeco').style.display = 'none'
  document.getElementById('mensaje').innerHTML = textCifrado
  document.getElementById('escriba').value = ''
}
