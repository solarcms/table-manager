/**
 * Created by n0m4dz on 1/10/16.
 */
import React, {Component, PropTypes} from 'react'

import * as DataActions from '../actions/tableActions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {getTables, addTable, getTableProps, removeTable, setTableProps} from '../api/tableApi'

//Components
import Header from '../components/tables/Header'
import TableItem from '../components/tables/TableItem.js';
import TableModal from '../components/tables/TableModal';

class TableContainer extends Component {

    constructor() {
        super();
    }

    //Modal
    getTableList() {
        getTables().then((data)=> {
            this.props.actions.getTable(data);
        });
    }

    addTable(tables) {
        addTable(tables).then((data) => {
            if(data.status){
                location.reload();
            }
        });
    }

    removeTable(id) {
        removeTable(id).then((data) => {
            console.log(data);
            if(data.status){
                location.reload();
            }
        });
    }

    //List
    getTableProps() {
        getTableProps().then((data)=> {
            console.log(data);
            this.props.actions.getTableProps(data);
        });
    }

    updateProps(index, key, value) {
        this.props.actions.updateTableProps(index, key, value)
    }

    updateTypeProps(index, value){
        this.props.actions.updateTypeProps(index, value)
    }

    saveProps() {
        setTableProps(this.props.tableProps).then((data) => {
            if(data.status){
                alert("updated successfully");
            }
        })
    }

    componentWillMount() {
        this.getTableProps();
        this.getTableList();
    }

    render() {
        const { tables, tableProps, modalFormData } = this.props;

        return (
            <div>
                <div className="row">
                    <div className="col-sm-12 col-md-10 col-lg-8">
                        <div className="m-b">
                            <Header saveHandler={this.saveProps.bind(this)}></Header>
                        </div>

                        <div className="box box-shadow-z1">
                            <table className="table table-bordered">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th className="p-no">
                                        <div className="row text-center">
                                            <span className="col-sm-3 b-r">C</span>
                                            <span className="col-sm-3 b-r">R</span>
                                            <span className="col-sm-3 b-r">U</span>
                                            <span className="col-sm-3">D</span>
                                        </div>
                                    </th>
                                    <th>Form type</th>
                                    <th><i className="material-icons">&#xE5D3;</i></th>
                                </tr>
                                </thead>
                                <TableItem removeHandler={this.removeTable.bind(this)}
                                           updateHandler={this.updateProps.bind(this)}
                                           updateTypeHandler={this.updateTypeProps.bind(this)}
                                           list={tableProps}></TableItem>
                            </table>
                        </div>
                    </div>
                </div>

                <TableModal list={tables} tableHandler={this.addTable.bind(this)}></TableModal>
            </div>
        )
    }
}

TableContainer.defaultProps = {
    tables: [],
    tableProps: []
}

function mapStateToProps(state) {
    const TableStore = state.TableStore;
    return {
        tables: TableStore.get('tables').toJS(),
        tableProps: TableStore.get('tableProps').toJS()
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(DataActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TableContainer);
