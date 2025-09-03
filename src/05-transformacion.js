
const products = [
  { id: 1, name: "Laptop", price: 999, category: "Electronics", brand: "HP", stock: 15 },
  { id: 2, name: "Mouse", price: 25, category: "Electronics", brand: "Logitech", stock: 50 },
  { id: 3, name: "Desk", price: 200, category: "Furniture", brand: "IKEA", stock: 8 },
  { id: 4, name: "Chair", price: 150, category: "Furniture", brand: "IKEA", stock: 3 },
  { id: 5, name: "Keyboard", price: 80, category: "Electronics", brand: "Corsair", stock: 20 }
];

// 1. Campo con priceWithTax (19% IVA)
const productos_con_IVA = products.map(p => ({
  ...p,
  priceWithTax: (p.price * 1.19).toFixed(2)
}));

// 2. Campo status basado en stock
const productos_estado = productos_con_IVA.map(p => {
  let status = "Low";
  if (p.stock >= 20) status = "High";
  else if (p.stock >= 10) status = "Medium";
  return { ...p, status };
});

// 3. Resumen de inventario 
const Re_inventario = productos_estado.reduce((resumen, p) => {
  if (!resumen[p.category]) {
    resumen[p.category] = { cantidad: 0, stockTotal: 0 };
  }
  resumen[p.category].cantidad += 1;
  resumen[p.category].stockTotal += p.stock;
  return resumen;
}, {});

console.log("Productos con IVA:", productos_con_IVA);
console.log("Productos con Estado:", productos_estado);
console.log("Resumen de inventario:", Re_inventario);
