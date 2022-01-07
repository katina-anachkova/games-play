import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { register } from "../services/Api";

const Register = ({ onRegister }) => {

    let history = useHistory();

    const onRegisterHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const repass = formData.get('confirm-password').trim();
        const isAuthenticated = true;

        if (email == '' || password == '' || repass == '') {
            return alert('All fields ar required!');
        }

        if (password !== repass) {
            return alert(`Passwords must match!`);
        }

        register(email, password);
        onRegister({ email, password, isAuthenticated });
        history.push('/');
    }

    return (
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={onRegisterHandler}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="maria@email.com" />

                    <label htmlFor="pass">Password:</label>
                    <input type="password" name="password" id="register-password" />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input type="password" name="confirm-password" id="confirm-password" />

                    <input className="btn submit" type="submit" />

                    <p className="field">
                        <span>If you already have profile click <Link href="/login">here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    );
};

export default Register