import React from "react";

function TableCard({ ssn, image, firstName, lastName, phone, email, dob }) {
  return (
    <tbody>
      <tr id={firstName.toLowerCase()}>
        <th scope="row" key={ssn}>
          <img
            src={image}
            alt={firstName + " " + lastName + " thumbnail image"}
          />
        </th>
        <td>{firstName + " " + lastName}</td>
        <td>{phone}</td>
        <td>{email}</td>
        <td>{dob}</td>
      </tr>
    </tbody>
  );
}

export default TableCard;
