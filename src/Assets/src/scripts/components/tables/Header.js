/**
 * Created by n0m4dz on 1/10/16.
 */
import React from 'react';

export default class Header extends React.Component {

    setProps(){
        this.props.saveHandler();
    }

    render() {
       const {saveHandler} = this.props;

        return (
            <div className="white box-shadow-z1 b-b">
                <div className="navbar">

                    <form
                        className="navbar-form form-inline pull-left pull-none-sm navbar-item v-m ng-scope ng-pristine ng-valid"
                        role="search">
                        <div className="form-group l-h m-a-0">
                            <div className="input-group input-group-sm">
                                <input type="text" className="form-control p-x b-a rounded"
                                       placeholder="Search projects..."/>
                                <span className="input-group-btn">
                                    <button type="submit" className="btn white b-a rounded no-b-l no-shadow">
                                        <i className="material-icons">&#xE8B6;</i>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </form>

                    <ul className="nav navbar-nav pull-right">
                        <li className="nav-item dropdown">
                            <a className="nav-link p-l b-l" data-toggle="modal" data-target="#m-a-f">
                                <i className="material-icons">&#xE145;</i>
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link p-l b-l" onClick={this.setProps.bind(this)}>
                                <i className="material-icons">&#xE161;</i>
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
        )
    }
}
