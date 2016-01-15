/**
 * Created by n0m4dz on 1/10/16.
 */
import React from 'react'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {getTables, addTable, getTableProps, removeTable} from '../api/fieldApi'



class FieldContainer extends React.Component{
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="m-b">
                            asdas
                        </div>

                        <div className="box box-shadow-z1">
                            <table className="table table-bordered">
                                <thead>
                                <tr>
                                    <th>Field</th>
                                    <th>
                                        Form type
                                    </th>
                                    <th>Translatable</th>
                                    <th>Validation</th>
                                    <th>Grid enabled</th>
                                    <th>Grid fixed</th>
                                    <th>Default value</th>
                                    <th>Form enabled</th>
                                    <th>Sortable</th>
                                    <th>Filterable</th>
                                </tr>
                                </thead>
                                <tbody>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default FieldContainer;
