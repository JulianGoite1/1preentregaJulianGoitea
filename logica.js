    /*Sitio de Ollie Skate & Surf con Javascript*/

    /*Login de mi sitio web*/

    console.log ("Bienvenidos a Ollie Skate & Surf")

    let nombreUsurio = prompt ("Ingrese su Nombre y Apellido para registrarse")

    console.log("Hola "+nombreUsurio+" "+"gracias por registrarte a mi tienda online")

    /*Simulador de carrito*/

    const ropa= prompt("¿Que producto te gustaria comprar? Elija el numero de la opcion que desee (1 skate, 2 accesorios, 3 oversizes)"); 

        
        switch (ropa){
            case "1":
            
            console.log("5 Oversizes dispobles de Santa Cruz $5999 c/u");
            break;

            case "2":

            console.log(" Skate Element Unica Edicion Ilimitada $99.999 c/u");
                break;

            case "3":

            console.log("8 Gorros disponibles Urban DC $3.999 c/u");
                break;

            default:

            console.log ("Lo siento no tenemos ese tipo de productos");
                break;

        }
        
        const ropa1= prompt("¿Que producto te gustaria comprar? (opcion 1 skate, opcion 2 accesorios, opcion 3 oversizes)"); 

        
        switch (ropa1){
            case "1":
            
            console.log("5 Oversizes disponibles de Santa Cruz $5999 c/u");
            break;

            case "2":

            console.log("Skate Element Unica Edicion Ilimitada $99.999 c/u");
                break;

            case "3":

            console.log("8 Gorros disponibles de Urban DC $3.999 c/u");
                break;

            default:

            console.log ("Lo siento no tenemos ese tipo de productos");
                break;

            }

            const ropa2= prompt("¿Que producto te gustaria comprar?(opcion 1 skate, opcion 2 accesorios, opcion 3 oversizes)");

        
            switch (ropa2){
                case "1":
                
                console.log("5 Oversizes disponibles de Santa Cruz $5999 c/u");
                break;
        
                case "2":
        
                console.log("Skate Element Unica Edicion Ilimitada $99.999 c/u");
                    break;
        
                case "3":
        
                console.log("8 Gorros disponibles de Urban DC $3.999 c/u");
                    break;
        
                default:
        
                console.log ("Lo siento no tenemos ese tipo de productos");
                    break;
        
                }

    /*Calculadora del subtotal del carrito*/            
                
                for (let i= 0; i < 110000; i++ ) {


                    const primerValor = parseInt(prompt("Para calcular su carrito de compras ingrese el primer valor"));
                    const segundoValor =parseInt(prompt("Acontinuacion ingrese el segundo valor"));
                    const operacion = prompt("Proceda a (sumar, restar o multiplicar)");

                    let resultado = 0;

                    switch (operacion ){
                        case "sumar":
                            resultado = primerValor + segundoValor;
                            alert ("El subtotal de su carrito es $" + resultado);
                            console.log("El subtotal de tu carrito es $" + resultado);
                            break;

                        case "restar":
                            resultado = primerValor - segundoValor;
                            alert ("El subtotal de su carrito es $" + resultado);
                            console.log("El subtotal de tu carrito es $" + resultado);
                            break;

                        case "multiplicar":
                            resultado = primerValor * segundoValor;
                            alert ("El subtotal de su carrito es $" + resultado);
                            console.log("El subtotal de tu carrito es $" + resultado);
                            break;

                        default:
                            alert ("Ese tipo de cuenta no es posible");
                            break;
                    
                        
                        }
                        let comentario = prompt("¿Que te parece el sitio oficial de OLLIE?");
                        alert (comentario = "Gracias por tu comentario, tendremos en cuenta tus criterios, te saluda Ollie Skate & Surf");

    /*Link de mi sitio de Ollie Skate & Surf*/

                        console.log("Puedes dar un vistazo al sitio oficial de Ollie: https://ollieskatesurf.000webhostapp.com/index.html");
                        break;
                }

