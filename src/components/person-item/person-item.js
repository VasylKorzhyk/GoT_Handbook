import React from "react";
import { personSelector } from "../../selectors";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom'

function PersonItem({person}) {
  return person ? <p><NavLink to={`/people/${person.id}`}>{person.name}</NavLink></p> : <div/>;
}

export default connect((state, ownProps) => ({
  person: personSelector(state, ownProps)
}))(PersonItem);