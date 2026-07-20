//Lesson-02 Building with ReactDOM and components
//Exercise: Build a "Snack Ranking App" Component in this file
//Import components here

import SnackHeader from './SnackHeader.jsx';
import SnackList from './SnackList.jsx';
import SnackFooter from './SnackFooter.jsx';

export default function StudentWork() {
  return (
    <div>
      {/* add JSX here */}
      {/* <p> Student output will go here</p> */}

      <SnackHeader />
      <SnackList />
      <SnackFooter />
    </div>
  );
}
