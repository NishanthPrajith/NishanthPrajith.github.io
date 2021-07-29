import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import './footer.css'

export default function Footer() {
    return (
        <div>
            <Helmet>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            </Helmet>
            <footer>
                
                <p>&copy; NISHANTH PRAJITH 2021 <span> | </span>   
                <i class="fa fa-facebook"></i>
                <i class="fa fa-instagram"></i> 
                <i class="fa fa-linkedin"></i>
                <i class="fa fa-github"></i>
                </p>

            </footer>
        </div>
    )
}

