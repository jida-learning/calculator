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
    const nums = document.querySelectorAll('.nums');
    const signs = document.querySelectorAll('.signs');
    const delet = document.querySelector('.clean');

    //Declaraciones de variables
    let screenValue;
    let inMemoryValue;
    let operando;
    let inMemoryOperando;
    let res;
    let deleteNumber

    //Eventos click
    nums.forEach(element => {
        const pressNumber = event => {
            // console.log("HOLA MUNDO", operando);
            if (operando) {
                inMemoryValue = screenValue
                screen.value = '';
            }
            const target = event.currentTarget;
            console.log('LISTO', screen.value, target.value);
            const result = screen.value
                ? `${screen.value}${target.value}`
                : target.value;
            screen.value = parseFloat(result);
            screenValue = screen.value;
        };
        element.addEventListener('click', pressNumber);
    })

    signs.forEach(element => {
        const pressSign = event => {
            inMemoryOperando = operando = event.currentTarget.value;
            screenValue = screen.value;
            if (inMemoryValue) {
                const result = operations(inMemoryOperando, screenValue, inMemoryValue);
                //si hay un valor en la memoria, busco reemplazar el valor de la pantalla por el resultado del numero en pantalla y la operacion con el numero de memoria
                screen.value = result
            }
        }

        element.addEventListener('click', pressSign);
    })

    delet.addEventListener('click', () => {
        deleteNumber.substr(0, -1);
        screen.value = deleteNumber;
    })

    function operations(op, valueA, valueB) {
        res = 0;
        switch (op) {
            case "+":
                res = parseFloat(inMemoryValue) + parseFloat(screen.value);
                document.getElementById('result').innerHTML = result;
                break;
            case "-":
                res = parseFloat(valueA) - parseFloat(valueB);
                document.getElementById('result').innerHTML = valueA + valueB;
                break;
            case "*":
                res = parseFloat(nums) * parseFloat(operando);
                break;
            case "/":
                res = parseFloat(nums) / parseFloat(operando);
                break;
        }
        return res;
        console.log(operations(op, valueA, valueB));
    }
}

window.addEventListener("DOMContentLoaded", execute);