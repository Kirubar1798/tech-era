import {Link, withRouter} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="NavbarHeader">
    <Link to="/">
      <img
        className="WebsiteLogo"
        src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png "
        alt="website logo"
      />
    </Link>
  </div>
)

export default withRouter(Header)
