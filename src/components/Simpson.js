import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SimpsonsContext } from "../context/SimpsonsContext";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const Simpson = () => {
  const { simpsonId } = useParams();
  const navigate = useNavigate();
  const { simpsons } = useContext(SimpsonsContext);

  if (!simpsons.length) return null;

  let currentSimpson = simpsons.filter((simpson) => simpson.id == simpsonId)?.pop();
  if (!currentSimpson?.id) return null;

  return <div>
    <h3 style={{ textAlign: 'center', position: 'relative' }}>
      Details
      <KeyboardBackspaceIcon onClick={() => navigate('/')} fontSize="large" style={{ position: 'absolute', left: 0 }} />
    </h3>
    <div style={{ textAlign: 'center' }}>
      <img src={currentSimpson.avatar.split('/revision')[0]} alt={currentSimpson.id} style={{ maxWidth: '200px' }} />
    </div>
    <h3 style={{ textAlign: 'center', marginBottom: 0 }}>{currentSimpson.name}</h3>
    <h4 style={{ textAlign: 'center', marginTop: 0, color: 'gray' }}>{currentSimpson.job}</h4>
    <p style={{ wordBreak: 'break-all', textAlign: 'justify' }}>
      {currentSimpson.description}
    </p>
  </div>;
};

export default Simpson;
