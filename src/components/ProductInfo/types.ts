export type ProductInfoProps = {
  name: string;
  description?: string;
  rating: number;
  price: number;
  discount?: number;
  size: "sm" | "lg";
}