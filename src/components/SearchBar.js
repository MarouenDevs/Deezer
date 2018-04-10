import React  from 'react';
import {Form, Text} from 'react-form';
import PropTypes from 'prop-types';


const SearchBar = (props)=>  (
    <Form  onSubmit={submittedValues => {props.handleSearch(submittedValues)}}>
        {formApi => (
            <div className="row" id="search_bar">
                <form onSubmit={formApi.submitForm} className="form-horizental" id="form2">
                    <div className="input-group">
                        <Text field="title" id="title" className="form-control" placeholder="Tap your song title here ..."/>
                        <span className="input-group-btn">
               <button className="btn btn-default" type="submit" id="addressSearch">
                  <span className="glyphicon glyphicon-search"></span>
               </button>
            </span>
                    </div>
                </form>
            </div>
        )}
    </Form>
);



SearchBar.propTypes = {
    handleSearch: PropTypes.func.isRequired,
};

export default SearchBar;