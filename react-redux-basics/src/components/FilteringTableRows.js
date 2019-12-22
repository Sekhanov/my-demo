import React from 'react'
import { connect } from 'react-redux';

class FilteringTableRows extends React.Component {

    render() {
        const searchString = this.props.searchString
        let data = [...this.props.data ];
        let rows;
        if (searchString) {
            data = data.filter(e => 
                e.name.toLowerCase().includes(searchString.toLowerCase()) ||
                e.surname.toLowerCase().includes(searchString.toLowerCase())
            )
        }
        
        rows = data.map(e => {
            const values = Object.values(e);
            const cells = values.map(v => {
                return (
                    <td key={v}> {v} </td>
                )
            })
            return (
                <tr key={data.indexOf(e)}> {cells} </tr>
            )
        })
        return (
            <tbody>
                {rows}
            </tbody>

        )
    }
}

export default connect(
    state => (
        {data: state.data}
    )
)(FilteringTableRows)