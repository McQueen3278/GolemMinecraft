window.onload=function(){}
canvas = document.getElementById('canvas')
 
if (canvas && canvas.getContext) {
    const cabeza = canvas.getContext('2d');
    const cuerpo = canvas.getContext('2d');
    const brazos = canvas.getContext('2d');
    
    // Define el color de fondo
    cabeza.fillStyle = "#924300";
    cabeza.strokeStyle = "black";
    cabeza.lineWidth = 20;
    cabeza.strokeRect(400, 0, 600, 500);
    cabeza.fillRect(400, 0, 600, 500); 
   


    
    // Desplazamiento hacia la derecha
    const desplazamientoX = 400; // Ajusta este valor para mover la cabeza hacia la derecha
    
    // Aplica la traducción para mover todo el contenido del lienzo
    cabeza.translate(desplazamientoX, 0);

    const baseX = 37.5;
    const baseY = 37.5 * 500 / 600; 
    
    cabeza.fillStyle = "#bd8232";
    
    cabeza.fillRect(baseX, baseY, baseX, baseY);
    cabeza.fillRect(baseX, baseY * 5, baseX, baseY * 2);
    cabeza.fillRect(baseX * 10, baseY * 14, baseX, baseY);
    cabeza.fillRect(baseX * 10, baseY * 2, baseX, baseY);
    cabeza.fillRect(baseX * 14, baseY * 13, baseX, baseY);
    cabeza.fillRect(baseX, baseY * 2, baseX, baseY * 3);
    cabeza.fillRect(baseX, baseY * 9, baseX, baseY * 2);
    cabeza.fillRect(baseX * 2, 0, baseX, baseY * 1);
    cabeza.fillRect(baseX * 5, 0, baseX * 2, baseY * 1);
    cabeza.fillRect(baseX * 9, 0, baseX, baseY * 1);
    cabeza.fillRect(baseX * 12, 0, baseX * 2, baseY * 1);
    
    cabeza.fillStyle = "#3c0701";
    cabeza.fillRect(baseX * 4, baseY * 2, baseX, baseY * 6);
    cabeza.fillRect(baseX * 5, baseY * 2, baseX, baseY * 6);
    cabeza.fillRect(baseX * 6, baseY * 4, baseX, baseY * 3);
    cabeza.fillRect(baseX * 10, baseY * 4, baseX, baseY * 4);
    cabeza.fillRect(baseX * 11, baseY * 4, baseX, baseY * 4);
    cabeza.fillRect(baseX * 12, baseY * 5, baseX, baseY * 3);
    cabeza.fillRect(baseX * 13, baseY * 6, baseX, baseY * 2);
    
    // Boca
    cabeza.fillRect(baseX * 3, baseY * 11, baseX * 12, baseY * 1);
    cabeza.fillRect(baseX * 4, baseY * 12, baseX, baseY * 1);
    cabeza.fillRect(baseX * 6, baseY * 10, baseX, baseY * 4);
    cabeza.fillRect(baseX * 7, baseY * 11, baseX, baseY * 2);
    cabeza.fillRect(baseX * 9, baseY * 12, baseX * 2, baseY * 1);
    cabeza.fillRect(baseX * 9, baseY * 10, baseX, baseY * 1);
    cabeza.fillRect(baseX * 11, baseY * 12, baseX, baseY * 2);
    cabeza.fillRect(baseX * 12, baseY * 10, baseX, baseY * 1);
    cabeza.fillRect(baseX * 13, baseY * 12, baseX * 2, baseY * 1);
    
    cabeza.fillStyle = "#210400";
    cabeza.fillRect(baseX * 3, baseY * 4, baseX, baseY * 3);
    cabeza.fillRect(baseX * 6, baseY * 3, baseX, baseY * 1);
    cabeza.fillRect(baseX * 4, baseY * 2, baseX, baseY * 2);
    cabeza.fillRect(baseX * 5, baseY * 2, baseX, baseY * 1);
    cabeza.fillRect(baseX * 9, baseY * 3, baseX, baseY * 4);
    cabeza.fillRect(baseX * 10, baseY * 2, baseX, baseY * 2);
    cabeza.fillRect(baseX * 11, baseY * 3, baseX, baseY * 1);
    cabeza.fillRect(baseX * 12, baseY * 4, baseX, baseY * 1);
    
    // Más detalles de la boca
    cabeza.fillRect(baseX * 5, baseY * 9, baseX, baseY * 2);
    cabeza.fillRect(baseX * 3, baseY * 9, baseX, baseY * 2);
    cabeza.fillRect(baseX * 2, baseY * 10, baseX, baseY * 2);
    cabeza.fillRect(baseX * 3, baseY * 12, baseX, baseY * 2);
    cabeza.fillRect(baseX * 4, baseY * 10, baseX, baseY * 1);
    cabeza.fillRect(baseX * 5, baseY * 9, baseX, baseY * 2);
    cabeza.fillRect(baseX * 7, baseY * 10, baseX, baseY * 1);
    cabeza.fillRect(baseX * 8, baseY * 9, baseX, baseY * 2);
    cabeza.fillRect(baseX * 10, baseY * 10, baseX, baseY * 1);
    cabeza.fillRect(baseX * 11, baseY * 9, baseX, baseY * 2);
    cabeza.fillRect(baseX * 13, baseY * 9, baseX, baseY * 2);
    
    // color:#bb6302
    cabeza.fillStyle = "#bb6302";
    cabeza.fillRect(baseX * 1, baseY * 2, baseX * 1, baseY * 3);
    cabeza.fillRect(baseX * 1, baseY * 14, baseX * 1, baseY * 1);
    cabeza.fillRect(baseX * 2, baseY * 15, baseX * 1, baseY * 1);
    cabeza.fillRect(baseX * 3, baseY * 14, baseX * 1, baseY * 2);



     //Cuerpo
    cuerpo.fillStyle = "white";
    cuerpo.strokeStyle = "black";
    cuerpo.lineWidth = 15;
    cuerpo.strokeRect(20, 505, 560, 510);
    cuerpo.fillRect(20, 505, 560, 510);
    //boton
    cuerpo.fillStyle = "Black";
    cuerpo.fillRect(280, 560, 60, 60);
    cuerpo.fillRect(280, 700, 60, 60);
    cuerpo.fillRect(280, 840, 60, 60);
    cuerpo.fillStyle = "Gray";
    cuerpo.fillRect(280, 560, 30, 30);
    cuerpo.fillRect(280, 700, 30, 30);
    cuerpo.fillRect(280, 840, 30, 30);
    cuerpo.fillStyle = "white";
    cuerpo.fillRect(280, 560, 30, 15);
    cuerpo.fillRect(280, 700, 30, 15);
    cuerpo.fillRect(280, 840, 30, 15);

    //Cuerpo
    cuerpo.fillStyle = "white";
    cuerpo.strokeStyle = "black";
    cuerpo.lineWidth = 15;
    cuerpo.strokeRect(-50, 1017, 700, 510);
    cuerpo.fillRect(-50, 1017, 700, 510);
    //boton
    cuerpo.fillStyle = "Black";
    cuerpo.fillRect(280, 1110, 60, 60);
    cuerpo.fillRect(280, 1240, 60, 60);
    cuerpo.fillRect(280, 1380, 60, 60);
    cuerpo.fillStyle = "Gray";
    cuerpo.fillRect(280, 1110, 30, 30);
    cuerpo.fillRect(280, 1240, 30, 30);
    cuerpo.fillRect(280, 1380, 30, 30);
    cuerpo.fillStyle = "white";
    cuerpo.fillRect(280, 1110, 30, 15);
    cuerpo.fillRect(280, 1240, 30, 15);
    cuerpo.fillRect(280, 1380, 30, 15);

    //brazos
    brazos.fillStyle = "#3c0701"
    brazos.strokeStyle = "black";
    brazos.lineWidth = 15;
    brazos.strokeRect(589, 700, 400, 60);
    brazos.strokeRect(-387, 700, 400, 60);
    brazos.fillRect(583, 700, 400, 60);
    brazos.fillRect(-380, 700, 400, 60);
    //extras
    brazos.fillStyle = "#210400"
    brazos.fillRect(640, 700, 70, 60);
    brazos.fillStyle = "#210400"
    brazos.fillRect(780, 700, 70, 60);
    brazos.fillRect(920, 700, 70, 60);
    //extras
    brazos.fillStyle = "#210400"
    brazos.fillRect(-400, 700, 70, 60);
    brazos.fillStyle = "#210400"
    brazos.fillRect(-260, 700, 70, 60);
    brazos.fillRect(-120, 700, 70, 60);
    

}
