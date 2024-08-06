import { createContext, useEffect, useState } from 'react'
import { Userdata } from './Userdata'
import { Displayuser } from './Displayuser'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Topbutton from './buttonlink'
import { readuserdataapi, createuserdataapi, deleteuserdataapi, updateuserdataapi } from './api'
export const Usercard = createContext(null)
function App() {
  const [adddata, setadddata] = useState([])
  const [editstate, seteditstate] = useState("")
  const [loading, setloading] = useState(false)
  const [persondata, setpersondata] = useState({
    name: "",
    username: "",
    email: "",
    number: "",
    website: "",
    image: ""
  })
  const updatedata = (e) => {
    setpersondata({
      ...persondata,
      [e.target.name]: e.target.value,
    }
    )
  }
  useEffect(() => {
    setpersondata(editstate)
  }, [editstate])

  const adduserdata = async (data) => {
    setloading(true)
    const userdata = await createuserdataapi(data);
    setadddata([...adddata, userdata])
    setloading(false)
  }
  const userdata = () => {
    if (editstate) {
      editbutton(persondata, editstate.id)
    }
    else {
      adduserdata(persondata)
    }
    setpersondata({
      name: "",
      username: "",
      email: "",
      number: "",
      website: "",
      image: ""
    }
    )
  }
  const getuserdata = async () => {
    setloading(true)
    const currentdata = await readuserdataapi()
    setadddata(currentdata)
    setloading(false)
  }
  useEffect(() => {
    getuserdata()
  }, [])
  const deleteuser = async (id) => {
    setloading(true)
    const currentdata = await deleteuserdataapi(id)
    const tempdata = adddata.filter((data) => data.id !== currentdata.id)
    setadddata(tempdata)
    setloading(false)
  }
  const edituser = (cdata) => {
    seteditstate(cdata)
    alert("Ready for edit")
  }
  const editbutton = async (eobj, id) => {
    const currentdata = await updateuserdataapi(eobj, id)
    const tempuser = [...adddata]
    const tempindex = tempuser.findIndex((data) => data.id === id)
    tempuser[tempindex] = { ...tempuser[tempindex], ...eobj }
    setadddata(tempuser)
    seteditstate("")
    setpersondata({
      name: "",
      username: "",
      email: "",
      number: "",
      website: "",
      image: ""
    }
    )
  }
  return (
    <>
      <Usercard.Provider value={{ adddata, setadddata, persondata, setpersondata, updatedata, userdata, deleteuser, edituser, editstate, loading }}>
        <BrowserRouter>
          <Routes>
            <Route element={<Topbutton />}>
              <Route path='/' element={<Userdata />} />
              <Route path='/data' element={<Displayuser />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Usercard.Provider>
    </>
  )
}

export default App
