import { useContext } from "react";
import "./style.css";
import MainContext from "../../context/MainContext";

export default function Checkbox({ id, label }) {
  const { alphaCheck, setAlphaCheck } = useContext(MainContext);

  return (
    <>
      <input
        onChange={() => setAlphaCheck(!alphaCheck)}
        id={`input-${id}`}
        type="checkbox"
        checked={alphaCheck}
      />
      <label htmlFor={`input-${id}`}>{label}</label>
    </>
  );
}
