
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "../services/api";

const ProductDetails = () => {
  const { slug } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError("");

        const { data } = await api.get(`api/products/${slug}`);

        if (data.success) {
          setProduct(data.product);
        } else {
          setError("Product not found.");
        }
      } catch (error) {
        console.error("Failed to fetch product:", error);

        setError(
          error.response?.data?.message ||
            "Failed to load product."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  if (loading) {
    return (
      <>
        <Navbar />

        <main className="min-h-[60vh] flex items-center justify-center">
          <p className="text-gray-600">
            Loading product...
          </p>
        </main>

        <Footer />
      </>
    );
  }

  if (error || !product) {
    return (
      <>
        <Navbar />

        <main className="min-h-[60vh] flex flex-col items-center justify-center">
          <h1 className="text-2xl font-serif text-[#0f2b20]">
            Product not found
          </h1>

          <Link
            to="/products"
            className="mt-6 text-[#c89b3c]"
          >
            ← Back to Products
          </Link>
        </main>

        <Footer />
      </>
    );
  }

  const whatsappMessage = encodeURIComponent(
    `Hello Rajdhani Dry Food, I am interested in ${product.name}.`
  );

  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-16">

        {/* Back */}
        <Link
          to="/products"
          className="text-[#c89b3c] hover:underline"
        >
          ← Back to Products
        </Link>

        <div className="grid md:grid-cols-2 gap-12 mt-10">

          {/* Product Image */}
          <div>
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="w-full aspect-square object-cover rounded-3xl shadow-md"
              />
            ) : (
              <div className="w-full aspect-square rounded-3xl bg-gray-100 flex items-center justify-center">
                <p className="text-gray-500">
                  No image available
                </p>
              </div>
            )}
          </div>

          {/* Product Information */}
          <div>

            {/* Category */}
            {product.category?.name && (
              <p className="text-[#c89b3c] uppercase tracking-widest text-sm">
                {product.category.name}
              </p>
            )}

            {/* Name */}
            <h1 className="text-5xl font-serif text-[#0f2b20] mt-3">
              {product.name}
            </h1>

            {/* Description */}
            <p className="mt-6 text-gray-600 leading-8">
              {product.description}
            </p>

            {/* Featured */}
            {product.featured && (
              <span className="inline-block mt-6 px-4 py-2 rounded-full bg-[#c89b3c] text-white text-sm">
                Featured Product
              </span>
            )}

            {/* WhatsApp */}
            <a
              href={`https://wa.me/91XXXXXXXXXX?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-10 bg-[#0f2b20] text-white px-8 py-4 rounded-full hover:bg-[#c89b3c] transition"
            >
              WhatsApp Inquiry
            </a>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ProductDetails;
