import React from 'react'
import FilteringTableHeader from './FilteringTableHeader'
import FilteringTableRows from './FilteringTableRows'

export default class FilteringTableBody extends React.Component {


    render() {
        return (
            <table>
                <FilteringTableHeader
                    data={this.props.data}
                />
                <FilteringTableRows
                    data={this.props.data}
                    searchString={this.props.searchString}
                />
            </table>
        )
    }
}