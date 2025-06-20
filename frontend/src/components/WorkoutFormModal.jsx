import { useState, useEffect } from "react";
import {
    Button,
    Input,
    Select,
    Textarea,
    FormControl,
    FormLabel,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    useDisclosure
} from "@chakra-ui/react";

export const WorkoutFormModal = ({ isOpen, onClose, onSubmit, initialWorkout = null }) => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [duration, setDuration] = useState("");
    const [notes, setNotes] = useState("");

    useEffect(() => {
        if (initialWorkout) {
            setName(initialWorkout.name);
            setType(initialWorkout.type);
            setDuration(initialWorkout.duration);
            setNotes(initialWorkout.notes);
        } else {
            setName("");
            setType("");
            setDuration("");
            setNotes("");
        }
    }, [initialWorkout, isOpen]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const workoutData = {
            name,
            type,
            duration: parseInt(duration),
            notes,
        };
        onSubmit(workoutData);
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="md" isCentered>
            <ModalOverlay />
            <ModalContent as="form" onSubmit={handleSubmit}>
                <ModalHeader>{initialWorkout ? 'Edit Workout' : 'Add Workout'}</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>

                    <FormControl mb={3} isRequired>
                        <FormLabel>Name</FormLabel>
                        <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Workout name" />
                    </FormControl>

                    <FormControl mb={3} isRequired>
                        <FormLabel>Type</FormLabel>
                        <Select value={type} onChange={(e) => setType(e.target.value)} placeholder="Select type">
                            <option value="Cardio">Cardio</option>
                            <option value="Strength">Strength</option>
                            <option value="Flexibility">Flexibility</option>
                            <option value="Other">Other</option>
                        </Select>
                    </FormControl>

                    <FormControl mb={3} isRequired>
                        <FormLabel>Duration (minutes)</FormLabel>
                        <Input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} />
                    </FormControl>

                    <FormControl mb={3}>
                        <FormLabel>Notes</FormLabel>
                        <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Optional notes..." />
                    </FormControl>

                </ModalBody>

                <ModalFooter>
                    <Button colorScheme="teal" type="submit" mr={3}>
                        {initialWorkout ? 'Update' : 'Add'}
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};
