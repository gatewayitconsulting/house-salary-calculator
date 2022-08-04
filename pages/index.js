import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import React, { useState, useEffect } from 'react';




export default function Home() {
  // function clearResult() {
  //   const salary = document.querySelector('#salary').value;
  //   const money = document.getElementById('#money');

  //   if (!salary) {
  //     money.style.display("none");
  //   }
  // }

  // useEffect(() => {
  //   clearResult();
  // });

  function calculateHousingSalaryCap(event) {
    const salary = document.querySelector('#salary').value;
    var mortgageLimit = 0;
    var mortgageFactor = 0.3;
    var calculatedSalary = 0;
    var taxFactor = 0.3;
    var taxDifference = 0;
    var monthlyIncome = 0;
    var months = 12;

    if (!salary) {
      alert('Please enter your salary.');
    } else {
      calculatedSalary = salary * taxFactor;
      taxDifference = salary - calculatedSalary;
      monthlyIncome = taxDifference / months;
      mortgageLimit = monthlyIncome * mortgageFactor;
      document.getElementById('showCap').innerHTML = mortgageLimit;
      event.preventDefault();
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>House Salary Calculator</title>
        <meta name="description" content="A calculator to determine max housing payment from salary." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className='row mb-5'>
          <div className='col-6 mx-auto text-center'>
            <h1>House Salary Calculator</h1>
            <p>
              The point of this calculator is to make sure you are looking at a safe maximum to pay monthly for a mortgage using the salary you are at or planning to have.
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
            <label for="salary" className='col-12 text-center mb-3 form-label'>Salary:</label>
            <input type="text" name="salary" id="salary" className='col-12 text-center form-control' />
            <button type="submit" onClick={calculateHousingSalaryCap} className='col-12 btn btn-light mt-3'>
              Calculate
            </button>
          </form>
        </div>
        <div className='row mt-5'>
          <div className='col-12'>
            <p className={styles.white}>
              <span id='money'>Monthly Payment Max after Tax: $</span>
              <span id='showCap' className={styles.bold}></span>
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
