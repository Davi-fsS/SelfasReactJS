import { useEffect, useState } from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import StatusSelfie from './components/StatusSelfie/StatusSelfie';

function App() {

  const [selfies, setSelfies] = useState([])
  const [name, setName] = useState('')

  useEffect(() => {
    const res = {
      person: {
        name: 'Davi',
        RA: '20.01099-0',
        email: '20.01099-0@maua.br'
      },
      selfie: [
        {
          id: 0,
          sended: '04/10/2022',
          situation: 'DECLINED',
          observations: 'Foto com boné'
        },
        {
          id: 1,
          sended: '04/10/2022',
          situation: 'PENDING',
          observations: 'Foto com óculos'
        },
        {
          id: 2,
          sended: '04/10/2022',
          situation: 'APPROVED',
          observations: ''
        },
      ]
    }
    setName(res.person.name)
    setSelfies(res.selfie)
  }, [])

  return (
    <div className="App">
      <Profile name={name} />
      <StatusSelfie selfies={selfies} />
    </div>
  );
}

export default App;
