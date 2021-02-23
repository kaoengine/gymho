import Question from './Question'
import Answers from './Answers'
import React, { Fragment } from 'react'
import Footer from './Footer';

export default function SurveyQuest(props) {
    const { data } = props
    return (
        <div>
            <div style={{ marginTop: '2rem' }}>
                <Question question={data['quest']}></Question>

            </div>
            <div style={{ marginBottom: '6rem' }}>
                <Answers answers={data['anws']}></Answers>
            </div>
            <Footer></Footer>
        </div>

    );
}

