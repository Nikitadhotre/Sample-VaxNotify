import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProfilePage.css'; 

// Vaccination calendar data
const VaccinationCalendar = [
  {
    age: "0–6 months",
    vaccines: [
      { vaccine: "Hepatitis B", dose: "1st Dose", remarks: "At birth" },
      { vaccine: "DTPaHibVIP", dose: "1st Dose", remarks: "2 months" },
    ],
  },
  {
    age: "6 months–1 year",
    vaccines: [
      { vaccine: "DTPaHibVIP", dose: "2nd Dose", remarks: "4 months" },
      { vaccine: "Measles", dose: "1st Dose", remarks: "9 months" },
    ],
  },
  {
    age: "1–2 years",
    vaccines: [
      { vaccine: "DTPaHibVIP", dose: "3rd Dose", remarks: "15 months" },
      { vaccine: "MMR", dose: "1st Dose", remarks: "12 months" },
    ],
  },
  {
    age: "2–6 years",
    vaccines: [
      { vaccine: "DTPaHibVIP", dose: "4th Dose", remarks: "4–6 years" },
    ],
  },
  {
    age: "7–18 years",
    vaccines: [
      { vaccine: "TdaP", dose: "1st Dose", remarks: "11–12 years" },
      { vaccine: "HPV", dose: "1st Dose", remarks: "11–12 years" },
      { vaccine: "Meningococcal", dose: "1st Dose", remarks: "11–12 years" },
    ],
  },
  {
    age: "Adult",
    vaccines: [
      { vaccine: "Flu Vaccine", dose: "Annual", remarks: "Every year" },
      { vaccine: "Tdap", dose: "1 Dose", remarks: "Every 10 years" },
    ],
  },
];

const ProfilePage = ({ user }) => {
  const { name, email, vaccinations, birthdate } = user;

  // Calculate age based on birthdate
  const calculateAge = (birthdate) => {
    const birthDateObj = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDifference = today.getMonth() - birthDateObj.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDateObj.getDate())) {
      age--;
    }
    return age;
  };

  // Get upcoming vaccinations based on age
  const getUpcomingVaccinations = (age) => {
    return VaccinationCalendar
      .filter(v => {
        const [minAge, maxAge] = v.age.split("–").map(ageStr => parseInt(ageStr.split(" ")[0]));
        return age >= minAge && (maxAge ? age <= maxAge : true);
      })
      .flatMap(v => v.vaccines.map(vaccine => ({
        name: vaccine.vaccine,
        age: v.age,
        dose: vaccine.dose,
        remarks: vaccine.remarks,
      })));
  };

  const age = calculateAge(birthdate);
  const upcomingVaccinations = getUpcomingVaccinations(age);

  return (
    <div className="container mt-5 profile-page-container">
      <h1 className="mb-4 text-center">Profile Dashboard</h1>
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h2>{name}'s Vaccination Dashboard</h2>
        </div>
        <div className="card-body">
          <h5>Email: {email}</h5>
          <h5 className="mt-4">Vaccination Status:</h5>
          {vaccinations && vaccinations.length > 0 ? (
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Vaccine Name</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {vaccinations.map((vaccine, index) => (
                  <tr key={index}>
                    <td>{vaccine.name}</td>
                    <td>{vaccine.date}</td>
                    <td>
                      <span
                        className={`badge ${
                          vaccine.status === 'Completed'
                            ? 'badge-success'
                            : 'badge-warning'
                        }`}
                      >
                        {vaccine.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No vaccinations recorded.</p>
          )}

          <h5 className="mt-4">Upcoming Vaccinations:</h5>
          {upcomingVaccinations.length > 0 ? (
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Vaccine Name</th>
                  <th>Age Group</th>
                  <th>Dose</th>
                  <th>Remarks</th>
                </tr>
              </thead>
              <tbody>
                {upcomingVaccinations.map((vaccine, index) => (
                  <tr key={index}>
                    <td>{vaccine.name}</td>
                    <td>{vaccine.age}</td>
                    <td>{vaccine.dose}</td>
                    <td>{vaccine.remarks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No upcoming vaccinations for your age.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

