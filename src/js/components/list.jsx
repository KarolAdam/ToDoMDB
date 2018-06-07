import React from "react";

export default class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <ul>
            {
                this.props.items.map((item, index) => <li key={index}> Task #{item}</li>)
            }
        </ul>
    }
}
