class Libro{
    constructor(titulo, autor, isbn){
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
    }
}
class UI{
    //metodos
    static mostrarLibros(){
    }
    static agregarLibro(libro){

    }
    static eliminarLibro(elemento){

    }
    static mostrarAlerta(mensaje, className){
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(mensaje));

        const container = document.getElementById('container');
        const form = document.getElementById('libroForm');

        container.insertBefore(div, form);
        setTimeout(()=>document.querySelector('.alert').remove(), 2000); //duración de la alerta

    }
    static limpiarForm(){
    }
}
class Datos{
    //metodos
    static traerLibros(){
        let libros;
        if(localStorage.getItem('libros')===null){
            libros = [];
        }else{
            libros = JSON.parse(localStorage.getItem('libros'));
        }
        return libros;
    }
    static agregarLibro(libro){
        const libros = Datos.traerLibros();
        libros.push(libro);
        localStorage.setItem('libros', JSON.stringify(libros));
    }
    static removerLibro(isbn){

    }
}
//agregar evento submit al formulario
document.getElementById('libroForm').addEventListener('submit',(e) => {
    e.preventDefault();
     //traer valores de los campos
     const titulo = document.getElementById('titulo').value;
     const autor = document.getElementById('autor').value;
     const isbn = document.getElementById('isbn').value;

     if(titulo === '' || autor === '' || isbn === ''){
        UI.mostrarAlerta('Por favor complete todos los datos', 'danger');
     }else{
        const libro = new Libro(titulo,autor,isbn);
        Datos.agregarLibro(libro);
     }
});