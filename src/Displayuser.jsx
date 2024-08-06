import { useContext } from "react"
import { Usercard } from "./App"
import { Loader } from "./loading"
export const Displayuser = () => {
    const { adddata, deleteuser, edituser, loading } = useContext(Usercard)
    return (
        <>
            {adddata.map((data) => (
                <div key={data.id} style={{ display: "inline-block", margin: "10px 0px 10px 40px" }}>
                    <div className="card" style={{ width: "25rem", height: "46rem" }} >
                        <img src={data.image} className="card-img-top" alt={data.name} style={{ width: 399, height: 250 }} />
                        <div className="card-body">
                            <h2 className="card-title text-center">{data.name}</h2>
                            <h4 className="card-text ">UserName : {data.username}</h4>
                            <h5 className="card-text mb-2">Email ID : {data.email}</h5>
                            <h5 className="card-text">Contact No:{data.number}</h5>
                            <a href={data.website} target="_blank" >{data.website}</a>
                            <div className="text-center">
                                <button className="ml-0 p-2 mt-3 " style={{ border: 0, backgroundColor: "blue", color: "white", borderRadius: 15 }} onClick={() => deleteuser(data.id)}>DELETE</button>
                                <button className="ml-5 p-2 mt-3" style={{ border: 0, backgroundColor: "blue", color: "white", borderRadius: 15 }} onClick={() => edituser(data)}>EDIT</button>
                            </div>
                        </div>
                    </div>
                </div >
            ))}
            {loading && <Loader />}
        </>
    )
}