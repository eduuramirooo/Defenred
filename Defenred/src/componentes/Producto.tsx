import "./css/Producto.css";
const Producto =(props: {titulo:string;imagen:string;precio:number }) =>{
    const imgRuta=props.imagen;
    const nombre=props.titulo;
    const precio=props.precio;

    return(
        <>
        <article  className="producto">
            <img src={imgRuta} alt="" />
            <h3>{nombre} <span>{precio}€</span></h3>
            <h3 id="ocultoProducto">Todos los gitanos fuera de España</h3>
        </article>
        </>
    );
}
export default Producto;