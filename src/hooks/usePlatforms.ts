import platforms from "../data/platforms";
import useData from "./useData";
import { Platform } from "./useGames";


const usePlatforms = () => ({data: platforms, isLoading: false, error: null});

export default usePlatforms;