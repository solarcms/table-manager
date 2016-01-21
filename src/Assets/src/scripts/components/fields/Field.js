/**
 * Created by n0m4dz on 1/12/16.
 */
import React from 'react';

class Field extends React.Component {

    eventHandler(e) {
        var index = e.target.getAttribute('data-index');
        var key = e.target.getAttribute('data-key');
        var value = e.target.checked;
        this.props.updateHandler(index, key, value);
    }

    changeHandler(e) {
        var index = e.target.getAttribute('data-index');
        var key = e.target.getAttribute('data-key');
        var value = e.target.value;
        this.props.updateHandler(index, key, value);
    }

    render() {
        const {fields} = this.props;
        console.log(fields);
        const listFiels = fields.map((data, index) =>
            <tr key={index} className="text-center">
                <td> {index + 1} </td>
                <td className="text-left"> { data.column } </td>
                <td>
                    <select defaultValue={data.column_type} data-index={index} data-key="column_type" onChange={this.changeHandler.bind(this)} className="form-control form-control-sm">
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
                        <input type="checkbox" defaultChecked={data.is_translatable} data-index={index} data-key="is_translatable"
                               onChange={this.eventHandler.bind(this)}/>
                        <i className="dark-white"></i>
                    </label>
                </td>
                <td>
                    <input type="text" className="form-control form-control-sm" onChange={this.changeHandler.bind(this)} defaultValue={data.validation} data-index={index} data-key="validation" />
                </td>
                <td>
                    <label className="ui-check">
                        <input type="checkbox" defaultChecked={data.is_grid_enabled} data-index={index} data-key="is_grid_enabled"
                               onChange={this.eventHandler.bind(this)}/>
                        <i className="dark-white"></i>
                    </label>
                </td>
                <td>
                    <label className="ui-check">
                        <input type="checkbox" defaultChecked={data.is_grid_fixed} data-index={index} data-key="is_grid_fixed"
                               onChange={this.eventHandler.bind(this)}/>
                        <i className="dark-white"></i>
                    </label>
                </td>
                <td>
                    <input type="text" defaultValue={data.default_value} onChange={this.changeHandler.bind(this)}  data-index={index} data-key="default_value" className="form-control form-control-sm"/>
                </td>
                <td>
                    <label className="ui-check">
                        <input type="checkbox" defaultChecked={data.is_form_enabled} data-index={index} data-key="is_form_enabled"
                               onChange={this.eventHandler.bind(this)}/>
                        <i className="dark-white"></i>
                    </label>
                </td>
                <td>
                    <label className="ui-check">
                        <input type="checkbox" defaultChecked={data.is_sortable} data-index={index} data-key="is_sortable"
                               onChange={this.eventHandler.bind(this)}/>
                        <i className="dark-white"></i>
                    </label>
                </td>
                <td>
                    <label className="ui-check">
                        <input type="checkbox" defaultChecked={data.is_filter} data-index={index} data-key="is_filter"
                               onChange={this.eventHandler.bind(this)}/>
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
