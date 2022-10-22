import { createContext, useState } from "react";
export const DadosContext = createContext();

export default function ContextProvider({children}){

  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [img, setImg] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [token, setToken] = useState("")
  const [none, setNone]= useState("none")
  const [nameHabit, setNameHabit]=useState("")
  const [diasEscolhidos, setDiasEscolhidos]=useState([])

    return (
        <DadosContext.Provider value={{
            id, setId, 
            name, setName,
            img, setImg,
            email, setEmail,
            password, setPassword,
            token, setToken,
            none, setNone,
            nameHabit, setNameHabit,
            diasEscolhidos, setDiasEscolhidos
        }}>{children}</DadosContext.Provider>
    )
}