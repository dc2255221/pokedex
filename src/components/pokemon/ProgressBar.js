import React from 'react'

export const ProgressBar = ({statName, statNum}) => {
    return (
        <div className="row align-items-center">
            <div className="col-12 col-md-3"> 
                {statName.split(/(?=[A-Z])/)
                    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                    .join(' ')} 
            </div>
            <div className="col-12 col-md-9">
                <div className="progress">
                    <div className="progress-bar" 
                            role="progressBar" 
                            style={{width: `${statNum}%`}}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100">
                        <small> {statNum} </small>
                    </div>
                </div>    
            </div>
        </div> 
    )
}
