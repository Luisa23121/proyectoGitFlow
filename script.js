function calculadora(num1, num2, operador) {
switch (operador) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : "No se puede dividir por 0";
        default:
            return "Operación no válida";
    }
}
