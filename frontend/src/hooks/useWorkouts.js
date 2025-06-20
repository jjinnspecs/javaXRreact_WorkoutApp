import { useEffect, useState } from "react";
import { getWorkouts, createWorkout, updateWorkout, deleteWorkout } from "../api/workoutApi";

export const useWorkouts = () => {
    const [workouts, setWorkouts] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchWorkouts = async () => {
        setLoading(true);
        try {
            const res = await getWorkouts();
            setWorkouts(res.data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };


    const addWorkout = async (workout) => {
        await createWorkout(workout);
        fetchWorkouts();
    };

    const editWorkout = async (id, workout) => {
        await updateWorkout(id, workout);
        fetchWorkouts();
    };

    const removeWorkout = async (id) => {
        await deleteWorkout(id);
        fetchWorkouts();
    };

    useEffect(() => {
        fetchWorkouts();
    }, []);
    return { workouts, loading, addWorkout, editWorkout ,removeWorkout };
    };