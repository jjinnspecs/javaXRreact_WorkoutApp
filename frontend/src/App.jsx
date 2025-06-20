import { useState } from 'react';
import { ChakraProvider, Box, Heading, Button, Spinner } from '@chakra-ui/react';
import { useWorkouts } from './hooks/useWorkouts';
import { WorkoutFormModal } from './components/WorkoutFormModal';
import { WorkoutList } from './components/WorkoutList';

function App() {
    const { workouts, loading, addWorkout, editWorkout, removeWorkout } = useWorkouts();
    const [isModalOpen, setModalOpen] = useState(false);
    const [editingWorkout, setEditingWorkout] = useState(null);

    const handleAddClick = () => {
        setEditingWorkout(null);
        setModalOpen(true);
    };

    const handleSubmit = async (workoutData) => {
        if (editingWorkout) {
            await editWorkout(editingWorkout.id, workoutData);
        } else {
            await addWorkout(workoutData);
        }
    };

    const handleEditClick = (workout) => {
        setEditingWorkout(workout);
        setModalOpen(true);
    };

    return (
        <ChakraProvider>
            <Box maxW="600px" mx="auto" p={6}>
                <Heading mb={6} textAlign="center">
                    Workout Tracker
                </Heading>

                <Button colorScheme="teal" onClick={handleAddClick} mb={4}>
                    Add Workout
                </Button>

                {loading ? (
                    <Spinner size="xl" />
                ) : (
                    <WorkoutList workouts={workouts} onDelete={removeWorkout} onEdit={handleEditClick} />
                )}

                <WorkoutFormModal
                    isOpen={isModalOpen}
                    onClose={() => setModalOpen(false)}
                    onSubmit={handleSubmit}
                    initialWorkout={editingWorkout}
                />
            </Box>
        </ChakraProvider>
    );
}

export default App;
