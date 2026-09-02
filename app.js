const products = [
  { id: 1, title: "Laptop", price: 15000000, category: "elektronik" },
  { id: 2, title: "Smartphone", price: 5000000, category: "elektronik" },
  { id: 3, title: "Meja Kerja", price: 1200000, category: "perabotan" }
];

const productNames = products.map(product => product.title);
console.log(productNames); 

const cheapProducts = products.filter(product => product.price < 10000000);
console.log(cheapProducts);

const priceList = products.map(product => product.price);
console.log(priceList);

const container = document.getElementById("product-list");

const htmlContent = products.map(product => {
  return `
    <div class="card">
      <h3>${product.title}</h3>
      <p>Harga: Rp ${product.price}</p>
      <span>Kategori: ${product.category}</span>
    </div>
  `;
}).join("");

container.innerHTML = htmlContent;

const searchInput = document.getElementById("search-input");

function renderProducts(dataToRender) {
  const htmlContent = dataToRender.map(product => {
    return `<div><h3>${product.title}</h3>
            <p>Harga: Rp ${product.price}</p>
            <span>Kategori: ${product.category}</span>
          </div>`;
  }).join("");
  container.innerHTML = htmlContent;
  
}

// Tampilkan semua produk saat pertama kali dimuat
renderProducts(products);

// Dengarkan setiap kali user mengetik
searchInput.addEventListener("input", function(event) {
  const keyword = event.target.value.toLowerCase();
  
  // Saring data berdasarkan keyword
  const filtered = products.filter(product => 
    product.title.toLowerCase().includes(keyword)
  );

  const fiteredCategory = products.filter(product => 
    product.category.toLowerCase().includes(keyword)
  );

  // Render ulang dengan data yang sudah disaring!
  renderProducts(filtered);
  renderProducts(fiteredCategory);
});
