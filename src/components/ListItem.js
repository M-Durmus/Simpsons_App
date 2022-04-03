import React from "react";
import { SimpsonsContext } from "../context/SimpsonsContext";
import { useContext } from "react";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { useNavigate } from "react-router-dom";

const ListItem = ({ simpson, index }) => {
  const navigate = useNavigate();
  const { simpsons, setSimpsons } = useContext(SimpsonsContext);
  if (!simpson?.id) return null;
  console.log(simpson)

  const up = () => {
    const currentIndex = simpsons.indexOf(simpson);
    if (currentIndex === 0) return;
    const firstPart = simpsons.slice(0, currentIndex - 1);
    const otherPart = simpsons.slice(currentIndex - 1);
    const currentIndexAtOtherPart = otherPart.indexOf(simpson);
    delete otherPart[currentIndexAtOtherPart];
    const newSimspsons = firstPart.concat([simpson]).concat(otherPart).filter(e => e?.id);
    setSimpsons(newSimspsons);
  }
  const down = () => {
    const currentIndex = simpsons.indexOf(simpson);
    if (currentIndex === simpsons.length - 1) return;
    const firstPart = simpsons.slice(0, currentIndex + 2);
    const otherPart = simpsons.slice(currentIndex + 2);
    const currentIndexAtFirstPart = firstPart.indexOf(simpson);
    delete firstPart[currentIndexAtFirstPart];
    const newSimspsons = firstPart.concat([simpson]).concat(otherPart).filter(e => e?.id);
    setSimpsons(newSimspsons);
  }
  const trash = () => {
    setSimpsons(simpsons.filter((e) => e.id != simpson.id));
  }
const nav = () => {
   navigate('/' + simpson.id)
}
  return <tr>
    <td onClick={() => nav()}>
      {index + 1}
    </td>
    <td onClick={() => nav() }>
      <img className="list-item-img" src={simpson.avatar.split('/revision')[0]} alt={simpson.id} />
    </td>
    <td className="list-item-name" onClick={() => nav() }>
      {simpson.name}
    </td>
    <td><ArrowCircleUpIcon color="primary" onClick={up}></ArrowCircleUpIcon></td>
    <td><ArrowCircleDownIcon color="disabled" onClick={down}></ArrowCircleDownIcon></td>
    <td><DeleteSweepIcon color="error" onClick={trash}></DeleteSweepIcon></td>
  </tr>;
};


export default ListItem;
