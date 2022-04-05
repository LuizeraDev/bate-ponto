function Login() {
    return (
        <div className="container">
            <div className="row">
                <div className="col l6 m6 s12">
                    <form action="" method="POST">
                        <div className="card-panel z-depth-3">
                            <h5 className="center">Logar-se</h5>
                            <p className="center">Entrar na aplicação</p>
                            <div className="input-field">
                                <i className="material-icons prefix">account_circle</i>
                                <input type="text" name="name" />
                                <label>Nome</label>
                            </div>

                            <div className="input-field">
                                <i className="material-icons prefix">email</i>
                                <input type="email" name="email" className="validate" />
                                <label>Email</label>
                            </div>

                            <div className="input-field">
                                <i className="material-icons prefix">lock</i>
                                <input type="password" name="pass1" />
                                <label>Senha</label>
                            </div>

                            <div className="input-field">
                                <i className="material-icons prefix">vpn_key</i>
                                <input type="password" name="pass2" />
                                <label>Confirmar senha</label>
                            </div>
                            <p className="right">Já tem uma conta? <a href="#login" className="modal-trigger">Entrar</a></p>
                            <input type="submit" name="submit" value="register" className="btn left col s12" />
                            <div className="clearfix"></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;