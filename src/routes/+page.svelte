<script>
  export let data;
  let { ach7_pizzas } = data;
  console.log(ach7_pizzas);
</script>

<h1>Pizzas</h1>
<ul>
  {#each ach7_pizzas as ach7_pizzas}
    <li>{ach7_pizzas.id}: {ach7_pizzas.name}</li>
  {/each}
</ul>
