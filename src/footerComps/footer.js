import { Helmet } from 'react-helmet';
import './footer.css'

export default function Footer() {
    return (
        <div>
            <Helmet>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            </Helmet>
            <footer>
                <p>&copy; 2021 Nishanth Prajith</p> 
                <p>
                    <a href = "https://www.facebook.com/people/Nishanth-Prajith/100009547906410/" target = "_blank" rel="noreferrer noopener">
                        <i class="fa fa-facebook"></i>
                    </a>
                    <a href = "https://www.instagram.com/nishanthprajith/" target = "_blank" rel="noreferrer noopener">
                        <i class="fa fa-instagram"></i>
                    </a> 
                    <a href = "https://www.linkedin.com/in/nishanth-prajith" target = "_blank" rel="noreferrer noopener">
                        <i class="fa fa-linkedin"></i>
                    </a> 
                    <a href = "https://github.com/NishanthPrajith" target = "_blank" rel="noreferrer noopener">
                        <i class="fa fa-github"></i>
                    </a>
                </p>
            </footer>
        </div>
    )
}

