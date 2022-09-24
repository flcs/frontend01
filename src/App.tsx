import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Usuario from './components/User';
import IUsuario from './entities/User';
import api from './services/api';

function App() {
  let [ lista_usuarios, setUsuarios ] = useState<IUsuario[]>([]);

  useEffect(() => {
    api.get<IUsuario[]>('/user-list').then(response => {
      // console.log(response);
      setUsuarios(response.data);
      // lista_usuarios = response.data;
      // console.log(response.data);
    });
  }, []);
  
  // let lista_usuarios: IUsuario[] = [
  //   { name: 'Fernando', email: 'f@gmail.com'},
  //   { name: 'Henrique', email: 'h@gmail.com'},
  //   { name: 'Carlinha', email: 'c@gmail.com'}
  // ];

  return (
    <>
      <Header title="Página Inicial" />
      <Header title="Outro ..." />
      <h1 className='test'>Hello Dev!</h1>
      <Menu >
        <ul className="test" >
          <li data-testid="teste1">Home</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
      </Menu>
      { 
          // lembrar que map é um FOR
          lista_usuarios.map(usu => 
              <Usuario
                  key={ usu.email }
                  usuario={ { name: usu.name, email: usu.email } }
              />
          )
      }
    </>
  );
}

export default App;
