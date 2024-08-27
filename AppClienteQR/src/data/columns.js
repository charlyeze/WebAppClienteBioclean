const commonsBarreras = [
  { name: "Fecha", property: "fecha", type: "Date" },
  { name: "Novedad", property: "nov_1", badge: true },
];

const commonsBarrerasLuz = [
  { name: "Fecha", property: "fecha", type: "Date" },
  { name: "Controlado", property: "controlado", type: "Boolean" },
  { name: "Cambio Placa", property: "cambio_placa", type: "Boolean" },
  { name: "Verificación", property: "verificacion", type: "Boolean" },
  { name: "Equipo Apagado", property: "equipo_apagado", type: "Boolean" },
];

const commonsExtraLuz = [
  { name: "Mosca Domestica", property: "mosca_domestica", type: "Number" },
  { name: "Mosca Carne", property: "mosca_carne", type: "Number" },
  { name: "Mosca Fruta", property: "mosca_fruta", type: "Number" },
  { name: "Mosca Humedad", property: "mosca_humedad", type: "Number" },
  { name: "Mosquito", property: "mosquito", type: "Number" },
];

const columns = {
  barrera1: commonsBarreras,
  barrera2: commonsBarreras,
  barrera3: commonsBarreras,
  barrera4: commonsBarreras,
  barreraluz: commonsBarrerasLuz.concat([
    { name: "Mosca", property: "mosca", type: "Number" },
    { name: "Insecto", property: "insecto", type: "Number" },
    { name: "Polilla", property: "polilla", type: "Number" },
  ]),
  barreraluz2: commonsBarrerasLuz.concat(commonsExtraLuz, [
    { name: "Polilla", property: "polilla", type: "Number" },
    { name: "Insecto Ambiente", property: "insecto_ambiente", type: "Number" },
  ]),
  barreraluz3: commonsBarrerasLuz.concat(commonsExtraLuz, [
    { name: "Polilla", property: "polilla", type: "Number" },
    { name: "Insecto Ambiente", property: "insecto_ambiente", type: "Number" },
    { name: "Carcoma", property: "carcoma", type: "Number" },
    { name: "Gorgojos", property: "gorgojos", type: "Number" },
  ]),
  barreraluz4: commonsBarrerasLuz.concat(commonsExtraLuz, [
    { name: "Polilla", property: "polilla", type: "Number" },
    { name: "Insecto Ambiente", property: "insecto_ambiente", type: "Number" },
    { name: "Lasioderma", property: "lasioderma", type: "Number" },
    { name: "Tribolium", property: "tribolium", type: "Number" },
    { name: "Sitaphilos", property: "sitaphilos", type: "Number" },
  ]),
  barreraluz5: commonsBarrerasLuz.concat(commonsExtraLuz, [
    { name: "Plodia", property: "plodia", type: "Number" },
    { name: "Ephestia", property: "ephestia", type: "Number" },
    { name: "Lasioderma", property: "lasioderma", type: "Number" },
    { name: "Palomilla cereales", property: "palomilla", type: "Number" },
    { name: "Tribolium", property: "tribolium", type: "Number" },
    {
      name: "Insecto Inespecífico",
      property: "insecto_inespecifico",
      type: "Number",
    },
  ]),
};

export default columns;
