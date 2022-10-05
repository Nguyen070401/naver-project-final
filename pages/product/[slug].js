import Layout from "../../components/Layout";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import Banner from "../../components/Banner/Banner";

const styles = {
  wrapper: "container mx-auto mt-10",
};

export default function ProductDetailPage() {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <ProductDetail />
        {/* ProductList */}
        {/* What... */}
        <Banner />
      </div>
    </Layout>
  );
}