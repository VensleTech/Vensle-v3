import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBasketShopping, faSearch, faClose, faUserAlt, faCancel, faHome, faAdd, faMessage, faPerson, faInfo, faInfoCircle, faQuestion, faQuestionCircle, faUser, faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import Foot from '../reusable/footer'

const Privacy = () => {
  const reveal = (ref) => {
    if (ref.current.style.display === 'grid') {
        ref.current.style.display = 'none'
    }
    else{
        ref.current.style.display = 'grid'
    }
    
}
useEffect(()=>{
  window.scrollTo(0,0)
},[])
const flash = useRef('')
    const ham = useRef('')
  return (
    <div>
      <div className="topbar">
            <div className="logo">
                <Link to={'/'}>Vensle</Link>
            </div>
            <div className="rightside">
                <div></div>
                <div><FontAwesomeIcon icon={faBars} onClick={(e)=>reveal(ham)}/></div>
                <div><Link to={'/signin'}>Sign in/Sign up</Link></div>
                <div ref={flash} ><Link to={'/admin/upload'} style={{color:'black'}}>Start Selling</Link></div>
            </div>
        </div>
        <div className='PPol'>
          <h2>Privacy Policy</h2>
          <div className='sections'>
        <p>
          This Privacy Policy explains what personal data is collected when you use the Vensle.com website or any Vensle.com mobile application and the services provided through it.
          </p>

          <p><b>By Using the Service, You Promise Us That</b></p>
          <ul>
            <li>You Have Read, Understood and Agreed to this Privacy Policy, and that</li>
            <li>You are over 16 years of age or 18 years in some countries or have had your parent or guardian read and agree to this Privacy Policy for you.</li>
            <li>If you do not agree or are unable to make this promise, you must not use the Service. In such case, you must contact the support team via online chat or email to (a) request deletion of your account and data.</li>
          </ul>
          </div>
          <div className='sections'>
          <p>
            Vensle Ltd. is a registered company with the British government. Vensle Inc. will be responsible for storing your personal data’s provided by you on this website.
            We collect data you give us voluntarily (for example, an email address). We also collect data automatically (for example, your IP address).
          </p>
          
          <p><b>Data you give us. </b>
          You may be asked to provide us information about yourself when you register for and/or use the Service. This information includes: first name, phone number, email (together “Required Information”), last name, photo, address details, working hours.
          To use our Service and register an account, you will need to provide Required Information. You will be able to use the Service even if you do not give this data to us, but some Service’s functionality may be limited to you (for example, if you do no register an account, you will not be able to chat with other users, sell items, place a request etc.
          Sometimes you may also need to provide to us additional information in the communication with our Support Team in order to fulfil your request (for example, if your account was previously blocked, we may ask you to confirm your identity by providing an ID document).
          </p>
          <p> 
            <b>Data provided to us by third parties. </b>
            When you decide to log in using Facebook or Google, we get personal data from your Facebook or Google account. This includes your profile image, name, and Facebook ID, Google ID, friends list. For more information, please refer to the Facebook Permissions Reference (describes the categories of information, which Facebook may share with third parties and the set of requirements) and to the Facebook Data policy. In addition, Facebook lets you control the choices you made when connecting your Facebook profile to the App on their Apps and Websites page. To know more about how Google processes your data, visit its Privacy Policy.
          </p>
          <p><b>Data we collect automatically. </b>
          </p>
          <ul>
            <li>
              <b>Device and Location data. </b>.
              We collect data from your device. Examples of such data include language settings, IP address, time zone, type and model of a device, device settings, operating system, Internet service provider, mobile carrier, hardware ID, and Facebook ID.
            </li>
            <li>
              <b>Usage data. </b>
              We record how you interact with our Service. For example, we log the features, and content you interact with, how often you use the Service, how long you are on the Service, what sections you use, how many ads you watch.
              </li>
              <li><b>Cookies. </b>
            A cookie is a small text file that is stored on a user's computer for record-keeping purposes. Cookies can be either session cookies or persistent cookies. A session cookie expires when you close your browser and is used to make it easier for you to navigate our Service. A persistent cookie remains on your hard drive for an extended period of time. We also use tracking pixels that set cookies to assist with delivering online advertising. Cookies are used, in particular, to automatically recognize you the next time you visit our Website. As a result, the information, which you have earlier entered in certain fields on the Website may automatically appear the next time when you use our Service. Cookie data will be stored on your device and most of the times only for a limited time period.
            </li>
          </ul>
          </div>
            <div className='sections'>
          <p>
            <b>In our data protection practices we strive to, in particular, to provide that personal data is </b>
          </p>
          <ul>
            <li>processed in accordance with specific, legitimate and lawful purpose consented to by you;</li>
            <li>is adequate, accurate and without prejudice to the dignity of a human person;</li>
            <li>stored only for the period within which it is reasonably needed; and</li>
            <li>secured against reasonably foreseeable hazards and breaches such as theft, cyberattack, viral attack, dissemination, manipulations of any kind, damage by rain, fire or exposure to other natural elements.</li>
          </ul>
          <p><b>We process your personal data:</b></p>
          
            <ol>
          <li><b>To provide our Service</b>
          This includes enabling you to use the Service in a seamless manner and preventing or addressing Service errors or technical issues.
          </li>

          <li><b>To customize your experience</b>
          We process your personal data to adjust the content of the Service and make offers tailored to your personal preferences and interests.
          </li>

          <li><b>To manage your account and provide you with customer support</b>
          We process your personal data to respond to your requests for technical support, Service information or to any other communication you initiate. This includes accessing your account to address technical support requests. For this purpose, we may send you, for example, notifications or emails about the performance of our Service, security, payment transactions, notices regarding our Terms and Conditions of Use or this Privacy Policy.
          </li>

          <li><b>To communicate with you regarding your use of our Service</b>
          We communicate with you, for example, by push notifications or in the chat. As a result, you may, for example, receive a notification whether on the Website or via email that you received a new message on Vensle. To opt out of receiving push notifications, you need to change the settings on your browser or mobile device. To opt out of the certain type of emails, you need to follow an unsubscribe link located in the footer of the email by contacting our support team at contact@vensle.com or in your profile setting.
          </li>
          <li><b>The services that we use for these purposes may collect data concerning</b> the date and time when the message was viewed by our users, as well as when they interacted with it, such as by clicking on links included in the message.</li>
            
          <li><b>To research and analyze your use of the Service</b>
          This helps us to better understand our business, analyze our operations, maintain, improve, innovate, plan, design, and develop Vensle and our new products. We also use such data for statistical analysis purposes, to test and improve our offers. This enables us to better understand what features and sections of Vensle our users like more, what categories of users use our Service. As a consequence, we often decide how to improve Vensle based on the results obtained from this processing. For example, if we discover that Jobs section is not as popular as others, we may focus on improving it.
          </li>

          <li><b>To send you marketing communications</b>
          We process your personal data for our marketing campaigns. We may add your email address to our marketing list. As a result, you will receive information about our products, such as for example, special offers, and products of our partners. If you do not want to receive marketing emails from us, you can unsubscribe following instructions in the footer of the marketing emails, by contacting our support team at support@Vensle.com or in your profile setting.
          </li>

          We may also show you advertisements on the Website, and send you push notifications for marketing purposes. To opt out of receiving push notifications, you need to change the settings on your device or/and browser.

          <li><b>To personalize our ads</b>
          We and our partners use your personal data to tailor ads and possibly even show them to you at the relevant time. For example, if you have visited our Website, you might see ads of our products, for example, in your Facebook’s feed.
          </li>
          </ol>

          <p>We may target advertising to you through a variety of ad networks and exchanges, using data from advertising technologies on and off of our Services like unique cookie, or similar tracking technology, pixel, device identifiers, geolocation, operation system information, email. Browsers:</p>

          <p>It is also may be possible to stop your browser from accepting cookies altogether by changing your browser’s cookie settings. You can usually find these settings in the “options” or “preferences” menu of your browser. The following links may be helpful, or you can use the “Help” option in your browser.</p>

          <ol>
                                <li>Cookie settings in Internet Explorer</li>
                                <li>Cookie settings in Firefox</li>
                                <li>Cookie settings in Chrome</li>
                                <li>Cookie settings in Safari web and iOS</li>
                              </ol>
                            
                            <p>
                              <strong>Google&nbsp;</strong>
                              allows its users to&nbsp;
                              <u><a href='https://adssettings.google.com/authenticated?hl=ru'>opt out of Google&rsquo;s personalized ads</a></u>&nbsp;and to&nbsp;<u><a href='https://tools.google.com/dlpage/gaoptout/'>prevent  their data from being used by Google Analytics.</a></u> 
                              <strong>Facebook&nbsp;</strong>also allows its users to influence  the types of ads they see on Facebook. To find how to control the ads you see  on Facebook, please go&nbsp;<u><a href='https://www.facebook.com/help/146952742043748?helpref=related'>here</a></u>&nbsp;or adjust your ads settings  on&nbsp;<u><a href='https://www.facebook.com/ads/preferences/?entry_product=ad_settings_screen'>Facebook</a></u></p>
                              
                            
                                <li>To enforce our Terms and Conditions  of Use and to prevent and combat fraud<p>We use personal data to enforce our agreements and contractual  commitments, to detect, prevent, and combat fraud. As a result of such  processing, we may share your information with others, including law  enforcement agencies (in particular, if a dispute arises in connection with our  Terms and Conditions of Use).</p>
								</li>
                             
                                <li>To comply with legal obligations<p>We may process, use, or share your data when the law requires it, in  particular, if a law enforcement agency requests your data by available legal  means.</p>
                            <p>We process your personal data, in particular, under the following legal  bases:</p></li>
                            
                            <ol>
                              <li>your consent;</li>
                              <li>to perform our contract with you;</li>
                              <li>for our (or others') legitimate interests; </li>
                            </ol>
                            <p>Under this legal basis we, in  particular we:</p>
                            <ol>
                              
                                <li>communicate with you regarding your  use of our Service<p>This includes, for example, sending  you push notifications reminding you that you have unread messages. The  legitimate interest we rely on for this purpose is our interest to encourage  you to use our Service more often. We also take into account the potential  benefits to you.</p></li>
                             
                                <li>research and analyse your use of the Service<p>Our legitimate interest for this  purpose is our interest in improving our Service so that we understand users&rsquo;  preferences and are able to provide you with a better experience (for example,  to make the use of our mobile application easier and more enjoyable, or to  introduce and test new features).</p></li>
                           
                                <li>send you marketing communications<p>The legitimate interest we rely on  for this processing is our interest to promote our Service in a measured and  appropriate way.</p></li>
                            
                                <li>personalize our ads<p>The legitimate interest we rely on  for this processing is our interest to promote our Service in a reasonably  targeted way.</p></li>
                            
                                <li>enforce our Terms and Conditions of  Use and to prevent and combat fraud<p>Our legitimate interests for this  purpose are enforcing our legal rights, preventing and addressing fraud and  unauthorized use of the Service, non-compliance with our Terms and Conditions  of Use.</p></li>
                          
                            </ol>
							
                                <li>to comply with legal obligations.<p>We share information with third  parties that help us operate, provide, improve, integrate, customize, support,  and market our Service. We may share some sets of personal data, in particular,  for purposes and with parties indicated in Section 2 of this Privacy Policy.  The types of third parties we share information with include, in particular:</p></li>

                            
                            <ol>
                              <li>Service providers<p>We may share personal data with third  parties that we hire to provide services or perform business functions on our  behalf, based on our instructions. We may share your personal information with  the following types of service providers:</p></li>
                            
                              <ol>
                                <li>cloud storage providers (Amazon,  DigitalOcean, Hetzner)</li>
                                <li>data analytics providers (Facebook,  Google, Appsflyer)</li>
                                <li>marketing partners (in particular,  social media networks, marketing agencies, email delivery services; such as  Facebook, Google, Mailfire)</li>
                              </ol>
                              <li>Law enforcement agencies and other  public authorities<p>We may use and disclose personal data  to enforce our Terms and Conditions of Use, to protect our rights, privacy, safety,  or property, and/or that of our affiliates, you or others, and to respond to  requests from courts, law enforcement agencies, regulatory agencies, and other  public and government authorities, or in other cases provided for by law.</p></li>
                            
                              <li>Third parties as part of a merger or  acquisition<p>As we develop our business, we may  buy or sell assets or business offerings. Customers&rsquo; information is generally  one of the transferred business assets in these types of transactions. We may  also share such information with any affiliated entity (e.g. parent company or  subsidiary) and may transfer such information in the course of a corporate  transaction, such as the sale of our business, a divestiture, merger,  consolidation, or asset sale, or in the unlikely event of bankruptcy.</p></li>
                            </ol>
							
							
							<ul>
                            <p>To be in control of your personal data, you have the following rights:</p>
                              <ul><li><p><strong>Accessing / reviewing / updating / correcting your personal data.&nbsp;</strong>You may review, edit, or change the personal data that you had  previously provided to vensle.com in the settings section on the Website.</p>
                              <p>You may also request a copy of your personal data collected during your  use of the Service at contact@vensle.com.</p></li>
							<li><p><strong>Deleting your personal data.&nbsp;</strong>You can request the  erasure of your personal data by sending us an email at contact@vensle.com.</p>
                              <p>When you request deletion of your personal data, we will use reasonable  efforts to honour your request. In some cases we may be legally required to  keep some of the data for a certain time; in such event, we will fulfil your  request after we have complied with our obligations. </p></li>
							<li><p><strong>Objecting to or restricting the use of your personal data (including for  direct marketing purposes).&nbsp;</strong>You can ask us to stop using all or  some of your personal data or limit our use thereof by sending a request at contact@vensle.com.</p></li>
							<li><p><strong>The right to lodge a complaint with the supervisory authority.&nbsp;</strong>We would love you to contact us directly, so we could address your  concerns. Nevertheless, you have the right to lodge a complaint with a  competent data protection supervisory authority.</p></li>
                            </ul>
							</ul>
							
							<p>We do not knowingly process personal data from persons under 16 years of  age. If you learn that anyone younger than 16 has provided us with personal  data, please contact us at contact@vensle.com.</p>
                            <p>We may modify this Privacy Policy from time to time. If we decide to  make material changes to this Privacy Policy, you will be notified through our  Service or by other available means and will have an opportunity to review the  revised Privacy Policy. By continuing to access or use the Service after those  changes become effective, you agree to be bound by the revised Privacy Policy.</p>
                            <p>We will store your personal data for as long as it is reasonably  necessary for achieving the purposes set forth in this Privacy Policy  (including providing the Service to you), which includes (but is not limited  to) the period during which you have a Vensle account. We will also retain and  use your personal data as necessary to comply with our legal obligations,  resolve disputes, and enforce our agreements.</p>
                            <p>You may contact us at any time for details regarding this Privacy Policy  and its previous versions. For any questions concerning your account or your  personal data please contact us at contact@vensle.com.</p>
							  <p>Effective as of December 2019.</p>
          </div>
          </div>
          <Foot/>
    </div>
  )
}

export default Privacy