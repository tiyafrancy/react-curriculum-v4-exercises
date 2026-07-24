//Lesson-03 Component Lifecycle, Hooks, State, and Props
//Exercise: React Bug Hunt – Fix the broken components in this folder
//Import components here

import BugEffectLoop from './exercises/lesson-03/BugEffectLoop.jsx';
import BugMutatedState from './exercises/lesson-03/BugMutatedState.jsx';
import BugProps from './exercises/lesson-03/BugProps.jsx';

export default function StudentWork() {
  return (
    <div>
      {/* add components here */}
      {/* <p>Student output will go here</p> */}

      <BugEffectLoop />
      <BugMutatedState />
      <BugProps />
    </div>
  );
}
