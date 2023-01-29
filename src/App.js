import './App.css';
import styled from 'styled-components';


const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`; 

function App() {
  return (
    <div className="App">
      <h1>Bernardo Castañeda Rios</h1>
      <Button as="a" href="https://utd.edu.mx" target="_blank">UTD</Button>
      <Button as="a" href="https://github.com/junior45263" target="_blank">GitHub</Button>
      <Button as="a" href="https://www.instagram.com/wonderwall.1301/" target="_blank">Instagram</Button>
    </div>
  );
}

export default App;
