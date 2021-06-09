import React from 'react';
import { useRouter } from 'next/router';
import { withSSRContext, Auth } from 'aws-amplify';

function PlayerPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <h1>Hello {id}</h1>
    </>
  )
}

export async function getServerSideProps({ req, res }) {
  const { Auth } = withSSRContext({ req });

  try {
    const user = await Auth.currentAuthenticatedUser();
    console.log(user);
    return {
      props: {
        user: JSON.parse(JSON.stringify(user))
      }
    }
  } catch (err) {
    console.log(err);
    res.writeHead(302, { Location: '/signup' });
    res.end();
  }
  return {
    props: {}
  }
}

export default PlayerPage;