import useLocalStorage from './useLocalStorage';

export default function useExerciseStorage(key) {
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
    const [data, setToLocalStorage = setValue] = useLocalStorage(key, defaultValue);

    const setExecercise = (exercise) => {
        try {
            console.log(exercise)
            // Set to localstorage
            
            const newData = data.map(x => x.id === exercise ? { ...x, counter: x.counter + 1 } : x)
            setToLocalStorage(newData);
        } catch (e) {
            console.log(e);
        }
    };

    const exercises = data
    return [exercises, setExecercise];
}