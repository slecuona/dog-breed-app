import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useReducer, useRef, useState } from 'react'
import Spinner from '../../src/components/spinner'
import { useDogs } from '../../src/hooks/use-dogs'
import { ApiService } from '../../src/services/api.service'
import styles from '../../styles/Home.module.css'

const apiService = new ApiService();

const Home: NextPage = () => {
  const [breedName, setBreedName] = useState();
  const [photoUrl, setPhotoUrl] = useState();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);
    await apiService.addDog({
      breedName,
      photoUrl
    })
    setLoading(false);
    alert('Dog added successfully');
    router.push('/');
  }

  const handleBreedNameChange = (e: any) => {
    setBreedName(e.target.value);
  }

  const handlePhotoUrlChange = (e: any) => {
    setPhotoUrl(e.target.value);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Dogs breed App - Add new dog</title>
        <meta name="description" content="Add new dog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Add <span>new dog</span>
        </h1>

        <p className={styles.description}>
          Go to <Link href='/'>home</Link>
          <br/>
          Find a new dog picture&nbsp;
          <a 
            href='https://dog.ceo/dog-api/breeds-list' 
            target='_blank' 
            rel="noopener noreferrer"
          >here</a>
        </p>

        <div className={styles.formcontainer}>
          {
            loading && <Spinner/>
          }
          <form onSubmit={handleSubmit}>
            <fieldset>
              <label>
                <p>Breed name</p>
                <input required name="breedName" onChange={handleBreedNameChange}/>
              </label>
            </fieldset>
            <fieldset>
              <label>
                <p>Photo URL</p>
                <input required name="photoUrl" onChange={handlePhotoUrlChange}/>
              </label>
            </fieldset>
            <button type="submit">Submit</button>
          </form>
        </div>
      </main>

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
    </div>
  )
}

export default Home
