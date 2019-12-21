import React from "react"

export default class Filtering extends React.Component {


    constructor(props) {
        super(props);
        this.handleSearchString = this.handleSearchString.bind(this)

    }

    handleSearchString(e) {
        this.props.updateSearchStringFn(e.target.value);
    }


    render() {
        return (
            <input
                onChange={this.handleSearchString}
                type="text"
                value={this.props.searchString}
                placeholder="search"
            />           
        )   
    }
}