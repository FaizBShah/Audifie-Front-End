import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Button } from '@material-ui/core'

function Home() {
  return (
    <div style={{height: "100vh", width: "100%"}}>
      <img style={{width: "100%"}} src="assets/kit/coverAsset@10x.png"></img>
      <Button variant="contained" color="secondary">Default</Button>
    </div>
  )
}

export default Home;