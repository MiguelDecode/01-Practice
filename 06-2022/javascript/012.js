const IVA_GENERAL = 1.21;
const IVA_REDUCIDO = 1.1;

const item1 = {
  precio: 15,
  cantidad: 2,
  impuestos: IVA_GENERAL,
  calcularTotal: function () {
    return this.precio * this.cantidad * this.impuestos
  }
};

const item2 = {
  precio: 25,
  cantidad: 3,
  impuestos: IVA_REDUCIDO,
  calcularTotal: function () {
    return this.precio * this.cantidad * this.impuestos
  }
};

const factura = {
  // item1,
  // item2,
  calcularTotal: function (descuento) {
    return (item1.calcularTotal() + item2.calcularTotal() * descuento)
  }
};

console.log(factura.calcularTotal(0.9));
