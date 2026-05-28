import { ScrollView } from "react-native";
import ProductCard from "../components/ProductCard";

export default function Home() {

  return (

    <ScrollView
      style={{
        flex:1,
        backgroundColor:"black",
        paddingTop:50
      }}
    >

      <ProductCard
        title="Notebook"
        price={3500}
        description="Notebook Gamer"
        inStock={true}
      />

      <ProductCard
        title="Mouse"
        price={120}
        description="Mouse RGB"
        inStock={false}
      />

      <ProductCard
        title="Teclado"
        price={200}
        description="Teclado Mecânico"
        inStock={true}
      />

      <ProductCard
        title="Monitor"
        price={900}
        description="Monitor 144hz"
        inStock={false}
      />

    </ScrollView>

  );
}