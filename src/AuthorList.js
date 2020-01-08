import React from "react";
import AuthorCard from "./AuthorCard";

function AuthorList(props) {
    const {authors} = props;
    return (
        <div className="content col-10">
            <div className="authors">
                <h3>Authors</h3>
                <div className="row">
                    {authors.map( (auth, index) => {
                        return (
                            <AuthorCard author={auth} key={index}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default AuthorList;