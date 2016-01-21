/**
 * Created by n0m4dz on 1/10/16.
 */
import React from 'react'
import {Link} from 'react-router'
import Immutable from 'immutable';
import {setTableProps} from '../../actions/tableActions'

class TableItem extends React.Component {

    constructor() {
        super();
        this.updatedItems = [];
    }

    checkHandler(e) {
        //console.log(e.target.checked);
        var index = e.target.getAttribute('data-index');
        var key = e.target.getAttribute('data-key');
        var value = e.target.checked;
        this.props.updateHandler(index, key, value);
    }


    selectHandler(e) {
        var index = e.target.getAttribute('data-index');
        var value = e.target.value;
        this.props.updateTypeHandler(index, value);
    }

    deleteItem(id) {
        this.props.removeHandler(id);
    }

    render() {
        const { list, removeHandler, updateHandler, updateTypeHandler } = this.props;

        const listData = list.map((data, index) =>
            <tr key={index}>
                <td>
                    {index + 1}
                </td>
                <td><Link to={`/table/${data.name}`}> {data.name} </Link></td>
                <td>
                    <div className="row text-center">
                            <span className="col-sm-3 b-r">
                                <label className="ui-check">
                                    <input type="checkbox" defaultChecked={data.permission.c} data-index={index} data-key="c"
                                           onChange={this.checkHandler.bind(this)}/>
                                    <i className="dark-white"></i>
                                </label>
                            </span>
                            <span className="col-sm-3 b-r">
                                <label className="ui-check">
                                    <input type="checkbox" defaultChecked={data.permission.r} data-index={index} data-key="r"
                                           onChange={this.checkHandler.bind(this)}/>
                                    <i className="dark-white"></i>
                                </label>
                            </span>
                            <span className="col-sm-3 b-r">
                                <label className="ui-check">
                                    <input type="checkbox" defaultChecked={data.permission.u} data-index={index} data-key="u"
                                           onChange={this.checkHandler.bind(this)}/>
                                    <i className="dark-white"></i>
                                </label>
                            </span>
                            <span className="col-sm-3">
                                <label className="ui-check">
                                    <input type="checkbox" defaultChecked={data.permission.d} data-index={index} data-key="d"
                                           onChange={this.checkHandler.bind(this)}/>
                                    <i className="dark-white"></i>
                                </label>
                            </span>
                    </div>
                </td>
                <td>
                    <select className="form-control form-control-sm" defaultValue={data.form_type} data-index={index}
                            onChange={this.selectHandler.bind(this)}>
                        <option value="page">Хуудас</option>
                        <option value="inline">Мөр</option>
                        <option value="window">Цонх</option>
                    </select>
                </td>
                <td>
                    <a onClick={this.deleteItem.bind(this, data.id)}>
                        <i className="material-icons">&#xE872;</i>
                    </a>
                </td>
            </tr>
        );

        return (
            <tbody>
            { listData }
            </tbody>
        )
    }

}

export default TableItem

