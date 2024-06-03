// server component

import React from 'react';

const termsText = `
<h2>Welcome to Ker Infotech</h2>

<p>These terms and conditions outline the rules and regulations for the use of [Your Company Name]'s Website, located at [Your Website].</p>

<h3>1. Terms</h3>
<p>By accessing this website, we assume you accept these terms and conditions. Do not continue to use [Your Company Name] if you do not agree to take all of the terms and conditions stated on this page.</p>

<h3>2. License</h3>
<p>Unless otherwise stated, [Your Company Name] and/or its licensors own the intellectual property rights for all material on [Your Company Name]. All intellectual property rights are reserved. You may access this from [Your Company Name] for your own personal use subjected to restrictions set in these terms and conditions.</p>
<p>You must not:</p>
<ul>
  <li>Republish material from [Your Company Name]</li>
  <li>Sell, rent or sub-license material from [Your Company Name]</li>
  <li>Reproduce, duplicate or copy material from [Your Company Name]</li>
  <li>Redistribute content from [Your Company Name]</li>
</ul>

<h3>3. User Comments</h3>
<p>This Agreement shall begin on the date hereof. Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. [Your Company Name] does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of [Your Company Name], its agents, and/or affiliates. Comments reflect the views and opinions of the person who posts their views and opinions. To the extent permitted by applicable laws, [Your Company Name] shall not be liable for the Comments or for any liability, damages, or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.</p>
<p>[Your Company Name] reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive, or causes breach of these Terms and Conditions.</p>

<h3>4. Hyperlinking to our Content</h3>
<p>The following organizations may link to our Website without prior written approval:</p>
<ul>
  <li>Government agencies;</li>
  <li>Search engines;</li>
  <li>News organizations;</li>
  <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</li>
  <li>System-wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
</ul>
<p>These organizations may link to our home page, to publications, or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement, or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site.</p>

<h3>5. iFrames</h3>
<p>Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.</p>

<h3>6. Content Liability</h3>
<p>We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.</p>

<h3>7. Your Privacy</h3>
<p>Please read Privacy Policy</p>

<h3>8. Reservation of Rights</h3>
<p>We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.</p>

<h3>9. Removal of links from our website</h3>
<p>If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.</p>
<p>We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.</p>

<h3>10. Disclaimer</h3>
<p>To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>
<ul>
  <li>limit or exclude our or your liability for death or personal injury;</li>
  <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
  <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
  <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
</ul>
<p>The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort, and for breach of statutory duty.</p>
<p>As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</p>
`;

const Terms: React.FC = () => {
  return (
    <div className="container mt-5">
      <h1>Terms & Conditions</h1>
      <div dangerouslySetInnerHTML={{ __html: termsText }} />
    </div>
  );
};

export default Terms;
