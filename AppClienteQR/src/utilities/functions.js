export const capitalizarPrimeraLetra = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const formatoFecha = (fecha) => {
  var date = new Date(fecha);
            var result = "" + ((date.getDate() + 1) > 9 ? '' : '0') + (date.getDate() + 1) + "/" + ((date.getMonth() + 1) > 9 ? '' : '0') + (date.getMonth() + 1) + "/" + date.getFullYear(); 
        return result;
}
