function operation(event) {
    const screen = document.getElementById('screen__result');
    console.log(12, screen)
    const target = event.currentTarget;

    screen.value = target.value;
    console.log(1, target);
}

//Variables
const execute = () => {
    const screen = document.getElementById('screen__result');
    const result = document.getElementById('result');
    const nums = document.querySelectorAll('.nums');
    const signs = document.querySelectorAll('.signs');

    //Declaraciones de variables
    let screenValue;
    let inMemoryValue;
    let operando;
    let inMemoryOperando;

    //Eventos click
    nums.forEach(element => {
        const pressNumber = event => {
            console.log("HOLA MUNDO", operando);
            if (operando) {
                inMemoryValue = screenValue
                screen.value = undefined;
            }
            const target = event.currentTarget;
            const result = screen.value
                ? `${screen.value}${target.value}`
                : target.value;
            screen.value = parseFloat(result);
            screenValue = screen.value;
        };
        element.addEventListener('click', pressNumber);
    })
    function clean() {
        result.textContent = "";
    }
    signs.forEach(element => {
        const pressSign = event => {
            inMemoryOperando = operando = event.currentTarget.value;
            screenValue = screen.value;
            if (inMemoryValue) {
                //si hay un valor en la memoria, busco reemplazar el valor de la pantalla por el resultado del numero en pantalla y la operacion con el numero de memoria
                screen.value = result
                clean()
            }
        }

        element.addEventListener('click', pressSign);
    })

    function resolve() {
        res = 0;
        switch (operacion) {
            case "+":
                res = parseFloat(nums) + parseFloat(nums);
                break;
            case "-":
                res = parseFloat(nums) - parseFloat(operando);
                break;
            case "*":
                res = parseFloat(nums) * parseFloat(operando);
                break;
            case "/":
                res = parseFloat(nums) / parseFloat(operando);
                break;
        }
        clean();
        screenValue = res;
    }
}
window.addEventListener("DOMContentLoaded", execute);