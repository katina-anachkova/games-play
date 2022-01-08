import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { login } from "../services/Api";

const Login = ({ onLogin }) => {

    let history = useHistory();

    const onFormSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const isAuthenticated = true;

        if (email == '' || password == '') {
            return alert('All fields ar required!');
        }

        login(email, password);

        onLogin({ email, password, isAuthenticated });

        if (sessionStorage.length > 0) {
            history.push('/games');
        }
    }

    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={onFormSubmit}>

                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Sokka@gmail.com" />

                    <label htmlFor="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password" />
                    <input type="submit" className="btn submit" />
                    <p className="field">
                        <span>If you don't have profile click <Link to="/register">here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    );
};

export default Login