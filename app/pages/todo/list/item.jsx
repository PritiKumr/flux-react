/* jshint node: true */
"use strict";

var constants = require("constants").todo,
    dispatcher = require("dispatcher");

module.exports = React.createClass({
    getInitialState: function() {
        return {
            deleted: false,
        };
    },
    toggle: function() {
        this.props.todo.isComplete = !this.props.todo.isComplete;
        dispatcher.dispatch({ type: constants.update, content: this.props.todo });
    },
    reset: function() {
        this.props.todo.isDeleted = true;
        this.state.deleted = !this.state.deleted;
        dispatcher.dispatch({type: constants.remove, content: this.props.todo });

    },
    update: function() {
        dispatcher.dispatch({type: constants.update, content: this.props.todo });
    },
    render: function() {
        if ((this.state.deleted) == false){
            var showButt = <button type="button" className="btn btn-default pull-right spacing-right" onClick={this.reset}>Delete</button>
        }
        return <li className="list-group-item pointer" onClick={this.toggle}>
            {this.props.todo.name}
            <button type="button" className="btn btn-default pull-right spacing-right" onClick={this.reset}>Delete</button>
         </li>; 
    } 
});