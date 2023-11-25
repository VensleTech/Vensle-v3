import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBasketShopping, faSearch, faClose, faUserAlt, faCancel, faHome, faAdd, faMessage, faPerson, faInfo, faInfoCircle, faQuestion, faQuestionCircle, faUser, faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import Foot from '../reusable/footer'
import Topheader from '../reusable/topheader'

const Plisting = () => {
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
      <Topheader/>
        <div className='PPol'>
          <h2>Product Listing</h2>
          <div className='sections'>
            <ol>
              <li><strong> GENERAL PROHIBITIONS:</strong></li>
                <p>1.1 You may not post or sell any item that is restricted or prohibited by a  federal, state or local law in any country or jurisdiction. Please be aware  that the  www.vensle.com&nbsp;websites (a &quot;Site&quot;)  functions as a global marketplace, thus the selling or posting of items may be  prohibited because of laws outside of the jurisdiction where you reside. Below,  we have listed some categories of prohibited or restricted items. However, this  list is not exhaustive; you, as the seller, are responsible for ensuring that  you are not posting an item that is prohibited by law in any jurisdiction.</p>
                <p>1.2 Vensle.com has chosen to also prohibit the posting of other categories of  items which may not be restricted or prohibited by law but are nonetheless controversial  including:</p>
                <ol>
                  <p>(a) Items that encourage illegal activities;</p>
                  <p>(b) Items that are racially, religiously or ethnically derogatory, or that  promote hatred, violence, racial or religious intolerance;</p>
                  <p>(c) Giveaways, lotteries, raffles, or contests;</p>
                  <p>(d) Stocks, bonds, investment interests, and other securities;</p>
                  <p>(e) Pornographic materials or items that are sexual in nature;</p>
                  <p>(f) Items that do not offer a product or service for sale, such as  advertisements solely for the purpose of collecting user information.</p>
                </ol>
                    <p>1.3 Vensle.com, in its sole and exclusive discretion, reserves the right to  impose additional </p>
                
              <li><strong> ARTIFACTS</strong></li>
                              <p>2.1 Artifacts, cultural relics, historical grave markers, and related items are  protected under the laws of the PRC, the United States, and other jurisdictions  and may not be posted or sold through the Site.</p>
                              <p>2.2 The trade of cultural relics (including personal collection relics), gold,  silver, other precious metals, rare animals and their products from the PRC to  foreign (non-PRC) parties is strictly prohibited under PRC law and is  accordingly prohibited on the Site.</p>

              <li><strong>  COUNTERFEIT CURRENCY AND STAMPS</strong></li>
                              <p>3.1 Vensle.com strictly forbids the sale and purchase of counterfeit currency  and stamps, coins, bank notes, bonds, money orders, and other securities, as  well as the equipment used to produce such items.</p>
                              <p>3.2 Reproductions or replicas of coins as collectible items must be clearly  marked with the word &quot;COPY&quot;, &quot;REPRODUCTION&quot;,  &quot;REPLICA&quot; or as otherwise required under local law.</p>

              <li><strong> CRUDE OIL</strong></li>
                              <p>4.1 The listing or sale of crude oil by sellers and buyers located in China,  Nigeria, Singapore and some other countries is prohibited on the Site. It is  your responsibility to know your countries restriction and obey accordingly. </p>

              <li><strong> CONTRACTS  AND TICKETS</strong></li>
                              <p>5.1 You are responsible for ensuring that your transaction is lawful and not in  violation of any contractual obligation. Before posting an item on the Site,  you should carefully read any contracts that you have entered into that might  limit your right to sell your item on the Site. Some items, such as airline  tickets, have terms printed on the item that may limit your ability to sell  that item. In other cases, such as when you are distributing a company's  products, you may have signed a separate contract restricting your ability to  market the product.</p>
                              <p>5.2 Vensle.com does not search for items that may raise these types of issues,  nor can it review copies of private contracts, or adjudicate or take sides in  private contract disputes. However, we want you to be aware that posting items  in violation of your contractual obligations could put you at risk with third  parties. Vensle.com therefore urges that you not list any item until you have  reviewed any relevant contracts or agreements, and are confident you can  legally sell it on the Site.</p>
                              <p>5.3 If you have any questions regarding your rights under a contract or  agreement, we strongly recommend that you contact the company with whom you  entered into the contract and/or consult with an attorney.</p>

              <li><strong> CREDIT  CARDS</strong></li>
                              <p>6.1 Credit or debit cards cannot lawfully be transferred from one person to  another, and therefore such items may not be listed on the Site.</p>

              <li><strong> DRUGS &amp;  ASSOCIATED PARAPHERNALIA</strong></li>
                              <p>7.1 The listing or sale of narcotics, steroids, poppy seeds, poppy seed  products or other controlled substances (including all drugs listed in  Schedules I, II, III, IV or V of the Uniform Controlled Substances Act, 21  U.S.C. 801 et seq.) is strictly forbidden on the Site.</p>
                              <p>7.2 The listing or sale of drug paraphernalia, including all items that are  primarily intended or designed for use in manufacturing, concealing, or using a  controlled substance is strictly forbidden on the Site. Such items include, but  are not limited to those items used for the ingestion of illicit substances  including pipes such as water pipes, carburetor pipes, chamber pipes, ice  pipes, bongs, etc.</p>

              <li><strong> ETHNICALLY OR RACIALLY OFFENSIVE MATERIAL</strong></li>
                              <p>8.1 Postings that are ethnically or racially offensive are prohibited on the  Site. Sellers and purchasers must ensure that any wording used portrays  appropriate sensitivity to those who might read it in their postings, and when  they are offering or purchasing potentially offensive items or services.</p>
                              <p>8.2 Occasionally, if materials are of historical value or integral to the item  (such as a book title), members may use offensive words and phrases such as  &quot;Yang Guizi&quot; in the subject and description of a posting. Vensle.com  encourages all members to treat others as they themselves would like to be  treated.</p>
                              <p>8.3 Vensle.com generally prohibits such materials promoting Nazism, the KKK,  etc.</p>

              <li><strong> EVENT  TICKET RESALE POLICY</strong></li>
                              <p>9.1 Vensle.com allows the listing of tickets to performance, sporting and  entertainment events to the extent permitted by law. However, as a ticket  seller, you are responsible for ensuring that your particular transaction does  not violate any applicable law or the terms on the ticket itself.</p>

              <li><strong> FACES,  NAMES AND SIGNATURES</strong></li>
                              <p>10.1 Items containing the likeness, image, name, or signature of another person  are prohibited, unless the products were made or authorized by the person whose  likeness, image, name or signature has been used.</p>

              <li><strong>  FINANCIAL SERVICES</strong></li>
                              <p>11.1 Vensle.com prohibits listings that offer financial services, including  money transfers, issuing bank guarantees and letters of credit, loans,  fundraising and funding for personal investment purposes, etc.</p>

              <li><strong>  FIREARMS, AMMUNITION, WEAPONS, EXPLOSIVES</strong></li>
                              <p>12.1 The posting of any firearms, ammunition, military ordinance, assault  weapons, and related parts or accessories is not permitted on the Site.  Offering for sale or purchase of firearms, ammunition, weapons to and from  countries in which they are illegal is strictly prohibited and such activity  will result in your account being delisted.</p>
                              <p>12.2 Vensle.com does not permit the posting or sale of BB guns, air guns, black  powder guns or muzzle-loader guns and stun guns. Replica,  &quot;look-alike,&quot; and imitation firearms under certain circumstances will  be permitted only upon the express approval of Vensle.com. Such replica and  imitation items must have clear markings permanently affixed to the items to  the extent required by the laws of applicable jurisdiction, and must not be  readily convertible to shoot a projectile.</p>
                              <p>12.3 Weapons of Mass Destruction (WMD) and any instruction, processing, or aid  of producing such weapons or materials is strictly prohibited by international  law. Any violation of this policy will result in the notification of government  authorities by Vensle.com.</p>
                              <p>12.4 Knives and other cutting instruments will in most cases be permitted to be  listed. Switchblade knives and disguised knives are not permitted on the Site. Vensle.com  maintains discretion over what items are appropriate and may cause removal of a  listing that it deems as a weapon.</p>

              <li><strong> GOLD,  SILVER AND OTHER PRECIOUS METALS</strong></li>
                              <p>13.1 Vensle.com does not permit listings that offer the sale or buying of gold,  silver and other precious metals (not including jewelry).</p>

              <li><strong> GOVERNMENT IDS, LICENSES AND UNIFORMS</strong></li>
                              <p>14.1 The following items may not be listed on the Site:</p>
                              <ul>
                <li>Items that claim to be, or appear similar to, official government  identification documents or licenses, such as birth certificates, drivers  licenses, visas or passports. Furthermore, completed applications for such  documents containing personal information may not be listed.</li>
                              <li>Fake identification cards or any items that are designed for the  manufacture of such cards.</li>
                              <li>Articles of clothing or identification that claim to be, or appear similar  to, official government uniforms.</li></ul>

              <li><strong>  HAZARDOUS MATERIALS</strong></li>
                              <p>15.1 The posting or sale of hazardous or dangerous materials (such as  explosives, radioactive materials, flammable gases, liquids and solids, and  toxic substances) is forbidden on the Site.</p>
                              <p>15.2 The posting of any products containing toxic or harmful substances(e.g.  toys containing lead paint) is forbidden on the Site.</p>

              <li><strong> HUMAN  PARTS AND REMAINS</strong></li>
                              <p>16.1 Vensle.com prohibits the listing of any humans, the human body, or any  human body part. Examples of such prohibited items include, but are not limited  to: organs, bone, blood, sperm, and eggs.</p>
                              <p>16.2 Skulls and skeletons that are used for medical or educational purposes may  be listed on the Site.</p>
                              <p>16.3 Items made of human hair, such as wigs for commercial uses, are permitted.</p>

              <li><strong>  INVOICES</strong></li>
                              <p>17.1 The listing or sale of any form of invoices or receipts (including blank,  pre-filled, or value added invoices or receipts), is strictly prohibited on the  Site.</p>

              <li><strong>JOB  POSTINGS</strong></li>
                              <p>18.1 Job postings from which a factory/company/institute may directly recruit  employees are prohibited on the Site.</p>

              <li><strong> MAILING  LISTS AND PERSONAL INFORMATION</strong></li>
                              <p>19.1 The posting or sale of bulk email or mailing lists that contain personally  identifiable information including names, addresses, phone numbers, fax numbers  and email addresses, is strictly prohibited. Also prohibited are software or  other tools which are designed or used to send unsolicited commercial email  (i.e. &quot;spam&quot;).</p>

              <li><strong> MEDICAL AND HEALTHCARE SERVICES</strong></li>
                              <p>20.1 Vensle.com prohibits listings that offer medical or healthcare services,  including services for medical treatment, rehabilitation, vaccination,  healthcheck, psychological counseling, dietetics, plastic surgery, massage,  etc.</p>

              <li><strong>21.  NON-BUSINESS INFORMATION</strong></li>
                              <p>21.1 Vensle.com is an online business to business information platform;  personal and non-business information is prohibited.</p>

              <li><strong>22.  NON-TRANSFERABLE ITEMS</strong></li>
                              <p>22.1 Non-transferable items may not be posted or sold through the Site. Many  items including lottery tickets, airline tickets and some event tickets may not  be resold or transferred.</p>

              <li><strong>23.  POLICE-RELATED ITEMS</strong></li>
                              <p>23.1 The posting of law enforcement badges or official law enforcement  equipment from any public authority, including badges issued by the government  of any country, is strictly prohibited.</p>
                              <p>23.2 There are some limited police items that may be listed on our site,  provided they observe any noted guidelines:</p>
                              <ul>
                <li> Authorized general souvenir items, such as hats, mugs, pins, pens, buttons,  cuff links, T-shirts, money clips that do not resemble badges, and paperweights  that do not contain badges.</li>

                              <li> Badges that are clearly not genuine or official (e.g. toy badges).</li>

                              <li> Historical badges that do not resemble modern law enforcement badges,  provided that the item description clearly states that the badge is a  historical piece at least 75 years old or issued by an organization which no  longer exists.</li></ul>
                              <p>23.3 Police uniforms may be posted provided that they are obsolete and in no  way resemble current issue police uniforms. This fact must be clearly stated within  the posting description.</p>
                

              <li><strong>  PORNOGRAPHIC MATERIALS OR ADULT MATERIALS</strong></li>
                              <p>24.1 The posting or sale of pornographic materials is strictly prohibited, as  it violates laws in many countries. While pornography is difficult to define  and standards vary from nation to nation, Vensle.com will generally follow  guidelines accepted in the United Kingdom. Vensle.com strictly prohibits items  depicting bestiality, rape sex, incest, or sex with graphic violence or  degradation.</p>
                              <p>24.2 In determining whether listings or information should be removed from the  site, we consider the overall content of the posting, including photos,  pictorials, and text.</p>
                              <p>24.3 Vensle.com does not permit the sale of SM products. Novelty sexually  explicit items, including various types of toys, collectibles, or food items in  the shape of genitalia and primarily intended for adult buyers are permitted in  the appropriate category.</p>

              <li><strong>  POSTING AN ADVERTISEMENT FOR THE SOLE PURPOSE OF COLLECTING USER INFORMATION OR  RAISING MONEY</strong></li>
                              <p>25.1 Vensle.com is the ideal site for business to business commercial  transactions. Honesty and high ethical standards is what we represent. Postings  on this site should clearly represent the item being sold. If your objective is  otherwise, we ask that you seek out other websites to carry on the business  activity you seek to perform.</p>

              <li><strong>  PRESCRIPTION DRUGS AND DEVICES</strong></li>
                              <p>26.1 Vensle.com does not permit the posting of any controlled drugs or items  that are prescribed by licensed practitioners authorized to dispense same. If  you are uncertain as to the permissibility of your item, please contact Vensle.com  prior to posting.</p>
                              <p>26.2 Vensle.com also does not permit the posting of unauthorized medical  devices such as ear candles.</p>

              <li><strong> REAL  ESTATE</strong></li>
                              <p>27.1 A real estate posting allows buyers to contact the seller to get more  information and express interest about the property listed. Before you post a  listing relating to sale or purchase of real estate, you must ensure that you  have complied with all applicable laws and regulations</p>

              <li><strong> FAIRLY  USED MOBILE PHONES, LAPTOPS AND COMPUTERS</strong></li>
                              <p>28.1 The sale and purchase of fairly used mobile phones, laptops and computers is allowed on the Site. However, the item must <strong>NOT</strong> be a stolen item.</p>

              <li><strong>  REPLICA AND COUNTERFEIT ITEMS</strong></li>
                              <p>29.1 Listing of counterfeits, non-licensed replicas, or unauthorized items,  such as counterfeit designer garment, watches, handbags, sunglasses, or other  accessories, is strictly prohibited on the Site.</p>
                              <p>29.2 If the products sold bear the name or logo of a company, but did not originate  from or were not endorsed by that company, such products are prohibited from  the Site.</p>
                              <p>29.3 Postings of luxury brand products are permitted if a certificate of  authorization has been issued by the luxury brand owner.</p>
                              <p>29.4 Postings offering to sell or purchase replicas, counterfeits or other  unauthorized items shall be subject to removal by Vensle.com. Repeated postings  of counterfeit or unauthorized items shall result in the immediate suspension  of your membership.</p>

              <li><strong> SATELLITE AND CABLE TV DESCRAMBLERS</strong></li>
                              <p>30.1 Descramblers or other items that can be used to gain unauthorized access  to television programming (such as satellite and cable TV), internet access,  telephone, data or other protected, restricted, or premium services are  prohibited. Stating the item is for educational or test purposes will not  legitimize a product that is otherwise inappropriate. Some examples of items  which are not allowed include:</p>
                              <ul><li> Smart Card Programmers;</li>
                              <li> Smart Cards;</li>
                              <li> Descramblers; and</li>
                              <li> Hardware or Software DSS Emulators.</li></ul>
                              <p>30.2 Similarly, information on &quot;how to&quot; descramble or gain access to  cable or satellite television programming or other services without  authorization or payment is prohibited. </p>

              <li><strong> SOFTWARE</strong></li>
                              <p>31.1 Academic Software</p>
                              <ul><li> Academic software is software sold at discounted prices to students,  teachers, and employees of accredited learning institutions.</li>
                              <li> On the Site, please do not list any academic software unless you are so  authorized. Postings violating Vensle.com's academic software policy may be deleted  prior to publication.</li>
                              <li> For postings of academic software on behalf of an authorized educational  reseller or an educational institution, such licensure must be stated  conspicuously in the postings, including selling leads, Products and companies.  A certificate of authorization issued by the authorized educational reseller  (or the educational institution) also must be provided to Vensle.com.</li></ul>
                              <p>31.2 OEM Software</p>
                              <ul><li> Do not list &quot;OEM&quot; or &quot;bundled&quot; copies of software on  the Site unless you are selling it with computer hardware. Original Equipment  Manufacturer (OEM), or bundled software, is software that is obtained as part  of the purchase of a new computer. OEM software licenses usually prohibit the  purchaser from reselling the software without the computer or, in some cases,  without any computer hardware.</li></ul>

              <li><strong> SPY  EQUIPMENT</strong></li>
                              <p>32.1 The listing or sale of spy equipment, such as equipment used for  wiretapping, is not permitted on the Site.</p>

              <li><strong> STOCKS  AND OTHER SECURITIES</strong></li>
                              <p>33.1 Vensle.com does not permit the listing or sale of stocks, bonds, credit,  investment interests, or other securities.</p>

              <li><strong>34. STOLEN  PROPERTY</strong></li>
                              <p>34.1 The posting or sale of stolen property is strictly forbidden on the Site,  and violates international law. Stolen property includes items taken from  private individuals, as well as property taken without authorization from  companies or governments.</p>
                              <p>33.2 Vensle.com supports and cooperates with law enforcement efforts involving  the recovery of stolen property and the prosecution of responsible individuals.  If you are concerned that the images and/or text in your item description have  been used by another Site user without your authorization, or that your  intellectual property rights have been violated by such user, please contact us  at contact@vensle.com.</p>

              <li><strong>35.  TEXTILE QUOTA</strong></li>
                              <p>35.1 The offering for sale or purchase of textile quota is prohibited on the  Site</p>

              <li><strong>36.  TRANSIT RELATED ITEMS</strong></li>
                              <p>36.1 The following items related to the commercial airline and public  transportation industries may not be listed on the Site:</p>
                              <ul><li>(a) Any article of clothing or identification related to transportation  industries, including but not limited to, commercial airline pilot's uniforms,  flight attendant's uniforms, airport service personnel uniforms, uniforms  related to railway industries, and uniforms of security personnel of public  transport industries. Vintage clothing related to commercial airlines or other  public transport may be listed on the Site provided that the item description  clearly states that the item is at least 10 years old, is no longer in use by  the airline or other public transport authority and does not resemble any  current uniform.</li>
                              <li>(b) Manuals or other materials related to mass commercial public  transportation, including safety manuals published by commercial airlines or  entities operating subways, trains or buses. Such items may only be listed if  the description clearly states that the material is obsolete and no longer in  use by the airline or other transit authority.</li>
                              <li>(c) Any official, internal, or non-public documents.</li></ul>

              <li><strong>37.  UNAUTHORIZED COPIES OF INTELLECTUAL PROPERTY</strong></li>
                              <p>37.1 The listing or sale of unauthorized (pirated, duplicated, backup, bootleg,  etc.) copies of software programs, video games, music albums, movies,  television programs, photographs or other protected works is forbidden on the  Site.</p>

              <li><strong>38. USED  CLOTHING AND COSMETICS</strong></li>
                              <p>38.1 Used undergarments may not be listed or sold on the Site. Other used  clothing may be listed, so long as the clothing has been thoroughly cleaned.  Postings that contain inappropriate or extraneous descriptions will be removed.</p>
                              <p>38.2 The listing or sale of used cosmetics is prohibited on the Site.</p>

              <li><strong>39.  VETERINARY PRODUCTS AND DRUGS FOR ANIMALS</strong></li>
                              <p>39.1 Prescription veterinary products and drugs may not be listed on the Site.</p>

              <li><strong>40.  WILDLIFE AND ANIMAL PRODUCTS</strong></li>
                              <p>40.1 The listing or sale of any animal (including any animal parts which may  include pelts, skins, internal organs, teeth, claws, shells, bones, tusks,  ivory and other parts) protected by the Convention on International Trade in  Endangered Species of Wild Fauna and Flora (CITES) or any other local law or  regulation is strictly forbidden on the Site.</p>
                              <p>40.2 The listing or sale of shark fins and products made from any part of shark  fins is prohibited on the Site.</p>
                              <p>40.3 The listing or sale of products made from cats or dogs, including pelts,  skins, fur, meat, is prohibited on the Site.</p>
                              <p>40.4 The listing or sale of poultry, livestock and pets for commercial purposes  is permitted on the Site.</p>

              </ol>
              <p><strong>NOTICE:&nbsp;</strong>This  list should not be considered exhaustive in nature and shall be updated on a  continuous basis. If you are unsure about the product you wish to list with the  Site in regard to its appropriateness or legality, please contact our customer  services department at <a href='https://vensle.com/contact'>contact</a></p>
                          
          </div>
          </div>
          <Foot/>
    </div>
  )
}

export default Plisting