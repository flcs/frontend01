import React from "react";
import IUsuario from "../entities/User";

interface IProps {
    usuario : IUsuario;
}

const Usuario :React.FC<IProps> = function ( { usuario } ) {
    return (
        <div>
            Meu componente: <br />
            <strong>Nome: </strong> { usuario.name } <br />
            <strong>E-mail: </strong> { usuario.email } <br />
            <br />
        </div>
    );
}

export default Usuario;