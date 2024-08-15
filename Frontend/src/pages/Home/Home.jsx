import Spline from '@splinetool/react-spline';
import './Home.css'; // Make sure to import your CSS file
import '../../index.css';
import Img1 from '../../assets/348428189_988640645839983_6693744623780082422_n.jpg';
import Img2 from '../../assets/409036064_975637517253383_3930589684187972943_n.jpg';
import logo from '../../../src/assets/uniwear-high-resolution-logo-transparent.png';

export default function Home() {
  return (
    <>
      <div className="spline-background">
        <div className='nav-row'></div>
        <Spline scene="https://prod.spline.design/1Gs6vLQ27u-NE1D4/scene.splinecode" />
      </div>
      <div className="content">
        <div className='content-row'>
          <div className='text-container'>
            <h1>Redefining Campus Fashion</h1>
            <p>Your stylish hub for comfy university-themed T-shirts. Unleash your university spirit with each thread. Make a statement. Make it yours. Fashion meets campus pride.</p>
            <a href="./discover"><button>Discover</button></a>
          </div>
          <div className='spline-container'>
            <Spline scene="https://prod.spline.design/CKRSaAhKKxpINP-U/scene.splinecode" />
          </div>
        </div>
      </div>
      <div className="content-section">
        <div className="card home-card">
          <h2>Start Here Become a Seller</h2>
          <div className="card-section-text">
            <p>Start selling your designs on UniWear. Our new experience makes it super simple. Upload your original designs and watch the cash flow!</p>
          </div>
          <a href="./sell"><button>Sell</button></a>
        </div>
      </div>
      <div className="image-section">
        <div className="image-content">
          <div className="image-content-text">
            <h2>Setting the Standard for Unmatched Quality</h2>
            <p>UniWear is not just about T-shirts; it's about forging a partnership with brands that value quality, uniqueness, and distinction. Let UniWear be the canvas for your brand's story, where every thread speaks volumes about your commitment to excellence.
              Choose UniWear - where unmatched quality meets your brand's aspirations. Elevate your identity with T-shirts that reflect the true essence of your university.</p>
          </div>
          <div className="image-body">
            <img src = {Img1} width={"70%"}/>
          </div>
        </div>
      </div>
      <div className="image-section">
        <div className="image-content">
          <div className="image-body">
            <img src = {Img2} width={"70%"}/>
          </div>
          <div className="image-content-text">
            <h2>100% Satisfaction Guarantee</h2>
            <p>If your UniWear experience falls short of exceptional, we offer a hassle-free return or exchange. Your happiness matters, and we are dedicated to ensuring that every UniWear T-shirt brings joy and pride to your wardrobe.
            Thank you for choosing UniWear, where your satisfaction is not just a guarantee; it's our promise to deliver university pride, quality, and excellence with every T-shirt</p>
          </div>
        </div>
      </div>
      <div className="footer-section">
        <img src={logo} alt="Logo" style={{ width: '150px', height: '30px' }}/>
        <p> Where fashion meets academic pride.<br/>Embrace your identity with <br/>UniWear's unique designs.</p>
      </div>
    </>
  );
}
