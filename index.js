import Freecurrencyapi from "@everapi/freecurrencyapi-js";

const freecurrencyapi = new Freecurrencyapi(
  "fca_live_lmVZTH5kr6z1pqcj8znzEVpiLM16A86G4ho8EuH9"
);

export async function getCurrencyValue(base, currency, units) {
  await freecurrencyapi
    .latest({
      base_currency: base,
      currencies: currency,
    })
    .then((response) => {
      var key = Object.keys(response.data)[0];
      var val = response.data[key];

      console.log(val * units);
      return val * units;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
  return null;
}

getCurrencyValue("INR", "USD", 500);
