var mes;
var dia;
var signo_zodiacal;

while (true){
    mes = parseInt(prompt("Ingrese su mes de nacimiento en número (1 - 12): "))

    if (mes >=1 && mes <=12){
        break;
    } else {
        console.log("El mes ingresado es incorrecto. Por favor, ingrese su mes de nacimiento en número (1 - 12): ")
    }
}
while (true){
    dia = parseInt(prompt("Ingrese su día de nacimiento en número: "))

    if (dia >=1 && dia <=31){
        break;
    } else {
        console.log("El día ingresado es incorrecto. Por favor, ingrese su día de nacimiento en número (1 - 31): ")
    }
}

if ((mes === 3 && dia >=21) || (mes === 4 && dia <= 20)){
    signo_zodiacal = ("Tu signo zodiacal es Aries.");
} else if ((mes === 4 && dia >=21) || (mes === 5 && dia <= 20)){
    signo_zodiacal = ("Tu signo zodiacal es Tauro.");
} else if ((mes === 5 && dia >=21) || (mes === 6 && dia <= 20)){
    signo_zodiacal = ("Tu signo zodiacal es Geminis.");
} else if ((mes === 6 && dia >=21) || (mes === 7 && dia <= 22)){
    signo_zodiacal = ("Tu signo zodiacal es Cáncer.");
} else if ((mes === 7 && dia >=23) || (mes === 8 && dia <= 23)){
    signo_zodiacal = ("Tu signo zodiacal es Leo.");
} else if ((mes === 8 && dia >=24) || (mes === 9 && dia <= 22)){
    signo_zodiacal = ("Tu signo zodiacal es Virgo.");
} else if ((mes === 9 && dia >=23) || (mes === 10 && dia <= 23)){
    signo_zodiacal = ("Tu signo zodiacal es Libra.");
} else if ((mes === 10 && dia >=24) || (mes === 11 && dia <= 22)){
    signo_zodiacal = ("Tu signo zodiacal es Escorpio.");
} else if ((mes === 11 && dia >=23) || (mes === 12 && dia <= 21)){
    signo_zodiacal = ("Tu signo zodiacal es Sagitario.");
} else if ((mes === 12 && dia >=22) || (mes === 1 && dia <= 20)){
    signo_zodiacal = ("Tu signo zodiacal es Capricornio.");
} else if ((mes === 1 && dia >=21) || (mes === 2 && dia <= 19)){
    signo_zodiacal = ("Tu signo zodiacal es Acuario.");
} else {
    signo_zodiacal = ("Tu signo zodiacal es Piscis.")
}
alert(signo_zodiacal);