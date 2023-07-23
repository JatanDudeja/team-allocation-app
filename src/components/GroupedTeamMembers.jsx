import React from "react"

export default function GroupedTeamMembers({employees, selectedTeam, setSelectedTeam}){

    const [groupedEmployees, setGroupedEmployees] = React.useState(groupTeamMembers())

    function groupTeamMembers(){
        var teams = []

        var teamAMembers = employees.filter((employee) => employee.teamName === "TeamA")
        var teamA = {team : "TeamA", members : teamAMembers, collapsed : selectedTeam === "TeamA" ? false : true}
        teams.push(teamA)

        var teamBMembers = employees.filter((employee) => employee.teamName === "TeamB")
        var teamB = {team : "TeamB", members : teamBMembers, collapsed : selectedTeam === "TeamB" ? false : true}
        teams.push(teamB)

        var teamCMembers = employees.filter((employee) => employee.teamName === "TeamC")
        var teamC = {team : "TeamC", members : teamCMembers, collapsed : selectedTeam === "TeamC" ? false : true}
        teams.push(teamC)

        var teamDMembers = employees.filter((employee) => employee.teamName === "TeamD")
        var teamD = {team : "TeamD", members : teamDMembers, collapsed : selectedTeam === "TeamD" ? false : true}
        teams.push(teamD)

        return teams

    }


    function handleTeamClick(e){
        var transformedGroupedData = groupedEmployees.map((employee) => employee.team === e.currentTarget.id ? {...employee, collapsed : !employee.collapsed} : employee)
        setGroupedEmployees(transformedGroupedData)
        setSelectedTeam(e.currentTarget.id)
    }



    return(
        <main className="container">
            {
                groupedEmployees.map((item) => {
                    return (
                        <div key={item.team} className="card mt-2" style={{cursor : "pointer"}}>
                            <h4 id = {item.team} className="card-header text-secondary bg-white" onClick={handleTeamClick}>
                                Team Name : {item.team}
                            </h4>
                            <div id={"collapse_" + item.team} className={item.collapsed ? "collapse" : ""} style={{cursor : "pointer"}}>
                                <hr />
                                {
                                    item.members.map(member => {
                                        return(
                                            <div className="mt-2">
                                                <h5 className="card-title m-2">
                                                    <span className="text-dark">Full Name : {member.fullName}</span>
                                                </h5>
                                                <p className="">Designation : {member.designation}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </main>
    )
}