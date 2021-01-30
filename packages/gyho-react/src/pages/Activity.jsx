import React from 'react';
import ALayout from '../Layouts/ALayout'
import ExerciseList from '../components/ExerciseList'
import { useLocalStorage } from '../hooks'



export default function ActivityPage() {
    const defaultValue = [
        {
            "id": "pull",
            "counter": 1
        },
        {
            "id": "push",
            "counter": 1
        },
        {
            "id": "arm",
            "counter": 1
        },
        {
            "id": "squat",
            "counter": 1
        },
        {
            "id": "scrun",
            "counter": 1
        },
        {
            "id": "shoulder",
            "counter": 1
        },
    ]
    const [data, setValue] = useLocalStorage('data', defaultValue);
    const updateExercies = (item) => {
        if (!data) {
            setValue(defaultValue)
        }
        setValue(data.map(x => x.id === item ? { ...x, counter: x.counter + 1 } : x))
    }

    return (
        <ALayout main={<ExerciseList updateExercies={updateExercies} data={data}></ExerciseList>}></ ALayout>
    );
}