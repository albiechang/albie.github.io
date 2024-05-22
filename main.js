class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = '
              <header role="header">
            	<div class="container">
                	<!-- logo -->
                    	<h1>
                        	<a href="index.html" title="Albert"><img src="images/logo.png" title="Albert" alt="Albert"/></a>
                        </h1>
                    <!-- logo -->
                    <!-- nav -->
                    <nav role="header-nav" class="navy">
                        <ul>
                            <li class="nav-active"><a href="index.html" title="Work">Work</a></li>
                            <li><a href="about.html" title="About">About</a></li>
                            <li><a href="blog.html" title="Blog">Blog</a></li>
                        </ul>
                    </nav>
                    <!-- nav -->
                </div>
            </header>
      '
  }
}

customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = '
                      <footer role="footer">
            <!-- logo -->
                <h1>
                    <a href="index.html" title="albert"><img src="images/logo.png" title="albert" alt="albert"/></a>
                </h1>
            <!-- logo -->
            <!-- nav -->
            <nav role="footer-nav">
            	<ul>
                	<li><a href="index.html" title="Work">Work</a></li>
                    <li><a href="about.html" title="About">About</a></li>
                    <li><a href="blog.html" title="Blog">Blog</a></li>
                </ul>
            </nav>
            <!-- nav -->
            <ul role="social-icons">
            	<li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="https://www.linkedin.com/in/albertcc05/"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
            </ul>
            <p class="copy-right">Albert Chang Portfolio 2024</p>
        </footer>
      '
  }
}

customElements.define('my-footer', MyFooter)
