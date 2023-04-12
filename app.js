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
    static mostrarAlerta(mensaje){

    }
    static limpiarForm(){

    }
}
class Datos{
    //metodos
    static traerLibros(){

    }
    static agregarLibro(libro){

    }
    static removerLibro(isbn){

    }
}
//agregar evento submit al formulario
document.getElementById('libroForm').addEventListener('submit',(e) => {
    e.preventDefault();
});