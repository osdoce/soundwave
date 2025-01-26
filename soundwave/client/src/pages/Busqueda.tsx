import SearchFormProps from "../interfaces/SearchFormProps";

export default function Busqueda(props: SearchFormProps) {
    return (
        <form>
            <div className="form-group">
                <br/>
                <label htmlFor="search">Welcome to Dora Trips</label>
                <input
                    type="text"
                    className="form-control"
                    id="search"
                    placeholder="Search for a city"
                    value={props.cuidadBusc}
                    onChange={(e) => props.onChange(e.target.value)}
                />
            </div>
        </form>
    );

}