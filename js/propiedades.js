const PROPIEDADES =[
    {
        "name":"Casa con terminados de lujo",
        "description":"Descubre esta encantadora propiedad de 180m² cubiertos en un lote de 400m², ubicada en el corazón de un barrio residencial consolidado. La casa cuenta con un luminoso living-comedor con ventanales que dan al jardín, cocina integrada con mesada de granito y office, tres dormitorios (el principal en suite), dos baños completos y un práctico lavadero. El exterior ofrece un amplio jardín con parrilla, garage para dos vehículos y espacio adicional para expansión. La propiedad se encuentra a solo 5 cuadras del centro comercial principal y con excelente conectividad de transporte público.",
        "price":"4500000",
        "details":[2,3,4]
    },
    {
        "name":"Casa con terminados de lujo",
        "description":"Descubre esta encantadora propiedad de 180m² cubiertos en un lote de 400m², ubicada en el corazón de un barrio residencial consolidado. La casa cuenta con un luminoso living-comedor con ventanales que dan al jardín, cocina integrada con mesada de granito y office, tres dormitorios (el principal en suite), dos baños completos y un práctico lavadero. El exterior ofrece un amplio jardín con parrilla, garage para dos vehículos y espacio adicional para expansión. La propiedad se encuentra a solo 5 cuadras del centro comercial principal y con excelente conectividad de transporte público.",
        "price":"4500000",
        "details":[2,3,4]
    },
    {
        "name":"Casa con terminados de lujo",
        "description":"Descubre esta encantadora propiedad de 180m² cubiertos en un lote de 400m², ubicada en el corazón de un barrio residencial consolidado. La casa cuenta con un luminoso living-comedor con ventanales que dan al jardín, cocina integrada con mesada de granito y office, tres dormitorios (el principal en suite), dos baños completos y un práctico lavadero. El exterior ofrece un amplio jardín con parrilla, garage para dos vehículos y espacio adicional para expansión. La propiedad se encuentra a solo 5 cuadras del centro comercial principal y con excelente conectividad de transporte público.",
        "price":"4500000",
        "details":[2,3,4]
    },
]

function renderPropiedades(){
    const container=document.getElementById("propiedad-container"); // guardamos el div del html en una constante
    container.innerHTML=""; //reset conatiner (contenido) 
    PROPIEDADES.forEach((prop, index) =>{
        const propiedadesDiv=document.createElement("div"); // se crea un div dentro del existente
        propiedadesDiv.classList.add("ventas"); // Le da la clase 'ventas' al div correspondiente.

        propiedadesDiv.innerHTML=`
        <img src="./img/casa-lujo.jpg" alt="casa-lujo" />
            <h2>Casa con terminados de lujo</h2>
            <p class="text-prop"> ${prop.description}</p>
            <p class="price">U$ ${prop.price}</p>
            <div class="iconos-box">
              <div class="iconos">
                <img src="./img/icono_inodoro.png" alt="" />
                <p>2</p>
              </div>
              <div class="iconos">
                <img src="./img/icono-estacionamiento.png" alt="" />
                <p>3</p>
              </div>
              <div class="iconos">
                <img src="./img/icono-dormitorio.png" alt="" />
                <p>4</p>
              </div>
            </div>
            <div class="boton">
              <button>VER</button>
            </div>
        
        `;
        container.appendChild(propiedadesDiv);
    })
}
renderPropiedades()