import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'

import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>tracking </span>App
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error,
            magnam! Accusantium laborum, unde culpa qui, quae architecto magnam
            hic quos saepe nemo atque recusandae expedita, aspernatur dolor
            perferendis maiores? Temporibus.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login / Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  )
}

export default Landing
