import { Link, Outlet } from 'react-router-dom'
import "./App.css"
const Topbutton = () => {
    return (
        <>
            <div style={{
                background: "rgb(2, 0, 36)", backgroundImage: "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 22%, rgba(0, 212, 255, 1) 100%)", display: "flex", justifyContent: "space-around", alignItems: "center", height: 50
            }}>
                <Link to="/" style={{ backgroundColor: "white", margin: 10, color: "black", borderRadius: 8, padding: 5 }}>Data Form </Link>
                <Link to="/data" style={{ backgroundColor: "white", margin: 10, color: "black", borderRadius: 8, padding: 5 }}>User Data </Link>
            </div>
            <Outlet />
        </>
    )
}
export default Topbutton;