import logo from './logo.svg';
import * as d from './App.css';
import { useState } from 'react';
import * as math from 'mathjs'
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const calcMap = ['+', '-', '*', '/']
function App() {
  const [digitNums, setDigitNums] = useState(['?', '?', '?'])
  const [digitResult, setDigitResult] = useState(0)

  const [calcSymbol, setCalcSymbol] = useState(['+', '+'])
  const [hasNotResult, setHasNotResult] = useState(false)
  const calculate = () => {
    const usedDigit = []
    const nextRun = () => {
      if (usedDigit.length === digitNums.length) {
        let statementStr = ''
        for(let i = 0; i < usedDigit.length; i++) {
          statementStr = `${statementStr}${usedDigit[i]}`
          if(i < usedDigit.length - 1) statementStr = `${statementStr}${calcSymbol[i]}`
        }
        if(math.evaluate(statementStr) == digitResult) return usedDigit
        else return []
      } else {
        
        for(let i = 0; i < nums.length; i++) {
          if(!usedDigit.includes(nums[i])) {
            usedDigit.push(nums[i])
            const result = nextRun(i + 1)
            if(result.length !== 0) return result
            else usedDigit.pop()
          }
        }
        return []
      }
    }
    const result = nextRun()
    if(result.length !== 0) {
      setDigitNums(result)
      setHasNotResult(false)
    }
    else setHasNotResult(true)
  }
  return (
    <div className="App logo">
      <div className='cout-box'>
        <div className='left-part'>
          {
            calcSymbol.map((item, index) => <div className='symbol-options' key={`${index}${item}`}>
              {index === 0 && <span style={{ margin: '0 10px', color: 'red' }}>{digitNums[0]}</span>}
              <select style={{ fontSize: '25px' }} value={item} onChange={({ target }) => {
                calcSymbol[index] = target.value
                setCalcSymbol([...calcSymbol])
              }}>
                {calcMap.map((item) => <option key={item} value={item}>{item}</option>)}
              </select>
              <span style={{ margin: '0 10px', color: 'red' }}>{digitNums[index + 1]}</span>
            </div>)
          }

          <button style={{ margin: '0 10px', }} onClick={() => {
            setCalcSymbol(calcSymbol.concat(['+']))
            setDigitNums(digitNums.concat(['?']))
          }}>+</button>
        </div>
        <div className='right-result'>
          <span style={{ margin: '0 10px' }}>=</span>
          <input className='digit-input' value={digitResult} onChange={(value) => {
            setDigitResult(value.target.value)
          }}></input>
        </div>
      </div>
      <div className='run-btn'><button style={{ fontSize: '25px' }} onClick={calculate}>count</button></div>
      {hasNotResult && <div style={{ margin: '0 10px', color: 'red' }}>计算出错</div>}
    </div>
  );
}

export default App;
