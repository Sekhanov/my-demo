import React from 'react'
import FilteringTableHeader from './SearchBar';
import SearchBar from './SearchBar';
import FilteringTableBody from './FilteringTableBody';

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
                    data={this.props.data}
                    searchString={this.state.searchString}
                />
            </div>
        )
    }
}