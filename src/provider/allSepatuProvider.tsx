import useSWR from "swr";
import { axiosInstance } from "../axiosInstance/axiosInstance";

interface Sepatu {
  id: number;
  name: string;
  price: number;
  image_url: string;
  description: string;
  stock: number;
}

const allSepatuProvider = () => {
  const fetcher = (url: string) =>
    axiosInstance.get(url).then((res) => res.data);
  const {
    data,
    error,
    isLoading,
  }: { data: Sepatu[]; error: any; isLoading: boolean } = useSWR(
    "/sepatu",
    fetcher
  );
  return { data, error, isLoading };
};

export default allSepatuProvider;
