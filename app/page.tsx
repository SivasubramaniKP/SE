
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      {/* Hero Section */}
      <header className="w-full max-w-3xl text-center mb-10">
        <h1 className="text-4xl font-bold mb-4 text-blue-700">ShopEase</h1>
        <p className="text-lg text-gray-700 mb-6">Your one-stop shop for the latest products and best deals!</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition">Shop Now</button>
      </header>

      {/* Product Grid */}
      <main className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Example Product 1 */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <img src="/globe.svg" alt="Product 1" className="w-24 h-24 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Wireless Headphones</h2>
          <p className="text-gray-600 mb-2">High-quality sound, noise cancellation, 20h battery.</p>
          <span className="text-blue-600 font-bold text-lg mb-4">$99.99</span>
          <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition">Add to Cart</button>
        </div>
        {/* Example Product 2 */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <img src="/window.svg" alt="Product 2" className="w-24 h-24 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Smart Watch</h2>
          <p className="text-gray-600 mb-2">Track fitness, heart rate, and notifications.</p>
          <span className="text-blue-600 font-bold text-lg mb-4">$149.99</span>
          <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition">Add to Cart</button>
        </div>
        {/* Example Product 3 */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <img src="/file.svg" alt="Product 3" className="w-24 h-24 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Bluetooth Speaker</h2>
          <p className="text-gray-600 mb-2">Portable, waterproof, 12h playtime.</p>
          <span className="text-blue-600 font-bold text-lg mb-4">$59.99</span>
          <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition">Add to Cart</button>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 text-gray-500 text-sm">© {new Date().getFullYear()} ShopEase. All rights reserved.</footer>
    </div>
  );
}
