import Navbar from './../globalComponent/navbar/ann-navbar.vue'
import AboutUs from './../globalComponent/aboutUs/ann-about-us.vue'
import Content from './../globalComponent/content/ann-content.vue'
import Footer from './../globalComponent/footer/ann-footer.vue'
export default {
    components:{
        'ann-navbar':Navbar,
        'ann-about-us':AboutUs,
        'ann-content':Content,
        'ann-footer':Footer
    },
    data() {
        return {
            navigationDrawer:false
        }
    },
}