import { useContext } from "react"
import './App.css'
import { Usercard } from "./App"
import { Loader } from "./loading"
export const Userdata = () => {
    const { persondata, updatedata, userdata, editstate, loading } = useContext(Usercard)
    return (
        <>
            <div>
                <div className="card text-center" style={{ margin: "10px 40px 10px 40px", background: "rgb(238, 174, 202)", backgroundImage: "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)" }}>
                    <div className="card-header">
                        <h1>User Data Form</h1>
                    </div>
                    <div className="card-body">
                        <div className="input-group mb-3 pl-5 pr-5 pt-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
                            </div>
                            <input type="text" value={persondata.name} name="name" onChange={updatedata} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                        </div>
                        <div className="input-group mb-3 pl-5 pr-5 pt-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">User Name</span>
                            </div>
                            <input type="text" value={persondata.username} name="username" onChange={updatedata} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                        </div>
                        <div className="input-group mb-3 pl-5 pr-5 pt-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Email Address</span>
                            </div>
                            <input type="text" value={persondata.email} name="email" onChange={updatedata} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                        </div>
                        <div className="input-group mb-3 pl-5 pr-5 pt-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Phone Number</span>
                            </div>
                            <input type="text" value={persondata.number} name="number" className="form-control" onChange={updatedata} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                        </div>
                        <div className="input-group mb-3 pl-5 pr-5 pt-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Image URL</span>
                            </div>
                            <input type="url" value={persondata.image} name="image" className="form-control" onChange={updatedata} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                        </div>
                        <div className="input-group mb-3 pl-5 pr-5 pt-3">
                            <input type="url" value={persondata.website} name="website" onChange={updatedata} className="form-control" placeholder="Website Data" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                                <span className="input-group-text" id="basic-addon2">@example.com</span>
                            </div>
                        </div>
                        <button type="button" onClick={userdata} className="btn btn-primary btn-lg mt-3">{editstate ? "EDIT" : "SUBMIT"}</button>
                    </div>
                </div>
            </div>
            {loading && <Loader />}
        </>
    )
}