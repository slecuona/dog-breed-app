import { useCallback, useContext, useEffect, useState } from "react";
import { ApiService } from "../services/api.service";

const apiService = new ApiService();

export const useDogs = () => {
  const take = 6;
  const [dogs, setDogs] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [full, setFull] = useState(false);
  const [page, setPage] = useState(0)

  const pullDogs = useCallback(async (page: number) => {
    console.log('pull');
    setLoading(true)
    const nextDogs = await apiService.getDogs(take, page);
    if(nextDogs.length == 0) {
      setFull(true)
    } else {
      setDogs((prev: any) => [...prev, ...nextDogs])
    }
    setLoading(false)
  }, [setDogs]);

  useEffect(() => {
    pullDogs(0);
  }, [pullDogs])

  useEffect(() => {
    if (page === 0 || full) return

    pullDogs(page);
  }, [page, pullDogs, full]);

  return [dogs, loading, setPage]
}