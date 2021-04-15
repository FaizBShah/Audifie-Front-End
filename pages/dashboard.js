import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { withSSRContext } from 'aws-amplify';

function Dashboard(props) {
  const { authenticated } = props;

  return (
    <div>
      <Navbar authenticated={authenticated}/>
      <h1>Dashboard</h1>
      <Footer/>
    </div>
  )
}

export async function getServerSideProps({req, res}) {
  const { Auth } = withSSRContext({ req });

  try {
    const user = await Auth.currentAuthenticatedUser();
    console.log(user);
    return {
      props: {
        authenticated: true
      }
    }
  } catch (err) {
    console.log(err);
    res.writeHead(302, {Location: '/'});
    res.end();
  }
  return {
    props: {
      authenticated: false
    }
  }
}

export default Dashboard;