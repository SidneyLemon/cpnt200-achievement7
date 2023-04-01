import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data } = await supabase.from("ach7_pizzas").select();
  return {
    ach7_pizzas: data ?? [],
  };
}
          