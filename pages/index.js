import React from 'react';
import { loginService } from './api/hello';

export default function Home() {

  return (
    <button onClick={() => loginService.logarComGithub()}>
      Logar com Github
    </button>
  )
}
