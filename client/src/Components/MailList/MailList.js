import "./MailList.css";

const MailList = () => {
  return (
    <div className="maillist">
        <h1 className="mailtitle">Save time, Save money!</h1>
        <span className="maildesc">Sign up we will send best deals to you</span>
        <div className="mailinputcontainer">
            <input type="text" placeholder="Your email" />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList