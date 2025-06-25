const USERS_TESTIMONIALES=[
    {
        "name":"Julio Garro",
        "opinion":"Excelente asesoramiento durante todo el proceso de compra. Me ayudaron a encontrar la casa perfecta en Belgrano dentro de mi presupuesto. Muy profesionales y siempre disponibles para resolver dudas.",
        "ranked":5
    },
    {
        "name":"Carlos Mendoza",
        "opinion":"Muy buen servicio de alquiler, me consiguieron inquilinos confiables rápidamente. Solo me hubiera gustado más comunicación durante las visitas.",
        "ranked":4
    },
    {
        "name": "Ana López",
        "opinion":"Poca atención al cliente, mucha tardanza para la resolucion de mi consulta.",
        "ranked":2.5
    }

]

function cargarTestimonios(){
    const container=document.getElementById("testimoniales-container");
    container.innerHTML="";

    USERS_TESTIMONIALES.forEach((testi,index) =>{
        const testimonialesDiv=document.createElement("div");
        testimonialesDiv.classList.add("testimonial");
    
        testimonialesDiv.innerHTML=`
            <img src="./img/comillas.png" alt="comillas" class="img-testimoniales">
            <p>${testi.opinion}</p>
            <p>${testi.ranked}/5</p>
            <cite>- ${testi.name}</cite>
    
        `;
        container.appendChild(testimonialesDiv);
    });
}

cargarTestimonios()
