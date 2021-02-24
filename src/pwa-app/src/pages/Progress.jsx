import React from 'react';
import ALayout from '../Layouts/ALayout'
import YourProgress from '../components/YourProgress';
import { useExerciseStorage } from '../hooks'

export default function ProgressPage() {
    // const [exercises, setExecercise] = useExerciseStorage('data');
    // const updateExercies = (exercise) => {
    //     if (exercise) {
    //         setExecercise(exercise)
    //     }
    // }

    return (
        // <ALayout main={<ExerciseList updateExercies={updateExercies} data={exercises}></ExerciseList>}></ ALayout>
        <ALayout main={<YourProgress></YourProgress>}></ ALayout>
    );
}