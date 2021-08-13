import React from "react"

function Badge(props) {
    return (
        <div className="d-flex justify-content-end user-select-none w-100">
            <span className="badge bg-secondary">{props.name}</span>
        </div>
    )
}

export default Badge