import React from 'react'

export default class FilteringTableRows extends React.Component {
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
                    <td> {v} </td>
                )
            })
            return (
                <tr> {cells} </tr>
            )
        })
        return (
            <tbody>
                {rows}
            </tbody>

        )
    }
}