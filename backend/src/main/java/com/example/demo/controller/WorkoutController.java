package com.example.demo.controller;

import com.example.demo.model.Workout;
import com.example.demo.repository.WorkoutRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/workouts")
@CrossOrigin(origins = "http://localhost:5173")
public class WorkoutController {

    private final WorkoutRepository repository;

    public WorkoutController(WorkoutRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Workout> getAllWorkouts() {
        return repository.findAll();
    }

    @PostMapping
    public Workout createWorkout(@RequestBody Workout workout) {
        return repository.save(workout);
    }

    @PutMapping("/{id}")
    public Workout updateWorkout(@PathVariable Long id, @RequestBody Workout workoutDetails) {

        Workout workout = repository.findById(id).orElseThrow();
        workout.setName(workoutDetails.getName());
        workout.setType(workoutDetails.getType());
        workout.setDuration(workoutDetails.getDuration());
        workout.setNotes(workoutDetails.getNotes());
        return repository.save(workout);
    }

    @DeleteMapping("/{id}")
    public void deleteWorkout(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
