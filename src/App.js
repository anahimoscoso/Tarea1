import { BrowserRouter } from "react-router-dom";
import { RoutesLayoutMoscoso }  from "./routes/RoutesLayoutMoscoso";
import './App.css';
import { NavbarMoscoso } from "./routes/NavbarMoscoso";
import React from "react";

export const userContext = React.createContext()

function App() {
    const user = {
        name: 'Anahi Adela Moscoso Blanco',
        img: "https://img.freepik.com/vector-gratis/ilustracion-vector-dibujos-animados-lindo-corgi-beber-leche-te-boba-bebida-animal-concepto-aislado-vector-estilo-dibujos-animados-plana_138676-1943.jpg?w=2000"
    }
    return (
        <div className="App">
            <userContext.Provider value={user}>
                <BrowserRouter>
                    <RoutesLayoutMoscoso /> 
                </BrowserRouter>
            </userContext.Provider>

        </div>
    );
}

export default App;
