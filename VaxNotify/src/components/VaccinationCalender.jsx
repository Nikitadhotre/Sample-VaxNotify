import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function VaccinationCalendar() {
  const vaccinations = [
    {
      age: "Birth (within 24–72 h of birth)",
      vaccines: [
        {
          vaccine: "BCG",
          dose: "0.05 mL",
          route: "ID",
          site: "Left upper arm",
        },
        {
          vaccine: "OPV-0",
          dose: "2 drops",
          route: "Oral",
          site: "",
        },
        {
          vaccine: "Hepatitis B-0",
          dose: "0.5 mL",
          route: "IM",
          site: "Left thigh",
        },
      ],
    },
    {
      age: "6 weeks",
      vaccines: [
        {
          vaccine: "DTwP/DTaP1",
          dose: "0.5 mL",
          route: "IM",
          site: "Anterolateral aspect of thigh",
        },
        { vaccine: "Hib-1", dose: "", route: "", site: "" },
        { vaccine: "IPV-1", dose: "", route: "", site: "" },
        { vaccine: "Hep B", dose: "", route: "", site: "" },
        { vaccine: "PCV10/13-1", dose: "", route: "", site: "" },
        {
          vaccine: "Rota-1",
          dose: "0.5–2 mL",
          route: "Oral",
          site: "Squirt toward buccal mucosa",
        },
      ],
    },
    {
      age: "10 weeks",
      vaccines: [
        {
          vaccine: "DTwP/DTaP2",
          dose: "0.5 mL",
          route: "IM",
          site: "Anterolateral aspect of thigh",
        },
        { vaccine: "Hib-2", dose: "", route: "", site: "" },
        { vaccine: "IPV-2", dose: "", route: "", site: "" },
        { vaccine: "Hep B", dose: "", route: "", site: "" },
        { vaccine: "PCV10/13-2", dose: "", route: "", site: "" },
        {
          vaccine: "Rota-2",
          dose: "0.5–2 mL",
          route: "Oral",
          site: "Squirt toward buccal mucosa",
        },
      ],
    },
    {
      age: "14 weeks",
      vaccines: [
        {
          vaccine: "DTwP/DTaP3",
          dose: "0.5 mL",
          route: "IM",
          site: "Anterolateral aspect of thigh",
        },
        { vaccine: "Hib-3", dose: "", route: "", site: "" },
        { vaccine: "IPV-3", dose: "", route: "", site: "" },
        { vaccine: "Hep B", dose: "", route: "", site: "" },
        { vaccine: "PCV10/13-3", dose: "", route: "", site: "" },
        {
          vaccine: "Rota-3",
          dose: "0.5–2 mL",
          route: "Oral",
          site: "Squirt toward buccal mucosa",
        },
      ],
    },
    {
      age: "6 months",
      vaccines: [
        {
          vaccine: "Hep B",
          dose: "0.5 mL",
          route: "IM",
          site: "",
        },
        {
          vaccine: "OPV-1",
          dose: "2 drops",
          route: "Oral",
          site: "",
        },
        {
          vaccine: "IIV-1",
          dose: "0.25 mL",
          route: "IM",
          site: "",
        },
      ],
    },
    {
      age: "7 months",
      vaccines: [
        {
          vaccine: "IIV-2",
          dose: "0.25 mL",
          route: "IM",
          site: "",
        },
      ],
    },
    {
      age: "9 months",
      vaccines: [
        {
          vaccine: "OPV-2",
          dose: "2 drops",
          route: "Oral",
          site: "",
        },
        {
          vaccine: "MMR-1/MR",
          dose: "0.5 mL",
          route: "SC",
          site: "",
        },
        {
          vaccine: "Meningococcal conjugate vaccine-1",
          dose: "0.5 mL",
          route: "IM",
          site: "",
        },
      ],
    },
    {
      age: "10 months",
      vaccines: [
        {
          vaccine: "Typhoid conjugate vaccine-1",
          dose: "0.5 mL",
          route: "IM",
          site: "",
        },
      ],
    },
    {
      age: "12 months",
      vaccines: [
        {
          vaccine: "Hepatitis A (killed or live)",
          dose: "0.5 mL",
          route: "IM (killed) or SC (live)",
          site: "",
        },
        {
          vaccine: "JE-1",
          dose: "0.25 mL",
          route: "IM",
          site: "",
        },
        {
          vaccine: "Cholera vaccine",
          dose: "Oral",
          route: "Oral",
          site: "",
        },
      ],
    },
    {
      age: "13 months",
      vaccines: [
        {
          vaccine: "JE-2",
          dose: "0.25 mL",
          route: "IM",
          site: "",
        },
      ],
    },
    {
      age: "15 months",
      vaccines: [
        {
          vaccine: "MMR-2",
          dose: "0.5 mL",
          route: "SC",
          site: "",
        },
        {
          vaccine: "Varicella-1",
          dose: "0.5 mL",
          route: "SC",
          site: "",
        },
      ],
    },
    {
      age: "15–18 months",
      vaccines: [
        {
          vaccine: "PCV-booster",
          dose: "0.5 mL",
          route: "IM",
          site: "",
        },
      ],
    },
    {
      age: "16–18 months",
      vaccines: [
        {
          vaccine: "DTwP/DTaP (Booster 1)",
          dose: "0.5 mL",
          route: "IM",
          site: "",
        },
        {
          vaccine: "IPV –Booster",
          dose: "0.5 mL",
          route: "IM",
          site: "",
        },
        {
          vaccine: "Hib –Booster",
          dose: "0.5 mL",
          route: "IM",
          site: "",
        },
      ],
    },
    {
      age: "18 months",
      vaccines: [
        {
          vaccine: "Hepatitis A (killed)-2",
          dose: "0.5 mL",
          route: "IM",
          site: "",
        },
      ],
    },
    {
      age: "2 years",
      vaccines: [
        {
          vaccine: "Typhoid conjugate-2 or Typhoid polysaccharide",
          dose: "0.5 mL",
          route: "IM",
          site: "Upper arm",
        },
        {
          vaccine: "Meningococcal-2",
          dose: "0.5 mL",
          route: "IM",
          site: "",
        },
      ],
    },
    {
      age: "4–6 years",
      vaccines: [
        {
          vaccine: "DTwP/DTaP/Tdap (Booster 2)",
          dose: "",
          route: "",
          site: "",
        },
        { vaccine: "MMR", dose: "", route: "", site: "" },
        {
          vaccine: "Varicella-2",
          dose: "",
          route: "",
          site: "",
        },
        { vaccine: "OPV-3", dose: "", route: "", site: "" },
      ],
    },
    {
      age: "9 years onwards (girls)",
      vaccines: [
        {
          vaccine: "HPV",
          dose: "",
          route: "",
          site: "",
        },
      ],
    },
    {
      age: "10–12 years",
      vaccines: [
        {
          vaccine: "Tdap/Td",
          dose: "0.5 mL",
          route: "Intra-muscular",
          site: "",
        },
      ],
    },
    {
      age: "16 years",
      vaccines: [
        {
          vaccine: "Td/TT",
          dose: "0.5 mL",
          route: "Intra-muscular",
          site: "",
        },
      ],
    },
  ];

  return (
    <div className="container my-4">
      <h2 className="text-center">
        Recommended Immunization Schedule (0–18 years)
      </h2>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Age</th>
              <th>Vaccine</th>
              <th>Dose</th>
              <th>Route</th>
              <th>Site</th>
            </tr>
          </thead>
          <tbody>
            {vaccinations.map((vacGroup, index) => {
              return (
                <React.Fragment key={index}>
                  <tr>
                    <td rowSpan={vacGroup.vaccines.length}>
                      {vacGroup.age}
                    </td>
                    <td>{vacGroup.vaccines[0].vaccine}</td>
                    <td>{vacGroup.vaccines[0].dose}</td>
                    <td>{vacGroup.vaccines[0].route}</td>
                    <td>{vacGroup.vaccines[0].site}</td>
                  </tr>
                  {vacGroup.vaccines.slice(1).map((vaccine, vIndex) => (
                    <tr key={vIndex}>
                      <td>{vaccine.vaccine}</td>
                      <td>{vaccine.dose}</td>
                      <td>{vaccine.route}</td>
                      <td>{vaccine.site}</td>
                    </tr>
                  ))}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default VaccinationCalendar;
