import Question from './Question'
import Answers from './Answers'
import React, { Fragment } from 'react'
import Footer from './Footer';

export default function SurveyQuest(props) {
    const { data } = props
    return (
        <div>
            <div style={{ marginTop: '2.8rem' }}>
                <Question question={data['quest']}></Question>

            </div>
            <div style={{ marginBottom: '3rem', marginTop:'1rem' }}>
                <Answers answers={data['anws']}></Answers>
            </div>
            <Footer data={"2 of 10 questions"}></Footer>
        </div>

    );
}

