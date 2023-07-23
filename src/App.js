import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from './components/Employees';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GroupedTeamMembers from "./components/GroupedTeamMembers"
import Nav from './components/Nav'
import NotFound from './components/NotFound'


export default function App() {


  const [selectedTeam, setSelectedTeam] = React.useState(JSON.parse(localStorage.getItem('selectedTeam')) || 'TeamB')

  const [employees, setEmployees] = React.useState(JSON.parse(localStorage.getItem('employeeList')) ||
    [
      { id: 1, fullName: "Bob Jones", designation: "JavaScript Developer", gender: "male", teamName: "TeamA" },
      { id: 2, fullName: "Jill Bailey", designation: "Node Developer", gender: "female", teamName: "TeamA" },
      { id: 3, fullName: "Gail Shepherd", designation: "Java Developer", gender: "female", teamName: "TeamA" },
      { id: 4, fullName: "Sam Reynolds", designation: "React Developer", gender: "male", teamName: "TeamB" },
      { id: 5, fullName: "David Henry", designation: "DotNet Developer", gender: "male", teamName: "TeamB" },
      { id: 6, fullName: "Sarah Blake", designation: "SQL Server DBA", gender: "female", teamName: "TeamB" },
      { id: 7, fullName: "James Bennet", designation: "Angular Developer", gender: "male", teamName: "TeamC" },
      { id: 8, fullName: "Jessica Faye", designation: "API Developer", gender: "female", teamName: "TeamC" },
      { id: 9, fullName: "Lita Stone", designation: "C++ Developer", gender: "female", teamName: "TeamC" },
      { id: 10, fullName: "Daniel Young", designation: "Python Developer", gender: "male", teamName: "TeamD" },
      { id: 11, fullName: "Adrian Jacobs", designation: "Vue Developer", gender: "male", teamName: "TeamD" },
      { id: 12, fullName: "Devin Monroe", designation: "Graphic Designer", gender: "male", teamName: "TeamD" }])





  function handleTeamSelectionChange(event) {
    setSelectedTeam(event.target.value)
  }


  function handleEmployeeCardClick(e) {
    console.log(e.currentTarget.id)
    const transformedEmployees = employees.map((employee) => employee.id === parseInt(e.currentTarget.id)
      ? employee.teamName === selectedTeam ? { ...employee, teamName: '' }
        : { ...employee, teamName: selectedTeam } : employee);
    setEmployees(transformedEmployees);
  }


  React.useEffect(() => {
    localStorage.setItem('employeeList', JSON.stringify(employees))
  }, [employees])

  React.useEffect(() => {
    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam))
  }, [selectedTeam])







  return (
    <BrowserRouter>
      <Nav />
      <Header
        selectedTeam={selectedTeam}
        teamMemberCount={
          employees.filter((employee) => selectedTeam === employee.teamName).length
        }
      />

      <Routes>
        <Route path='/' element={
          <Employees
            employees={employees}
            selectedTeam={selectedTeam}
            handleTeamSelectionChange={handleTeamSelectionChange}
            handleEmployeeCardClick={handleEmployeeCardClick}
          />
        }
        >
        </Route>
        <Route path='/GroupedTeamMember' element={<GroupedTeamMembers
          selectedTeam={selectedTeam}
          employees={employees}
          setSelectedTeam={setSelectedTeam}
        />} />
        <Route path='*' element = {<NotFound />} />
      </Routes>


      <Footer />
    </BrowserRouter>
  )
}

