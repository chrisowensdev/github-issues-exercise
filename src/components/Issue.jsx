import React from 'react';
import { useParams } from 'react-router-dom';

const Issue = (props) => {
    const { issues } = props;
    const { issue_number } = useParams();

    const issue = issues.find((issue) => {
        return issue.number === parseInt(issue_number) ? issue : null;
    });

    return (
        <>
            <h3>{issue.title}</h3>
            <p>{issue.body}</p>
        </>
    )

};
export default Issue;