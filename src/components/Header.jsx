import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'


const Header = ({ presupuesto, setPresupuesto, setIsValid, isValid, gastos, setGastos }) => {
    return (
        <header>
            <h1>Planificador de Gastos</h1>


            {isValid ?

                (<ControlPresupuesto
                    gastos={gastos}
                    presupuesto={presupuesto}
                    setGastos={setGastos}
                    setPresupuesto={setPresupuesto}
                    setIsValid={setIsValid}
                />)

                :

                (<NuevoPresupuesto
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setIsValid={setIsValid}
                />)}



        </header>
    )
}

export default Header
