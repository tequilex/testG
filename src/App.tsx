// import { useEffect, useState, useMemo } from 'react'
// import {format} from 'date-fns'
import "./App.css";

interface User {
  [key: string]: string | number | boolean | 
  { [key: string]: string | number };
}

function App() {

  const user: User = {
    name: "John",
    age: 30,
    fam: "qqq1q",
    bool: true,
    area: {
      city: "kras",
      locale: "ru",
      age: 230,
      date: 2,
      area: 'northSide'
    },
  };

  const clone: User = {};

  for (const key in user) {
    clone[key] = user[key];
  }

  clone.name = "Pete";

  // console.log(user.name);
  // console.log(clone.name);

  const clone2 = Object.assign(user, { name: "andrew" });

  const clone3 = { ...user };

  // console.log(clone3);

  const clone4 = structuredClone(user);

  console.log(clone4);

  // let clone = {}; // новый пустой объект

  // console.log(clone);

  // давайте скопируем все свойства user в него
  // for (let key in user) {
  //   clone[key] = user[key];
  // }

  // console.log(clone);

  // const [selectedNum, setSelectedNum] = useState(100);

  // function isPrime(n: number){
  //   const max = Math.ceil(Math.sqrt(n));
  //   console.log('render num');

  //   if (n === 2) {
  //     return true;
  //   }

  //   for (let counter = 2; counter <= max; counter++) {
  //     if (n % counter === 0) {
  //       return false;
  //     }
  //   }

  //   return true;
  // }

  // function useTime() {
  //   const [time, setTime] = useState(new Date());

  //   console.log('render time');

  //   useEffect(() => {
  //     const intervalId = window.setInterval(() => {
  //       setTime(new Date());
  //     }, 1000);

  //     return () => {
  //       window.clearInterval(intervalId);
  //     }
  //   }, []);

  //   return time;
  // }

  // const time = useTime();

  // const allPrimes = useMemo(() => {
  //   const result = [];
  //   for (let counter = 2; counter < selectedNum; counter++) {
  //   if (isPrime(counter)) {
  //     result.push(counter);
  //   }
  // }
  // return result;
  // }, [selectedNum])

  return (
    <>
      {/* <p className="clock">
        {format(time, 'hh:mm:ss a')}
      </p>
      <form>
        <label htmlFor="num">Your number:</label>
        <input
          type="number"
          value={selectedNum}
          onChange={(event) => {
            const num = Math.min(100_000, Number(event.target.value));
            setSelectedNum(num);
          }}
        />
      </form>
      <p>
        There are {allPrimes.length} prime(s) between 1 and {selectedNum}:
        {' '}
        <span className="prime-list">
          {allPrimes.join(', ')}
        </span>
      </p> */}
    </>
  );
}

export default App;
