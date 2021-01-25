import React from 'react';
import ALayout from '../Layouts/ALayout'
import ExerciseList from '../components/ExerciseList'

export default function ActivityPage() {
    return (
        <ALayout main={<ExerciseList></ExerciseList>}></ ALayout>
    );
}