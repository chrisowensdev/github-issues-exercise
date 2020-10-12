import React, { Component } from 'react';

class IssueDetail extends Component {
    constructor(props){
        super(props);
    }
    state = {
        issueDetailData: []
    };

    loadData = async (props) => {
        const response = await fetch('https://api.github.com/repos/facebook/create-react-app/issues');
        const data = await response.json();
        return data;
    }

    async componentDidMount() {
        const issueDetailData = await this.loadData();
        this.setState({
            issueDetailData: issueDetailData
        })
    }
}

export default IssueDetail;