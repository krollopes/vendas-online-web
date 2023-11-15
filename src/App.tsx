import LoginScreen from './modules/login';
import { BackgroundImage } from './modules/login/styles/loginScreen.styles';

function App() {
  return (
    <>
      <BackgroundImage src="./background.png" />
      <LoginScreen />
    </>
  );
}

export default App;
