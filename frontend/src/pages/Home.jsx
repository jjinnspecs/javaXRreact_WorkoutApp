import { Box,
    Container,
    Heading
} from "@chakra-ui/react";
import { useWorkouts } from "../hooks/useWorkouts";
import WorkoutForm from "../components/WorkoutForm";
import WorkoutList from "../components/WorkoutList";
import { use } from "react";

const Home = () => {
    const { workouts, loading, addWorkout, removeWorkout } = useWorkouts();

    return (
        <Container maxW="container.md" py={8}>
            <Heading mb={6}>Workout Tracker</Heading>
            <WorkoutForm onAdd={addWorkout} />
            <Box mt={8}>
                <WorkoutList workouts={workouts} onDelete={removeWorkout} loading={loading} />
            </Box>
        </Container>
    );
};

export default Home;