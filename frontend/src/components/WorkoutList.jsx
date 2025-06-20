import { Box, Button, HStack, Text, VStack } from '@chakra-ui/react';

export const WorkoutList = ({ workouts, onDelete, onEdit }) => {
  if (workouts.length === 0) {
    return <Text>No workouts available. Add one!</Text>;
  }

  return (
    <VStack spacing={4} align="stretch">
      {workouts.map((workout) => (
        <Box key={workout.id} p={4} borderWidth="1px" rounded="lg">
          <Text fontWeight="bold">{workout.name}</Text>
          <Text>Type: {workout.type}</Text>
          <Text>Duration: {workout.duration} mins</Text>
          <Text>Notes: {workout.notes}</Text>
          <HStack mt={3}>
            <Button colorScheme="blue" size="sm" onClick={() => onEdit(workout)}>
              Edit
            </Button>
            <Button colorScheme="red" size="sm" onClick={() => onDelete(workout.id)}>
              Delete
            </Button>
          </HStack>
        </Box>
      ))}
    </VStack>
  );
};
