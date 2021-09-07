function LandingPage () {
    return (
      <div>
        <h1>
          This is Home Page
          <ul>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/register">Register</a>
            </li>
          </ul>
          <button className="btn btn-primary">DaisyUI Button</button>
        </h1>
      </div>
    );
}

export default LandingPage