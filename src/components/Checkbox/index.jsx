import { useContext } from "react";
import "./style.css";
import MainContext from "../../context/MainContext";

export default function Checkbox({ id, label }) {
  const { alphaCheck, setAlphaCheck } = useContext(MainContext);

  return (
    <>
      <input
        data-testid="checkbox-order"
        onChange={() => setAlphaCheck(!alphaCheck)}
        id={`input-${id}`}
        type="checkbox"
        checked={alphaCheck}
      />
      <label data-testid="checkbox-label" htmlFor={`input-${id}`}>
        {label}
      </label>
    </>
  );
}
