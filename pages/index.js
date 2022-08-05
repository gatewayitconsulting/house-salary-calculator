import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect } from 'react';
import styles from '../styles/Home.module.css';


export default function Home() {
  useEffect(() => {
    const salaryInput = document.getElementById('salary');
    salaryInput.focus();
  }, []);

  function calculateHousingSalaryCap(event) {
    const salary = document.querySelector('#salary').value;
    const salaryInput = document.getElementById('salary');
    const showCap = document.getElementById('showCap');
    var mortgageLimit = 0;
    var mortgageFactor = 0.3;
    var calculatedSalary = 0;
    var taxFactor = 0.3;
    var taxDifference = 0;
    var monthlyIncome = 0;
    var months = 12;
    var defaultValues = '0.00';

    if (!salary) {
      alert('Please enter your salary.');
      salaryInput.focus();
      event.preventDefault();
    } else {
      calculatedSalary = salary * taxFactor;
      taxDifference = salary - calculatedSalary;
      monthlyIncome = taxDifference / months;
      mortgageLimit = monthlyIncome * mortgageFactor;

      if (isNaN(mortgageLimit)) {
        alert('Please only enter numbers.');
        showCap.innerHTML = defaultValues;
        event.preventDefault();
      } else {
        showCap.innerHTML = mortgageLimit.toFixed(2);
        event.preventDefault();
      }
    }
  }

  function clearResults(event) {
    const salaryInput = document.getElementById('salary');
    const showCap = document.getElementById('showCap');
    var defaultValues = '0.00';

    showCap.innerHTML = defaultValues;
    salaryInput.value = '';
    salaryInput.focus();
    event.preventDefault();
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>House Salary Calculator</title>
        <meta name="description" content="A calculator to determine max housing payment from salary." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className='row mb-4'>
          <div className='col-12 col-md-6 mx-auto text-center'>
            <h1>House Salary Calculator</h1>
            <p>
              The point of this calculator is to make sure you are looking at a safe maximum to pay monthly for a mortgage using the salary you are at or planning to have.
            </p>
            <p>
              The calculator also works the same for rent.
            </p>
            <p>
              <em>
                The calculator is taking taxes at a rate of roughly 1/3 your salary and factoring that into the results.
              </em>
            </p>
          </div>
        </div>
        <div className='row'>
          <form>
            <label htmlFor="salary" className='col-12 text-center mb-3 form-label'>Salary:</label>
            <input type="text" name="salary" id="salary" className='col-12 text-center form-control' placeholder='Enter salary' />
            <button type="submit" onClick={calculateHousingSalaryCap} className='col-12 btn btn-outline-light mt-3'>
              Calculate
            </button>
            <button type="submit" onClick={clearResults} className='col-12 btn btn-outline-light mt-3'>
              Clear results
            </button>
          </form>
        </div>
        <div className='row mt-5'>
          <div className='col-12'>
            <p className={styles.monthlySummary}>
              <span id='money'>Monthly payment max after tax calculations: $</span>
              <span id='showCap' className={styles.bold}>0.00</span>
            </p>
          </div>
        </div>

        <div className='row mt-5'>
          <div className='col-12 col-md-6 mx-auto'>
            <p className={styles.disclaimer}>
              *You are responsible for your own investment decisions. House Salary Calculator will not be responsible for any errors or omissions in articles or postings, for hyperlinks embedded in messages, or for any results obtained from the use of such information. House Salary Calculator will not be liable for any loss or damage caused by a reader's reliance on information obtained in our assets. If you don't accept this responsibility for yourself, then you should not use House Salary Calculator.
            </p>
          </div>
        </div>
      </main >

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div >
  )
}
