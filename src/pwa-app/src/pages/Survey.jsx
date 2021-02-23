import React from 'react';
import BLayout from '../Layouts/BLayout'
import Survey from '../components/Survey'
// import { useExerciseStorage } from '../hooks'


const mockData = { quest: 'Have you ever been with Gym at home before ?', anws: undefined }
export default function SurveyPage() {
    return (
        <BLayout title={"Survey"} main={<Survey data={mockData}></Survey>}></ BLayout>
    );
}