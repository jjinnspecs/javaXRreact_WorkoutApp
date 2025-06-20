import axiosClient from "./axiosClient";

export const getWorkouts = () => axiosClient.get("/workouts");
export const createWorkout = (workout) => axiosClient.post("/workouts", workout);
export const updateWorkout = (id, workout) => axiosClient.put(`/workouts/${id}`, workout);
export const deleteWorkout = (id) => axiosClient.delete(`/workouts/${id}`);
