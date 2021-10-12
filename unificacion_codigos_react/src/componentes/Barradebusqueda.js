import { useForm } from "react-hook-form";

const BarraBusqueda = ( ) => {
    
    

    return (
        <div className="divBotondebusqueda">
        {/* <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"/>
        <form action="/busqueda" className="form" method='get'>
            <input type="text" placeholder="Search here ..." title="Buscar"  id="header-search" class="input" name="s" />
            <button><i className="fa fa-search"></i></button>
        </form> */}
     
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />


            <form class="example" action="action_page.php">
            <input type="text" placeholder="Search.." name="search" />
            <button type="submit"><i class="fa fa-search"></i></button>
            </form>
        </div>
    )
}

export default BarraBusqueda;