// seleção dos elemento
const images = document.querySelectorAll(".image-container img");


// lógica de carregaamento sob medida das imagens
const observer = new IntersectionObserver((entries, observer) =>{
       
    entries.forEach((entry) =>{
        if(!entry.isIntersecting) return;

        const image = entry.target; // traz as informaçãoes do elemento passado por parametro

        image.src = image.src.replace("&w=10&", "&w=1000&"); //altera o conteudo do atributo src do elemento

        observer.unobserve(image); // toggle o src.
    }); 

}, {});

// Chama o  objeto New Intersection ao carregar cada imagem
images.forEach((image) =>{
    observer.observe(image); // método da new Intersection
});
