let products = [
  {
    id: "P01",
    name: "Laptop MacBook Pro M3",
    price: 2000,
    category: "Laptop",
    inStock: true,
  },
  {
    id: "P02",
    name: "Chuột không dây Logitech",
    price: 45,
    category: "Phụ kiện",
    inStock: true,
  },
  {
    id: "P03",
    name: "Bàn phím cơ Keychron",
    price: 95,
    category: "Phụ kiện",
    inStock: false,
  },
  {
    id: "P04",
    name: "Man hinh Dell UltraSharp",
    price: 450,
    category: "Man hinh",
    inStock: true,
  },
  {
    id: "P05",
    name: "Tai nghe Sony WH-1000XM5",
    price: 350,
    category: "Phụ kiện",
    inStock: true,
  },
];
// Case 1
const filterItem = (obj) => {
    let result = obj.filter(products => products.inStock === true).sort((a,b) => b.price - a.price);
    return result;
}

console.log(filterItem(products));

// Case 2
const filterCategory = (obj) =>{
    let result1 = obj.filter(cat => cat.category === "Phụ kiện").map(spec => spec.name);
    return result1;
}

console.log(filterCategory(products));

// Case 3
const totalSum = (obj) =>{
    let result2 = obj.filter(s => s.inStock === true).reduce((total,b) => total + b.price, 0);
    return `Tổng là: ${result2}`; 
}

console.log(totalSum(products));