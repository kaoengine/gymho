import useLocalStorage from './useLocalStorage';

export default function useExerciseStorage(key) {
    const defaultValue = [
        {
            "date": '1/28/2021',
            "content": [{
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
            }]
        },
        {
            "date": '1/29/2021',
            "content": [{
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
            }]
        }]

    const [data, setToLocalStorage = setValue] = useLocalStorage(key, defaultValue);
    const setExecercise = (exercise) => {
        try {
            // Set to localstorage
            const currentDate = new Date();
            const yesterdayDate = currentDate.setDate(currentDate.getDate() - 1);
            const targetDate = data.filter(x => new Date(x.date) > yesterdayDate)
            let exercies = targetDate[targetDate.length - 1]
            if (!exercies) {
                exercies = {
                    "date": new Date(),
                    "content": [{
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
                    }]
                }
                data.push(exercies)
            };

            exercies.content = exercies.content.map(x => x.id === exercise ? { ...x, counter: x.counter + 1 } : x)
            const newData = data.map(x => x.date == exercies.date ? { ...x, content: exercies.content } : x)
            setToLocalStorage([...newData]);
        } catch (e) {
            console.log(e);
        }
    };

    const exercises = data[0].content
    return [exercises, setExecercise];
}