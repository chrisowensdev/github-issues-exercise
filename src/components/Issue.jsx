import React from 'react';

const Issue = (props) => {
    const { title , url, body } = props.issue;
    return (
        <>
    <h3>{title}</h3>
    <a href={url}>{url}</a>
    <p>{body}</p>
    </>
    )

};
export default Issue;