import React from "react";
import Input from "../../UI/Input";

import classes from "./MealItemForm.module.css";

const MealItemForm: React.FC<{ id: string }> = (props) => {
  return (
    <form className={classes.form}>
      <Input
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
      <button>+ Agregar</button>
    </form>
  );
};

export default MealItemForm;
