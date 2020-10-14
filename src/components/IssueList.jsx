import React, { useEffect, useState } from 'react';
import { Route, Link } from 'react-router-dom';
import Issue from './Issue';
import './IssueList.css';

import { Title } from "bloomer";

const IssueList = props => {
    const [issues, setIssues] = useState([]); 

    useEffect(() => {
        (async function(){
            const response = await fetch('https://api.github.com/repos/facebook/create-react-app/issues');
            const issues = await response.json();
            setIssues(issues);
        })();
    }, [setIssues]);

    return (
        <>
            {!!issues.length ? ( 
                
            <>    
            <Title isSize={2}>Github Issues IssueList</Title>
            <Route exact path="/">
                <ul>
                {issues.map((issue) => {
                return (
                    <li key={issue.id}>
                        {issue.title}
                        <Link to={`/issue/${issue.number}`}>
                            View Details
                        </Link>
                    </li>
                )
            })}
            </ul>
            </Route>
            <Route path={`/issue/:issue_number`}>
                <Link to="/">Return to List</Link>
                <Issue issues={issues}/>
            </Route>
            </>
            ) : (<p>Fetching issues...</p>)
            }
        </>
    )
}


export default IssueList;