import './App.css';
import { useEffect, useReducer, useState } from 'react';
import JobList from './components/JobList/JobList';
import JobContext from './contexts/JobContext';
import { reducer } from './reducer/JobFilterReducer';
import SearchBar from './components/SearchBar/SearchBar';

// TODO: make the filter box
function App() {
  const [state, dispatch] = useReducer(reducer, { jobFilter: [], data: [] });
  const [jobs, setJobs] = useState([]);

  console.log(state);
  // const { jobFilter, data } = state;

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('../../../data.json');
      const data = await res.json();
      dispatch({ type: 'job/addData', payload: data });
      setJobs(data);
    };

    fetchData();
  }, []);

  // filter the jobs based on jobFilter(buttons that i've clicked on)
  useEffect(() => {
    if (state.jobFilter.length > 0) {
      let jobData = [];
      state.jobFilter.forEach((job) => {
        if (jobData.length) {
          jobData = jobData.filter((obj) => {
            const { role, level, tools, languages } = obj;
            return (
              job === role ||
              job === level ||
              tools.includes(job) ||
              languages.includes(job)
            );
          });
        } else {
          jobData = jobs.filter((obj) => {
            const { role, level, tools, languages } = obj;
            return (
              job === role ||
              job === level ||
              tools.includes(job) ||
              languages.includes(job)
            );
          });
        }
      });
      dispatch({ type: 'job/removeData', payload: jobData });
    } else {
      console.log('in else block');
      dispatch({ type: 'job/addData', payload: jobs });
    }
  }, [state.jobFilter]);
  return (
    <>
      <JobContext.Provider value={{ dispatch, state }}>
        <header></header>
        <main>
          {state.jobFilter.length ? <SearchBar /> : ''}
          <JobList jobs={state} />
        </main>
      </JobContext.Provider>
    </>
  );
}

export default App;

// if (state.length > 0) {
//   console.log('==========================');
//   let jobData = [];
//   let counter = 0;
//   state.forEach((job) => {
//     counter++;
//     console.log(counter);
//     jobData = [];
//     jobs.forEach((obj) => {
//       console.log(obj);
//       const { role, level, tools, languages } = obj;
//       if (
//         job === role ||
//         job === level ||
//         tools.includes(job) ||
//         languages.includes(job)
//       ) {
//         jobData.push(obj);
//       }
//     });
//     setJobs(jobData);
//   });
//   console.log(jobData);
// } else {
//   setJobs(data);
// }

//==========================second way ================
// if (state.length > 0) {
//   console.log('==========================');
//   let jobData = [];
//   state.forEach((job) => {
//     if (jobData.length) {
//       jobData = jobData.filter((obj) => {
//         const { role, level, tools, languages } = obj;
//         return (
//           job === role ||
//           job === level ||
//           tools.includes(job) ||
//           languages.includes(job)
//         );
//       });
//     } else {
//       jobData = jobs.filter((obj) => {
//         const { role, level, tools, languages } = obj;
//         return (
//           job === role ||
//           job === level ||
//           tools.includes(job) ||
//           languages.includes(job)
//         );
//       });
//     }
//     setJobs(jobData);
//   });
// } else {
//   setJobs(data);
// }
