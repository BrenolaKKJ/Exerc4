import { View, Text } from "react-native";

type Props = {
  title: string;
  price: number;
  description: string;
  inStock: boolean;
};

export default function ProductCard({
  title,
  price,
  description,
  inStock
}: Props) {

  return (

    <View
      style={{
        backgroundColor:"#222",
        padding:20,
        margin:10,
        borderRadius:10,
        opacity: inStock ? 1 : 0.5
      }}
    >

      <Text
        style={{
          color:"white",
          fontSize:22
        }}
      >
        {title}
      </Text>

      <Text style={{color:"white"}}>
        R$ {price}
      </Text>

      <Text
        style={{
          color:"white",
          marginBottom:10
        }}
      >
        {description}
      </Text>

      <Text
        style={{
          color: inStock ? "lime" : "red"
        }}
      >
        {inStock ? "Disponível" : "Indisponível"}
      </Text>

    </View>

  );
}