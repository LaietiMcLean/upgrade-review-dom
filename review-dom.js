window.onload = () => {

//Iteración 1
//1.1
    const countries = [
        'Japón', 
        'Nicaragua', 
        'Suiza', 
        'Australia', 
        'Venezuela'
    ];

        let xUl = document.createElement("ul");

        for (let x of countries) {
            let xLi = document.createElement("li");
            xLi.innerHTML += x;
            xUl.appendChild(xLi);
        }

        document.body.appendChild(xUl); //Imprime correctamente la lista countries

//1.2
    let remove = document.getElementsByClassName("fn-remove-me")[0];
    remove.remove();  //Se elimina el elemento con texto "bye bye"

//1.3
    const cars = [
        'Mazda 6', 
        'Ford fiesta', 
        'Audi A4', 
        'Toyota corola'
    ];
        
        let xUlx = document.createElement("ul")
            for (let x of cars) {
                let xLix = document.createElement("li");
                xLix.innerHTML += x;
                xUlx.appendChild(xLix);
            }
    
    const holahola = document.getElementsByTagName("div")[0];
    holahola.appendChild(xUlx); //Inserta correctamente la lista en el div con atributo "printHere". 
    //Sin embargo, no he podido introducirlo "por su atributo", sino por ser un "div". 
    //Si hubiera habido más divs, hubiera hecho un bucle hasta localizar el div con ese atributo y entonces ejecutar la intrucción del <ul><li></li></ul>
    //Al haber un sólo div y no encontrar ninguna función para atajar, he descartado hacerlo
  
//1.4
    const countries1 = [
	    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
    ];

    var firstDiv = document.createElement("div");
    var firstUl = document.createElement("ul");
    firstDiv.appendChild(firstUl);
    
    document.body.appendChild(firstDiv);

    for (var x of countries1) {
        var manyLi = document.createElement("li");
        firstUl.appendChild(manyLi);

        var xtitl = x.title;
        var titHfour = document.createElement("h4");
        titHfour.innerText = xtitl;
        manyLi.appendChild(titHfour);

        var imag = document.createElement("img");
        imag.src = x.imgUrl;
        manyLi.appendChild(imag);
    }  //Se comprueba -> funciona 

//1.5
    let button1 = document.createElement("button");
    button1.innerText = "Remove last pic";
    document.body.appendChild(button1);

        button1.addEventListener("click", () => {
              firstUl.children[4].remove();
        });

//1.6
    let remove1 = document.createElement("button");
    remove1.innerText = "Remove 1st pic"
    document.body.appendChild(remove1);

        remove1.addEventListener("click", () => {
            firstUl.children[0].remove();
        });

    let remove2 = document.createElement("button");
    remove2.innerText = "Remove 2nd pic"
    document.body.appendChild(remove2);
    
        remove2.addEventListener("click", () => {
            firstUl.children[1].remove();
        });

    let remove3 = document.createElement("button");
    remove3.innerText = "Remove 3rd pic"
    document.body.appendChild(remove3);
    
        remove3.addEventListener("click", () => {
            firstUl.children[2].remove();
        });

    let remove4 = document.createElement("button");
    remove4.innerText = "Remove 4th pic"
    document.body.appendChild(remove4);
    
        remove4.addEventListener("click", () => {
            firstUl.children[3].remove();
        });


    


    



    

}