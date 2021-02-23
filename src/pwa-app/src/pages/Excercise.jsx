import React from 'react';
import BLayout from '../Layouts/BLayout'
import ExerciseCounter from '../components/ExerciseCounter'
// import { useExerciseStorage } from '../hooks'


export default function ExercisePage() {
    // const [exercises, setExecercise] = useExerciseStorage('data');
    // const updateExercies = (exercise) => {
    //     if (exercise) {
    //         setExecercise(exercise)
    //     }
    // }

    return (
        <BLayout main={<ExerciseCounter></ExerciseCounter>}></ BLayout>
    );
}