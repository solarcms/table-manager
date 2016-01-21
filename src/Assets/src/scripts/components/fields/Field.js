/**
 * Created by n0m4dz on 1/12/16.
 */
import React from 'react';

class Field extends React.Component {

    checkHandler(){

    }

    render() {
        const {fields} = this.props;
        console.log(fields);
        const listFiels = fields.map((data, index) =>
            <tr key={index} className="text-center">
                <td> {index + 1} </td>
                <td className="text-left"> { data.column } </td>
                <td>
                    <select defaultValue={data.column_type} className="form-control form-control-sm">
                        <option value="text">Text input</option>
                        <option value="select">Select</option>
                        <option value="check">Checkbox</option>
                        <option value="radio">Radio</option>
                        <option value="date">Date</option>
                        <option value="datetime">Datetime</option>
                        <option value="time">Time</option>
                        <option value="false">False</option>
                    </select>
                </td>
                <td>
                    <label className="ui-check">
                        <input type="checkbox" defaultChecked={data.is_translatable}
                               onChange={this.checkHandler.bind(this, data)}/>
                        <i className="dark-white"></i>
                    </label>
                </td>
                <td>
                    <input type="text" className="form-control form-control-sm" defaultValue={data.validation} />
                </td>
                <td>
                    <label className="ui-check">
                        <input type="checkbox" defaultChecked={data.is_grid_enabled}
                               onChange={this.checkHandler.bind(this, data)}/>
                        <i className="dark-white"></i>
                    </label>
                </td>
                <td>
                    <label className="ui-check">
                        <input type="checkbox" defaultChecked={data.is_grid_fixed}
                               onChange={this.checkHandler.bind(this, data)}/>
                        <i className="dark-white"></i>
                    </label>
                </td>
                <td>
                    <input type="text" defaultValue={data.default_value} className="form-control form-control-sm"/>
                </td>
                <td>
                    <label className="ui-check">
                        <input type="checkbox" defaultChecked={data.is_form_enabled}
                               onChange={this.checkHandler.bind(this, data)}/>
                        <i className="dark-white"></i>
                    </label>
                </td>
                <td>
                    <label className="ui-check">
                        <input type="checkbox" defaultChecked={data.is_sortable}
                               onChange={this.checkHandler.bind(this, data)}/>
                        <i className="dark-white"></i>
                    </label>
                </td>
                <td>
                    <label className="ui-check">
                        <input type="checkbox" defaultChecked={data.is_filter}
                               onChange={this.checkHandler.bind(this, data)}/>
                        <i className="dark-white"></i>
                    </label>
                </td>
            </tr>
        );

        return (
            <tbody>
            { listFiels }
            </tbody>
        )
    }
}

export default Field;
