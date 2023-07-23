import React from 'react'
import Teams from './Teams'
import TeamMembers from './TeamMembers'

export default function Employees({employees, selectedTeam, handleTeamSelectionChange, handleEmployeeCardClick}) {


    return (
        <main className='container'>
            <div className='row justify-content-center mt-3 mb-3'>
                <div className='col-8'>
                    <Teams selectedTeam = {selectedTeam} handleTeamSelectionChange = {handleTeamSelectionChange}/>
                </div>
            </div>
            <div class='row justify-content-center mt-3 mb-3'>
                <div className='col-8'>
                    <div className='card-collection'>
                        <TeamMembers 
                            employees = {employees}
                            selectedTeam = {selectedTeam}
                            handleEmployeeCardClick = {handleEmployeeCardClick}
                        
                        />
                    </div>

                </div>
            </div>
        </main>
    )
}