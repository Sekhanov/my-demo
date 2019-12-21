import React from 'react'


export default class FilteringTableHeader extends React.Component {

    render() {        
        const headersArr = Object.keys(this.props.data[0]).map(e => {
            return (
                <th> {e} </th>

            )
        });
        return (
            <tr>
                {headersArr}
            </tr>
        )
    }
} 