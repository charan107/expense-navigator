import React, { useState, useMemo } from 'react'
import styled from "styled-components";
import bg from './img/bg.png'
import { MainLayout } from './styles/Layouts'
import Orb from './Components/Orb/Orb'
import Navigation from './Components/Navigation/Navigation'
import Dashboard from './Components/Dashboard/Dashboard';
import Income from './Components/Income/Income'
import Expenses from './Components/Expenses/Expenses';
import { useGlobalContext } from './context/globalContext'
import SignupPage from './Components/SignupPage/SignupPage'

function App() {
  const [active, setActive] = useState(1);
  const [isSignedIn, setIsSignedIn] = useState(false); // Track the user's sign-in status
  const [user, setUser] = useState(null); // Store user information after sign-up

  // Accessing global context for income/expense data
  const global = useGlobalContext();
  console.log(global);

  // Function to handle successful sign-up
  const handleSignUp = (userInfo) => {
    setUser(userInfo);
    setIsSignedIn(true);
  }

  // Function to handle sign-out
  const handleSignOut = () => {
    setUser(null);
    setIsSignedIn(false);
  }

  // Function to display content based on active state
  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Dashboard />; // Customize based on actual content for case 2
      case 3:
        return <Income />;
      case 4:
        return <Expenses />;
      default:
        return <Dashboard />;
    }
  };

  // Memoizing the Orb component to avoid unnecessary re-renders
  const orbMemo = useMemo(() => <Orb />, []);

  return (
    <AppStyled bg={bg} className="App">
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive} handleSignOut={handleSignOut} user={user} />
        <main>
          {/* If not signed in, show the signup form */}
          {!isSignedIn ? (
            <SignupPage onSignUp={handleSignUp} />
          ) : (
            displayData() // Show dashboard, income, or expenses based on active state
          )}
        </main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default App;
