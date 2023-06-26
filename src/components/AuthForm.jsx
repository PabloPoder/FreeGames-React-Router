import { Form, useSearchParams, useActionData } from 'react-router-dom';
import { AUTH_MODE } from '../constants';

import { useState } from 'react';

import classes from './AuthForm.module.css';

export function AuthForm() {
  const data = useActionData()
  const [searchParams, setSearchParams] = useSearchParams()
  
  const isLogin = searchParams.get('mode') === AUTH_MODE.LOGIN

  return (
    <section className={classes.formSection}>
      <Form method="post" className={classes.form}>
          {data && data.errors && <div className={classes.incorrectCredentials}><ul>
            {Object.values(data.errors).map(
              error => <li key={error}>{error}</li>
              )}
        </ul></div>}
          {data && data.message && <div className={classes.incorrectCredentials}>{data.message}</div>}
        <div className={ classes.centeredContent}>
          <p>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" required />
          </p>
          <p>
            <label htmlFor="image">Password</label>
            <input id="password" type="password" name="password" required />
          </p>
          <div className={classes.actions}>
            <button>Save</button>
          </div>
        </div>
      </Form>
    </section>
  );
}

