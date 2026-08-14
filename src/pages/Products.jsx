import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "../services/api";

const categories = [
  { name: "All", slug: "" },
  { name: "Dates", slug: "dates" },
  { name: "Dry Fruits", slug: "dry-fruits" },
  { name: "Nuts", slug: "nuts" },
  { name: "Bakery Items", slug: "bakery-items" },
];

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  const selectedCategory =
    searchParams.get("category") || "";

  const searchQuery =
    searchParams.get("search") || "";

  const [search, setSearch] = useState(searchQuery);

  useEffect(() => {
    let mounted = true;

    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const params = {
          limit: 100,
        };

        if (selectedCategory) {
          params.category = selectedCategory;
        }

        if (searchQuery) {
          params.search = searchQuery;
        }

        console.log(
          "Fetching products from:",
          "https://backend-livid-sigma-62.vercel.app/api/products"
        );

        const response = await api.get("/products", {
          params,
        });

        console.log("Products API status:", response.status);
        console.log("Products API response:", response.data);

        if (!mounted) return;

        if (response.data?.success) {
          setProducts(
            Array.isArray(response.data.products)
              ? response.data.products
              : []
          );
        } else {
          setProducts([]);
          setError("Unable to load products.");
        }
      } catch (err) {
        console.error("PRODUCT API ERROR:", err);

        console.error(
          "Request URL:",
          err.config?.baseURL + err.config?.url
        );

        console.error(
          "Status:",
          err.response?.status
        );

        console.error(
          "Response:",
          err.response?.data
        );

        if (!mounted) return;

        if (err.response?.status === 404) {
          setError(
            "Products API route not found."
          );
        } else if (err.response?.status === 403) {
          setError(
            "Request blocked by the backend."
          );
        } else if (!err.response) {
          setError(
            "Unable to connect to the backend."
          );
        } else {
          setError(
            err.response?.data?.message ||
              "Failed to load products."
          );
        }

        setProducts([]);
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchProducts();

    return () => {
      mounted = false;
    };
  }, [selectedCategory, searchQuery]);

  const handleCategoryChange = (slug) => {
    const params = {};

    if (slug) {
      params.category = slug;
    }

    if (search.trim()) {
      params.search = search.trim();
    }

    setSearchParams(params);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    const params = {};

    if (selectedCategory) {
      params.category = selectedCategory;
    }

    if (search.trim()) {
      params.search = search.trim();
    }

    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearch("");
    setSearchParams({});
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FAF7F0]">
        <Navbar />

        <main className="min-h-[70vh] flex items-center justify-center">
          <div className="text-center">
            <div className="w-10 h-10 border-4 border-[#C89B3C] border-t-transparent rounded-full animate-spin mx-auto" />

            <p className="mt-5 text-gray-600">
              Loading products...
            </p>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF7F0]">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-16">

        {/* HEADER */}

        <div className="text-center">
          <p className="text-[#C89B3C] uppercase tracking-[0.25em] text-sm">
            Our Collection
          </p>

          <h1 className="text-5xl md:text-6xl font-serif text-[#0F2B20] mt-3">
            Our Products
          </h1>

          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Explore our premium collection of dates,
            dry fruits, nuts and bakery products.
          </p>
        </div>

        {/* SEARCH */}

        <form
          onSubmit={handleSearch}
          className="max-w-xl mx-auto mt-10 flex gap-3"
        >
          <input
            type="text"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search products..."
            className="flex-1 px-5 py-4 rounded-full border border-[#E5DCCF] bg-white outline-none focus:border-[#C89B3C]"
          />

          <button
            type="submit"
            className="px-7 py-4 rounded-full bg-[#0F2B20] text-white hover:bg-[#C89B3C] transition"
          >
            Search
          </button>
        </form>

        {/* CATEGORIES */}

        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {categories.map((category) => {
            const active =
              selectedCategory === category.slug;

            return (
              <button
                key={category.slug || "all"}
                onClick={() =>
                  handleCategoryChange(
                    category.slug
                  )
                }
                className={`px-6 py-3 rounded-full border transition duration-300 ${
                  active
                    ? "bg-[#0F2B20] text-white border-[#0F2B20]"
                    : "bg-white text-[#0F2B20] border-[#E5DCCF] hover:border-[#C89B3C] hover:text-[#C89B3C]"
                }`}
              >
                {category.name}
              </button>
            );
          })}
        </div>

        {/* RESULT COUNT */}

        <div className="flex items-center justify-between mt-12">
          <p className="text-gray-600">
            <span className="font-medium text-[#0F2B20]">
              {products.length}
            </span>{" "}
            products available
          </p>

          {(selectedCategory || searchQuery) && (
            <button
              onClick={clearFilters}
              className="text-[#C89B3C] hover:text-[#0F2B20] transition"
            >
              Clear Filters
            </button>
          )}
        </div>

        {/* ERROR */}

        {error && (
          <div className="mt-10 p-6 rounded-2xl bg-red-50 text-center">
            <p className="text-red-600 font-medium">
              {error}
            </p>

            <button
              onClick={clearFilters}
              className="mt-5 px-6 py-3 rounded-full bg-[#0F2B20] text-white"
            >
              Try Again
            </button>
          </div>
        )}

        {/* NO PRODUCTS */}

        {!error && products.length === 0 && (
          <div className="text-center py-24">
            <h2 className="text-2xl font-serif text-[#0F2B20]">
              No products found
            </h2>

            <p className="mt-3 text-gray-500">
              Try another category or search term.
            </p>

            <button
              onClick={clearFilters}
              className="mt-6 px-7 py-3 rounded-full bg-[#0F2B20] text-white hover:bg-[#C89B3C] transition"
            >
              View All Products
            </button>
          </div>
        )}

        {/* PRODUCTS */}

        {products.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-8">
            {products.map((product) => (
              <Link
                key={product._id}
                to={`/products/${product.slug}`}
                className="group bg-white rounded-3xl overflow-hidden border border-[#EEE5D8] hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                {/* IMAGE */}

                <div className="h-64 overflow-hidden bg-[#F5F1E8]">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      onError={(e) => {
                        e.currentTarget.src =
                          "/placeholder-product.jpg";
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      No image
                    </div>
                  )}
                </div>

                {/* INFO */}

                <div className="p-5">
                  <h2 className="text-xl font-serif text-[#0F2B20] group-hover:text-[#C89B3C] transition">
                    {product.name}
                  </h2>

                  <p className="text-gray-600 text-sm mt-3 leading-6 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="mt-5 text-[#C89B3C] font-medium">
                    View Product →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Products;