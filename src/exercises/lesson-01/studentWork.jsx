//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here

  const name = 'Tiya Francy Arangassery';
  const age = 39;
  const hobbies = ['Reading', 'Crafting', 'Studying'];

  return (
    <div>
      {/* add JSX here */}
      {/* <p> Student output will go here </p> */}

      <h1>About Me</h1>

      <p>
        I am an aspiring web developer with a solid foundation in core
        programming logic, currently sharpening my practical coding skills
        through Code the Dream's React Course. While I have studied computer
        applications and programming concepts in the past, I am currently
        focusing on building hands-on experience from the ground up.
      </p>

      <h3>My Hobbies</h3>
      <u>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </u>
    </div>
  );
}
