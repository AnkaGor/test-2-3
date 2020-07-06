var result = document.getElementById('resutl');
var resultFild = document.getElementById('resultFild');
var inputFild = document.getElementsByTagName('input');
result.addEventListener('click', function(){
    let resultedInputs = document.querySelectorAll("input[type='radio']:checked");
    let result = 0;
    Array.prototype.map.call(resultedInputs, (el)=>{
      result += parseInt(el.dataset.value);
    });
    console.log(result);
    resultFild.innerHTML = result
});