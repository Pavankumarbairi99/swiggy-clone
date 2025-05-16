import { useRouteError } from "react-router-dom"
let Error=()=>{
    let errors = useRouteError();
    console.log(errors);
    return(
        <div className="container">
            <h1>Opps...Error!!</h1>
            <h3>{errors.status}: {errors.statusText} .!</h3>

        </div>
    )
}
export default Error;