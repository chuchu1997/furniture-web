/** @format */

"use client";

import { motion } from "framer-motion";
import { ProductCard } from "@/components/ui/product/product-card";
import { ProductInterface } from "@/types/product";

export function ProductListMotionWrapper({
  products,
}: {
  products: ProductInterface[];
}) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => {
        const endDate = product.promotionProducts[0]?.promotion?.endDate;
        const isExpired = endDate
          ? new Date(endDate).getTime() < Date.now()
          : false;

        const promotion =
          product.promotionProducts &&
          !isExpired &&
          product.promotionProducts.length > 0
            ? product.promotionProducts[0].promotion
            : undefined;

        return (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}>
            <ProductCard product={product} promotion={promotion} />
          </motion.div>
        );
      })}
    </div>
  );
}
