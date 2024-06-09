import { create } from "zustand";
import axiosInstance from "./axios";

type MovieStore = {
  movies: any[];
  videos: any[];
  loading: boolean;
  fetchMovie: (page: number) => Promise<void>;
  fetchMovieById: (id: string) => Promise<void>;
  fetchVideoById: (id: string) => Promise<void>;
};
export const useMovieStore = create<MovieStore>((set) => ({
  movies: [],
  videos: [],
  loading: false,
  fetchMovie: async (page = 1) => {
    set({ loading: true });
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await axiosInstance.get("/movie/popular?page=" + page);
    set({ movies: response.data.results, loading: false });
  },
  fetchMovieById: async (id: string) => {
    set({ loading: true });
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await axiosInstance.get(`/movie/${id}`);
    set({ movies: response.data.results, loading: false });
  },
  fetchVideoById: async (id: string) => {
    set({ loading: true });
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    const response = await axiosInstance.get(`movie/${id}/videos`);
    set({ videos: response.data.results, loading: false });
  },
}));
