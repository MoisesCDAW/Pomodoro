
let trabajar, descansar;


inicio();


function inicio(){

    trabajar = prompt("Cuantos minutos quieres trabajar?");
    while (isNaN(trabajar) || trabajar=="" || Number.parseInt(trabajar)<=0) {
        if (trabajar==null) {
            break;
        }
        alert("ERROR. Dato invalido");
        trabajar = prompt("Cuantos minutos quieres trabajar?");
    }

    descansar = prompt("Cuantos minutos quieres descansar?");
    while (isNaN(descansar) || descansar=="" || Number.parseInt(descansar)<=0) {
        if (descansar==null) {
            break;
        }
        alert("ERROR. Dato invalido");
        descansar = prompt("Cuantos minutos quieres descansar?");
    }

    if (trabajar!=null && descansar!=null){
        trabajar = Number.parseInt(trabajar);
        descansar = Number.parseInt(descansar);
        document.getElementById("contador").innerHTML = `${trabajar}:00`;
        document.getElementById("secundario").innerHTML = `${descansar}:00`;
    }
}


function pomodoro(){
    if (trabajar!=null && descansar!=null) {
        let segundos = 60;
        let aux = trabajar-1;

        let intervaloTrabajo = setInterval(() => {
            segundos --;


            if (segundos==0) {
                segundos = 60;
                aux --;

                if (aux<0) {
                    clearInterval(intervaloTrabajo);

                    document.getElementById("contador").innerHTML = `${descansar}:00`;
                    document.getElementById("secundario").innerHTML = `${trabajar}:00`;
                    segundos = 60;
                    aux = descansar-1;

                    let aDescansar = confirm("Tiempo de descansar! (OK - continuar) o (CANCEL - Saltar descanso)");

                    if (aDescansar) {
                        let intervaloDescanso = setInterval(()=>{
                            segundos--;
        
                            if (segundos<0) {
                                segundos = 60;
                                aux --;
        
                                if (aux<0) {
                                    clearInterval(intervaloDescanso);

                                    document.getElementById("contador").innerHTML = `${trabajar}:00`;
                                    document.getElementById("secundario").innerHTML = `${descansar}:00`;
        
                                    alert("Volvamos al trabajo");

                                    aux = 0
                                    segundos = 0;

                                    pomodoro();
        
                                }
                            }
        
                            if (segundos<10) {
                                document.getElementById("contador").innerHTML = `${aux}:0${segundos}`;
                            }else{
                                document.getElementById("contador").innerHTML = `${aux}:${segundos}`;
                            }
        
                        }, 1000);

                    }else {
                        document.getElementById("contador").innerHTML = `${trabajar}:00`;
                        document.getElementById("secundario").innerHTML = `${descansar}:00`;

                        aux = 0
                        segundos = 0;
                        pomodoro();
                    }    
                }
            }

            if (segundos<10) {
                document.getElementById("contador").innerHTML = `${aux}:0${segundos}`;
            }else{
                document.getElementById("contador").innerHTML = `${aux}:${segundos}`;
            }
            

        }, 1000);
    }
}