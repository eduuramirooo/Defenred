import Slider from "./components/Slider";
const Index= () => {
        const images = [
            {url:'/img/formacion2-800x600.jpg',text:'Quienes somos', index:"/who" },
            {url:'/img/img2-600x800.jpg', text:'A donde vamos', index:"/where"},
            {url:'/img/defenred12_filtro-800x533.jpg', text:'Casa del respiro', index:"/casaR"},
          ]
    return (
<>
<div className="main">
        <Slider images={images}/>
        <h1>El proyecto</h1>
        <h2>Casa de respiro</h2>
                <div className="grid-3" style={{marginTop: '1%'}}>
                    <div>a</div>
                    <div>a</div>
                    <div>a</div>
                </div>
        </div>
        </>
            );
        }
export default Index;