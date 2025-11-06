import React, {useState} from 'react';

function CgpaCalculator() {

    const [subject1, setSubject1] = useState('');
    const [subject1Credit, setSubject1Credit] = useState('');

    const [subject2, setSubject2] = useState('');
    const [subject2Credit, setSubject2Credit] = useState('');

    const [subject3, setSubject3] = useState('');
    const [subject3Credit, setSubject3Credit] = useState('');

   

    const calculateCgpa = () => {
         if (
    !subject1 || !subject1Credit ||
    !subject2 || !subject2Credit ||
    !subject3 || !subject3Credit
  ) {
    alert("Please fill all inputs before calculating cgpa!");
    return;
  }

        const cgpa1 = Number(subject1);
        const credit1 = Number(subject1Credit);

        const cgpa2 = Number(subject2);
        const credit2 = Number(subject2Credit);

        const cgpa3 = Number(subject3);
        const credit3 = Number(subject3Credit);

       const totalPoints = (cgpa1 * credit1) + (cgpa2 * credit2) + (cgpa3 * credit3);
       const totalCredits = credit1 + credit2 + credit3;
       const cgpa = totalPoints / totalCredits;
       alert("Your CGPA is: " + cgpa.toFixed(2));
    };


  return(
    <div className="cgpa-container">
        <h2>CGPA Calculator</h2>


    <input type="number"  step="0.1"placeholder="GPA 1" onChange={(e) => setSubject1(e.target.value)} />
    <input type="number" placeholder="Credit Hour 1" onChange={(e) => setSubject1Credit(e.target.value)} />

    <input type="number"  step="0.1" placeholder="GPA 2" onChange={(e) => setSubject2(e.target.value)} />
   <input type="number" placeholder="Credit Hour 2" onChange={(e) => setSubject2Credit(e.target.value)} />

    <input type="number"  step="0.1" placeholder="GPA 3" onChange={(e) => setSubject3(e.target.value)} />
    <input type="number" placeholder="Credit Hour 3" onChange={(e) => setSubject3Credit(e.target.value)} />

    <button onClick={calculateCgpa}>Calculate Cgpa</button>
    </div>
  );
}
export default CgpaCalculator;