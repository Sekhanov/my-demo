import React from 'react'
import { connect } from 'react-redux';
class FilteringTableHeader extends React.Component {

    render() {
        const headersArr = Object.keys(this.props.data[0]).map(e => {
            return (
                <th key={e}> {e} </th>

            )
        });
        return (
            <thead>
                <tr>
                    {headersArr}
                </tr>
            </thead>

        )
    }    
} 

export default connect(
    state => (
        {data: state.data}
    )
)(FilteringTableHeader)