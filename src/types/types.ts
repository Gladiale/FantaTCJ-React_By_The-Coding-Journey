type HeroDataType = {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  price: string;
  modal: string;
  bgColor: string;
};

type ProductsDataType = {
  id: number;
  title: string;
  image: string;
  desc: string;
  delay: number;
};

export { type HeroDataType, type ProductsDataType };
