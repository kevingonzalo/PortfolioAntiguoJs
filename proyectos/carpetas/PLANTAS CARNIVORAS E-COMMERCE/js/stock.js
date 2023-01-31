const productos= [];
class Producto{
    constructor(id,nombre,precio,img,stock,cantidad){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.stock = stock;
        this.cantidad = cantidad || 1;
    }
    aumentarCantidad(){
        this.cantidad ++;
    }
    restarCantidad(){
        this.cantidad --;
    }

}
const producto1 = new Producto(1,"Pinguicula",150,"images/foto1.png" ,4);
const producto2 = new Producto(2,"Dionaea muscipula",250,'images/foto2.png',2);
const producto3 = new Producto(3,"Pinguicula",200,'images/foto3.png',1);
const producto4 = new Producto(4,"Drosera adelae",230,'images/foto4.png',5);
const producto5 = new Producto(5,"Drosera Alba",150,'images/foto5.png',6);
const producto6 = new Producto(6,"Dionaea muscipula",150,'images/foto6.png',5);
const producto7 = new Producto(7,"Drosera canpensis",350,'images/foto7.png',4);
const producto8 = new Producto(8,"Sarracenia",450,'images/foto8.png',3);
productos.push(producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8);
