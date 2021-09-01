import classes from "./MealsSummary.module.css";

import React from "react";

const MealsSumary = () => {
  return (
    <section className={classes.summary}>
      <h2>Platos deliciosos, entregados a tu puerta</h2>
      <p>
        Elige tu favorito de nuestra variada gamma de platos disponibles y
        disfruta una deliciosa preparación
      </p>
      <p>
        Todos nuestros platos son preparados con ingredientes de la más alta
        calidad, justo a tiempo y porsupuesto cocinados por chefs experimentados
      </p>
    </section>
  );
};

export default MealsSumary;
