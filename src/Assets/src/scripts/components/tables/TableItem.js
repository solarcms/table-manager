/**
 * Created by n0m4dz on 1/10/16.
 */
import React from 'react'
import {Link} from 'react-router'

class TableItem extends React.Component {

    checkHandler(o) {
        if (o.target.checked) {
           // this.checkedList.push(o.target.value);
            console.log("checked");
        } else {
            console.log("unchecked");
        }
    }

    selectHandler(){
        console.log("select");
    }

    deleteItem(id) {
        this.props.removeHandler(id);
    }

    render() {
        const { list, removeHandler } = this.props;

        const listData = list.map((data, index) =>
                <tr key={index}>
                    <td>
                        {index + 1}
                    </td>
                    <td><Link to={`/table/${data}` }> {data.name} </Link></td>
                    <td>
                        <div className="row text-center">
                            <span className="col-sm-3 b-r">
                                <label className="ui-check">
                                    <input type="checkbox" defaultChecked={data.permission.c} onChange={this.checkHandler.bind(this)} />
                                    <i className="dark-white"></i>
                                </label>
                            </span>
                            <span className="col-sm-3 b-r">
                                <label className="ui-check">
                                    <input type="checkbox" defaultChecked={data.permission.r} onChange={this.checkHandler.bind(this)}/>
                                    <i className="dark-white"></i>
                                </label>
                            </span>
                            <span className="col-sm-3 b-r">
                                <label className="ui-check">
                                    <input type="checkbox" defaultChecked={data.permission.u} onChange={this.checkHandler.bind(this)}/>
                                    <i className="dark-white"></i>
                                </label>
                            </span>
                            <span className="col-sm-3">
                                <label className="ui-check">
                                    <input type="checkbox" defaultChecked={data.permission.d} onChange={this.checkHandler.bind(this)}/>
                                    <i className="dark-white"></i>
                                </label>
                            </span>
                        </div>
                    </td>
                    <td>
                        <select className="form-control form-control-sm" value={data.form_type} onChange={this.selectHandler.bind(this)}>
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

