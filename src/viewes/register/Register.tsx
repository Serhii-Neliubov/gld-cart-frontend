import {FC, FormEvent, useState} from "react";
import BgWithParticles from "@/components/bg-with-particles/BgWithParticles.tsx";
import styles from "./Register.module.scss";
import useDefaultScrollPosition from "@/hooks/useDefaultScrollPosition/useDefaultScrollPosition.tsx";
import {Link, NavigateFunction, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {AppDispatch} from "@/store/store.ts";
import {useInput} from "@/hooks/useInput/useInput.tsx";
import toast from "react-hot-toast";
import {register} from "@/store/slices/userDataSlice.ts";

interface IUser {
  type: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  rePassword: string;
}

const Register: FC = () => {
  useDefaultScrollPosition();

  const [userType, setUserType] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const navigate: NavigateFunction = useNavigate();

  const name = useInput('');
  const surname = useInput('');
  const email = useInput('');
  const password = useInput('');
  const rePassword = useInput('');

  const user: IUser = {
    type: userType,
    name: name.value,
    surname: surname.value,
    email: email.value,
    password: password.value,
    rePassword: rePassword.value,
  };

  function sendFormHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if(user.password !== user.rePassword){
      toast.error('Passwords do not match');
    }

    if(user && user.password === user.rePassword){
      try {
        dispatch(register(user));
        navigate('/');
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className={styles.container}>
      <BgWithParticles>
        {userType ? <div className={styles.components}>
            <div className={styles.content}>
              <h1 className={styles.title}>Sign up to Gldcart</h1>
              <div className={styles.log_link}>
                <p>Already have an account?</p>
                <Link className={styles.link} to="/login">
                  Log in
                </Link>
              </div>
              <form onSubmit={event => sendFormHandler(event)} className={styles.form}>
                <div className={styles.form_column_wrap}>
                  <div className={styles.input}>
                    <span>First Name</span>
                    <input
                      required
                      onChange={name.onChange}
                      value={name.value}
                      type="text"
                      placeholder="ex:Miller"
                    />
                  </div>
                  <div className={styles.input}>
                    <span>Last Name</span>
                    <input
                      required
                      onChange={surname.onChange}
                      value={surname.value}
                      placeholder="ex:John"
                      type="text"
                    />
                  </div>
                </div>
                <div className={styles.input}>
                  <span>Your Email</span>
                  <input
                    onChange={email.onChange}
                    value={email.value}
                    required
                    type="email"
                    placeholder="Gldcart@gmail.com"
                  />
                </div>
                <div className={styles.input}>
                  <span>Password</span>
                  <input
                    onChange={password.onChange}
                    value={password.value}
                    required
                    type="password"
                    placeholder="Min. 8 character"
                  />
                </div>
                <div className={styles.input}>
                  <span>Re-Password</span>
                  <input
                    onChange={rePassword.onChange}
                    value={rePassword.value}
                    required
                    type="password"
                    placeholder="Min. 8 character"
                  />
                </div>
                <div className={styles.check_box}>
                  <input type="checkbox"/>
                  <span>Remember me</span>
                </div>
                <button type='submit' className={styles.button}>
                  Create my account
                </button>
              </form>
            </div>
          </div> : <div className={styles.body}>
          <h1 className={styles.title}>Register As A</h1>
          <p className={styles.text}>
            Join our platform and showcase your products and Services to a wide
            audience. Register now and embark on a journey of growth and
            success.
          </p>
          <button
            onClick={() => setUserType('Buyer')}
            className={styles.button_green}
          >
            Buyer
          </button>
          <button
            onClick={() => setUserType('Vendor')}
            className={styles.button_blue}
          >
            Vendor
          </button>
        </div>}
      </BgWithParticles>
    </div>
  );
};

export default Register;
