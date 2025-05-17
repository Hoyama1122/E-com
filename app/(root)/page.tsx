import ProductList from "@/components/shared/product/product-list";
import sampleData from "@/db/sample-data";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const metadata = {
  title: "Home",
  description: "A modern ecommerce platform",
};
export default  function HomePage() {  
  
  return (<ProductList data={sampleData.products} title="New Arrivals" limit={4}/>);
}
