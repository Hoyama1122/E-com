import ProductList from "@/components/shared/product/product-list";
import { getLastestProducts } from "@/lib/actions/product.action";



export const metadata = {
  title: "Home",
  description: "A modern ecommerce platform",
};
export default async function HomePage() {
  const latestProducts = await getLastestProducts();
  return (
    <ProductList data={latestProducts} title="New Arrivals" limit={4} />
  );
}
