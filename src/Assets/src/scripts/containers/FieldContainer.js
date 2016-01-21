/**
 * Created by n0m4dz on 1/10/16.
 */
import React from 'react'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as DataActions from '../actions/fieldActions'
import {getFields, setFieldProps} from '../api/fieldApi'

import Field from '../components/fields/Field'
import Header from '../components/fields/Header'

class FieldContainer extends React.Component {

    constructor() {
        super();
    }

    getFields(tableName) {
        getFields(tableName).then((data) => {
            this.props.actions.getFields(data);
        })
    }

    updateProps(index, key, value) {
        this.props.actions.updateFieldProps(index, key, value)
    }

    saveProps(){
        setFieldProps(this.props.fields).then((data) => {
           if(data.status){
               alert('updated successfully');
           }
        });
    }

    componentWillMount() {
        let tableName = this.props.params.name;
        this.getFields(tableName);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="m-b">
                            <Header saveHandler={this.saveProps.bind(this)}></Header>
                        </div>

                        <div className="box box-shadow-z1">
                            <table className="table table-bordered">
                                <thead>
                                <tr className="text-center">
                                    <th>№</th>
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

                                <Field fields={this.props.fields}
                                       updateHandler={this.updateProps.bind(this)}
                                ></Field>

                            </table>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

FieldContainer.defaultProps = {
    fields: [],
    fieldProps: []
}

function mapStateToProps(state) {
    const FieldStore = state.FieldStore;
    return {
        fields: FieldStore.get('fields').toJS(),
        fieldProps: FieldStore.get('fieldProps').toJS()
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
)(FieldContainer);