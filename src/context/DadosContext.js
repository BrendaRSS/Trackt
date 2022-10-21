import { createContext, useState } from "react";
import perfilImagem from "../assets/images/bobesponja.png"

export const DadosContext = createContext();

export default function ContextProvider({children}){

  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [img, setImg] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [token, setToken] = useState("")

    return (
        <DadosContext.Provider value={{
            id, setId, 
            name, setName,
            img, setImg,
            email, setEmail,
            password, setPassword,
            token, setToken
        }}>{children}</DadosContext.Provider>
    )
}