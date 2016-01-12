/**
 * Created by n0m4dz on 1/12/16.
 */
import React from 'react';

class TableModal extends React.Component {

    //handleAddTable(data){
    //    this.props.postHandler(data);
    //}

    constructor() {
        super();
        this.checkedList = [];
    }

    checkHandler(o) {
        if (o.target.checked) {
            this.checkedList.push(o.target.value);
        }else{
            var index = this.checkedList.indexOf(o.target.value);
            this.checkedList.splice(index, 1);
        }
    }

    addTables(e){
        this.props.tableHandler(this.checkedList);
    }

    render() {
        const { list, tableHandler } = this.props;

        const listData = list.map((data, index) =>
                <tr key={index}>
                    <td>
                        <form action="">
                            <label className="md-check">
                                <input type="checkbox" defaultChecked={false} value={data} onChange={this.checkHandler.bind(this)}/>
                                <i className="cyan"></i>
                            </label>
                        </form>
                    </td>
                    <td>{data}</td>
                </tr>
        );

        return (
            <div id="m-a-f" className="modal fade ng-scope" data-backdrop="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="navbar">
                                <form
                                    className="navbar-form form-inline pull-left pull-none-sm navbar-item v-m"
                                    role="search">
                                    <div className="form-group l-h m-a-0">
                                        <div className="input-group input-group-sm">
                                            <input type="text" className="form-control p-x b-a rounded"
                                                   placeholder="Search tables..."/>
                                                        <span className="input-group-btn">
                                                            <button type="submit"
                                                                    className="btn white b-a rounded no-b-l no-shadow">
                                                                <i className="material-icons">&#xE8B6;</i>
                                                            </button>
                                                        </span>
                                        </div>
                                    </div>
                                </form>
                                <ul className="nav navbar-nav pull-right">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link p-l b-l" onClick={this.addTables.bind(this)}>
                                            <i className="material-icons">&#xE876;</i>
                                        </a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link p-l b-l" data-dismiss="modal">
                                            <i className="material-icons">&#xE14C;</i>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div className="modal-body">
                            <table className="table table-striped b-t">
                                <thead>
                                <tr>
                                    <th width="20px">
                                        <label className="md-check">
                                            <input type="checkbox"/>
                                            <i className="cyan"></i>
                                        </label>
                                    </th>
                                    <th>
                                        <strong>Table name</strong>
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                { listData }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TableModal;
