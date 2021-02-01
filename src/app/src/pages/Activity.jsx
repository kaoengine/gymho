import React from 'react';
import ALayout from '../Layouts/ALayout'
import ExerciseList from '../components/ExerciseList'
import { useExerciseStorage } from '../hooks'



export default function ActivityPage() {
    const [exercises, setExecercise] = useExerciseStorage('data');
    const updateExercies = (exercise) => {
        if (exercise) {
            setExecercise(exercise)
        }
    }

    return (
        <ALayout main={<ExerciseList updateExercies={updateExercies} data={exercises}></ExerciseList>}></ ALayout>
    );
}