import React, { FormEvent, useRef, useState } from "react";
import Input from "../../UI/Input";

import classes from "./MealItemForm.module.css";

const MealItemForm: React.FC<{
  id: string;
  onAddToCart: (amount: number) => void;
}> = (props) => {
  const amountInputRef = useRef<HTMLInputElement>(null);
  const [isValid, setIsValid] = useState(true);

  const addToCartHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current!.value;
    const enteredAmountAsNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountAsNumber < 1 ||
      enteredAmountAsNumber > 5
    ) {
      setIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountAsNumber);
  };

  return (
    <form className={classes.form} onSubmit={addToCartHandler}>
      <Input
        ref={amountInputRef}
        label="Cantidad"
        input={{
          id: props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">+ Agregar</button>
      {!isValid && <p>Cantidad incorrecta (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
