//Uma callback function é uma função que está sendo passada para outra função como parâmetro.

function callBackTest(func) {
    console.log("1");
    func();
    console.log("2");
}

callBackTest(function () {
    console.log("função dentro de outra função");
});

function sayMyName(name) {
    console.log('antes de execulatr a funcao callback')
    
    name()

    console.log('depois de executar a callback')
}

sayMyName(
    () => {
        console.log('estou em um callback')
    }
)