import React, { Component } from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import IssueDetail from './IssueDetail';

//import Issue from './Issue';

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
            issueData: issueData
        })
    }
    render(){
        const { issueData } = this.state;
        //const { url } = useRouteMatch();
        return (
            <div className="issue-list">
                {issueData.map((issue) => {
                    return (
                        <>
                        <h2>{issue.title}</h2>
                        <Link to={`/${issue.number}`} key={issue.number}>
                            {issue.number}
                        </Link>
                        
                        <Route path={`/:id`}>
                            <Switch>
                                <IssueDetail number={issue.number}/>
                            </Switch>
                        </Route>
                        </>
                    )
                    
    })}
            </div>
        )
    }
};

export default IssueList;