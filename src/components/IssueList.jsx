import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Issue from './Issue';

import './IssueList.css';

class IssueList extends Component {
    state = {
        issueData: []
    };

    loadData = async () => {
        const response = await fetch('https://api.github.com/repos/facebook/create-react-app/issues');
        const data = await response.json();
        return data;
    }

    async componentDidMount() {
        const issueData = await this.loadData();
        this.setState({
            issueData
        })
    }
    render(){
        const { issueData } = this.state;
        return (
            <>
                {!!issueData.length ? ( 
                    
                <>    
                <h1>Github Issues IssueList</h1>
                <Route exact path="/">
                    <ul>
                    {issueData.map((issue) => {
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
                    <Issue issues={issueData}/>
                </Route>
                </>
                ) : (<p>Fetching issues...</p>)
                }
            </>
        )
    }
};

export default IssueList;