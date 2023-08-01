import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.png'
function App() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img className='vite-logo' width={90} src={viteLogo} alt="logo" />
          <img className='react-logo' width={90} src={reactLogo} alt="logo" />
        </div>
        <h1> Hello <span className='vite'>Vite</span> / React</h1>
      </div>
    </>
  )
}

export default App
