import { TextField } from '@mui/material';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { SimpsonsContext } from '../context/SimpsonsContext';
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const Add = () => {
  const [avatar, setAvatar] = useState('');
  const [description, setDescription] = useState('');
  const [job, setJob] = useState('');
  const [name, setName] = useState('');
  const { simpsons, setSimpsons } = useContext(SimpsonsContext);
  const navigate = useNavigate();


  const nextSimpsomId = () => {
    let maxId = 0;
    simpsons.forEach(simpson => {
      if (simpson.id > maxId) maxId = simpson.id;
    });
    return parseInt(maxId) + 1;
  }

  const handleAdd = () => {

    if (!avatar.length || !description.length || !job.length || !name.length) return;

    const id = nextSimpsomId();
    const newSimpson = {
      avatar, description, job, name, id
    }

    setSimpsons(simpsons.concat([newSimpson]));
    navigate('/');
  }


  return (

    <div>
      <h3 style={{ textAlign: 'center', position: 'relative' }}>
        <KeyboardBackspaceIcon onClick={() => navigate('/')} fontSize="large" style={{ position: 'absolute', left: 0 }} />
        Add New Character
      </h3>
      Name Surname:
      <input className='form-input' value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      Job Title:
      <input className='form-input' value={job} onChange={(e) => setJob(e.target.value)} placeholder="Job" />
      About Him/Her:
      <textarea rows={5} className='form-input' value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      Image link:
      <input className='form-input' value={avatar} onChange={(e) => setAvatar(e.target.value)} placeholder="Avatar" />
      <Button variant="contained" onClick={handleAdd} style={{ width: '100%' }}>Add character</Button>
    </div >
  )
}

export default Add
