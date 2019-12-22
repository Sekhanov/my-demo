import React from 'react'
import FilteringTableHeader from './FilteringTableHeader'
import FilteringTableRows from './FilteringTableRows'

export default class FilteringTableBody extends React.Component {


    render() {
        return (
            <table>
                <FilteringTableHeader
                />
                <FilteringTableRows                    
                    searchString={this.props.searchString}
                />
            </table>
        )
    }
}