import React from 'react';
import FilteringTableBody from './FilteringTableBody';
import SearchBar from './SearchBar';
import { connect } from 'react-redux';

export default class FilteringTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchString: ""            
        }
        this.updateSearchString = this.updateSearchString.bind(this);
    }


    updateSearchString(string) {
        this.setState({ searchString: string });
    }


    render() {
        return (
            <div className="filtering-table">
                <SearchBar
                    searchString={this.state.searchString}
                    updateSearchStringFn={this.updateSearchString}
                />
                <FilteringTableBody
                    searchString={this.state.searchString}
                />
            </div>
        )
    }
}
