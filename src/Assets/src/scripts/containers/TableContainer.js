/**
 * Created by n0m4dz on 1/10/16.
 */
import React, {Component, PropTypes} from 'react'
import $ from 'jquery';

import * as DataActions from '../actions/index'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {getTables, addTable} from '../api/'

import Header from '../components/tables/Header'
import TableItem from '../components/tables/TableItem.js';
import TableModal from '../components/tables/TableModal';


//import createStore from '../lib/createStore';
//const store = createStore();


class TableContainer extends Component {

    constructor() {
        super();
    }

    getTableList() {
        getTables().then((data)=> {
            this.props.actions.getTable(data);
        });
    }

    addTable(tables) {
        console.log('bla bla bla');
        addTable(tables).then((data) => {
            console.log(data)
        });
    }

    componentWillMount() {
        this.getTableList();
    }

    render() {
        const { tables, modalFormData } = this.props;

        return (
            <div>
                <div className="row">
                    <div className="col-sm-12 col-md-10 col-lg-8">
                        <div className="m-b">
                            <Header></Header>
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
                                </tr>
                                </thead>
                                <TableItem list={tables}></TableItem>
                            </table>
                        </div>
                    </div>
                </div>

                <TableModal list={tables} tableHandler={this.addTable.bind()}></TableModal>

            </div>
        )
    }
}

TableContainer.defaultProps = {
    tableList: []
}

function mapStateToProps(state) {
    const TableStore = state.TableStore;
    return {
        tables: TableStore.get('tables').toJS()
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
