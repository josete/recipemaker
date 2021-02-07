import 'semantic-ui-css/semantic.min.css'
import Navbar from './components/navbar/Navbar'
import Title from './components/title/Title'
import Ingredients from './components/ingredients/Ingredients'
import Steps from './components/steps/Steps'

function App() {
  return (
    <div>
      <Navbar />      
      <div class="container">
        <Title />
        <Ingredients />
        <Steps />
      </div>
    </div>
  );
}

export default App;
