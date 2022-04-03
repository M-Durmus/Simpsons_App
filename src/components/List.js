import React from "react";
import { SimpsonsContext } from "../context/SimpsonsContext";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import ListItem from "./ListItem";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const List = () => {
  const { simpsons, setSimpsons } = useContext(SimpsonsContext);
  const navigate = useNavigate();

  return <div>
    <h3 style={{ textAlign: 'center' }}>Simpsons List</h3>
    <table style={{ width: '100%' }}>
      <tbody>
        {simpsons.map((simpson, index) => {
          return <ListItem simpson={simpson} index={index} key={simpson.id} />;
        })}
      </tbody>
    </table>
    <p style={{ textAlign: 'center' }}>
      <AddCircleOutlineIcon color="primary" fontSize="large" onClick={() => navigate('/add')} variant="contained">Add</AddCircleOutlineIcon>
    </p>
  </div>;
};

export default List;
