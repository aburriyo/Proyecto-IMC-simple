let weightSlider = document.getElementById("sliderWeight");
let weightOutput = document.getElementById("weightOutput");
let heightSlider = document.getElementById("sliderHeight");
let heightOutput = document.getElementById("heightOutput");


//barrita de desplazamiento 
function showValueWeight(newVal){
  weightSlider.value = newVal;
  }

function showValueHeight(newVal){
  heightSlider.value = newVal; 
  }

weightSlider.addEventListener("input", updateValueOutPutWeight );
heightSlider.addEventListener("input", updateValueOutPutHeight );

function updateValueOutPutWeight(e){
  weightOutput.value = e.srcElement.value;
  }

function updateValueOutPutHeight(e){
  heightOutput.value = e.srcElement.value;
  }

// imc = peso (Kg) / (altura x altura (m))

const button = document.getElementById('btenCalcular');
button.addEventListener('click', function() {
  let peso = document.getElementById("weightOutput").value;
  let altura = document.getElementById("heightOutput").value;
  let alturaMetro = (altura / 100);
  let imc = peso / (alturaMetro * alturaMetro);
  
  let resultadoParagrafo = document.querySelector('#imc');
  resultadoParagrafo.innerHTML = imc;
})

    