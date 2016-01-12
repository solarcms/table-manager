/**
 * Created by n0m4dz on 1/10/16.
 */
import React from 'react'
import {Link} from 'react-router'

class TableItem extends React.Component {

    render() {
        const { list } = this.props;

        const listData = list.map((data, index) =>
                <tr key={index}>
                    <td>
                        {index + 1}
                    </td>
                    <td><Link to={`/table/${data}` }> {data} </Link></td>
                    <td>
                        <div className="row text-center">
                            <span className="col-sm-3 b-r">
                                <label className="ui-check">
                                    <input type="checkbox"/>
                                    <i className="dark-white"></i>
                                </label>
                            </span>
                            <span className="col-sm-3 b-r">
                                <label className="ui-check">
                                    <input type="checkbox"/>
                                    <i className="dark-white"></i>
                                </label>
                            </span>
                            <span className="col-sm-3 b-r">
                                <label className="ui-check">
                                    <input type="checkbox"/>
                                    <i className="dark-white"></i>
                                </label>
                            </span>
                            <span className="col-sm-3">
                                <label className="ui-check">
                                    <input type="checkbox"/>
                                    <i className="dark-white"></i>
                                </label>
                            </span>
                        </div>
                    </td>
                    <td>
                        <select className="form-control form-control-sm">
                            <option value="page">Хуудас</option>
                            <option value="inline">Мөр</option>
                            <option value="window">Цонх</option>
                        </select>
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

