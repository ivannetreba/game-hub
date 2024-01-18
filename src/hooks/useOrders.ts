import useData from "./useData";

export interface Order {
  id: number;
  name: string;
  slug: string;
}

const useOrders = () => useData<Order>('/ordering');

export default useOrders;