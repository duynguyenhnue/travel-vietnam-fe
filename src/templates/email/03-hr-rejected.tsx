import React from 'react';
import { EmailTemplateType } from 'src/types/hr/candidate';

const HRRejectedEmailTemplate: any = (props: EmailTemplateType) => {
   const {candidate} = props
  return (
    <div>
      <p style={{ marginLeft: '20px', textAlign: 'left' }}>
        <span style={{ color: 'rgb(29, 28, 29)', fontFamily: 'Slack-Lato, Slack-Fractions, appleLogo, sans-serif', fontStyle: 'normal', fontVariantLigatures: 'common-ligatures', fontVariantCaps: 'normal', fontWeight: 400, letterSpacing: 'normal', orphans: 2, textAlign: 'left', textIndent: 0, textTransform: 'none', widows: 2, wordSpacing: 0, WebkitTextStrokeWidth: 0, whiteSpace: 'normal', textDecorationThickness: 'initial', textDecorationStyle: 'initial', textDecorationColor: 'initial', float: 'none', display: 'inline !important', fontSize: '15px' }}>
          <strong>Dear {candidate?.name},</strong>
        </span>
      </p>
      <p style={{ marginLeft: '20px', textAlign: 'left' }}>
        <br />
        <span style={{ color: 'rgb(29, 28, 29)', fontFamily: 'Slack-Lato, Slack-Fractions, appleLogo, sans-serif', fontStyle: 'normal', fontVariantLigatures: 'common-ligatures', fontVariantCaps: 'normal', fontWeight: 400, letterSpacing: 'normal', orphans: 2, textAlign: 'left', textIndent: 0, textTransform: 'none', widows: 2, wordSpacing: 0, WebkitTextStrokeWidth: 0, whiteSpace: 'normal', textDecorationThickness: 'initial', textDecorationStyle: 'initial', textDecorationColor: 'initial', float: 'none', display: 'inline !important', fontSize: '15px' }}>
          Thank you for your interest in the {candidate?.role} position at STARACK. We appreciated the opportunity to review your application.
        </span>
        <br />
        <span style={{ color: 'rgb(29, 28, 29)', fontFamily: 'Slack-Lato, Slack-Fractions, appleLogo, sans-serif', fontStyle: 'normal', fontVariantLigatures: 'common-ligatures', fontVariantCaps: 'normal', fontWeight: 400, letterSpacing: 'normal', orphans: 2, textAlign: 'left', textIndent: 0, textTransform: 'none', widows: 2, wordSpacing: 0, WebkitTextStrokeWidth: 0, whiteSpace: 'normal', textDecorationThickness: 'initial', textDecorationStyle: 'initial', textDecorationColor: 'initial', float: 'none', display: 'inline !important', fontSize: '15px' }}>
          While we were impressed with your qualifications, we have decided to move forward with other candidates whose experience more closely aligns with the requirements of this role.
        </span>
        <br />
        <span style={{ color: 'rgb(29, 28, 29)', fontFamily: 'Slack-Lato, Slack-Fractions, appleLogo, sans-serif', fontStyle: 'normal', fontVariantLigatures: 'common-ligatures', fontVariantCaps: 'normal', fontWeight: 400, letterSpacing: 'normal', orphans: 2, textAlign: 'left', textIndent: 0, textTransform: 'none', widows: 2, wordSpacing: 0, WebkitTextStrokeWidth: 0, whiteSpace: 'normal', textDecorationThickness: 'initial', textDecorationStyle: 'initial', textDecorationColor: 'initial', float: 'none', display: 'inline !important', fontSize: '15px' }}>
          We wish you all the best in your continued job search.
        </span>
      </p>
      <p style={{ marginLeft: '20px', textAlign: 'left' }}>
        <br />
        <span style={{ color: 'rgb(29, 28, 29)', fontFamily: 'Slack-Lato, Slack-Fractions, appleLogo, sans-serif', fontStyle: 'normal', fontVariantLigatures: 'common-ligatures', fontVariantCaps: 'normal', fontWeight: 400, letterSpacing: 'normal', orphans: 2, textAlign: 'left', textIndent: 0, textTransform: 'none', widows: 2, wordSpacing: 0, WebkitTextStrokeWidth: 0, whiteSpace: 'normal', textDecorationThickness: 'initial', textDecorationStyle: 'initial', textDecorationColor: 'initial', float: 'none', display: 'inline !important', fontSize: '15px' }}>
          Sincerely,
        </span>
      </p>
      <div style={{ marginLeft: '20px', textAlign: 'left', color: 'rgb(34, 34, 34)', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 'small', fontStyle: 'normal', fontVariantLigatures: 'normal', fontVariantCaps: 'normal', fontWeight: 400, letterSpacing: 'normal', orphans: 2, textIndent: 0, textTransform: 'none', widows: 2, wordSpacing: 0, WebkitTextStrokeWidth: 0, whiteSpace: 'normal', backgroundColor: 'rgb(255, 255, 255)', textDecorationThickness: 'initial', textDecorationStyle: 'initial', textDecorationColor: 'initial' }}>
        <strong style={{ color: 'rgb(29, 28, 29)', fontSize: '18px' }}> Justin Nguyen</strong>
        <strong style={{ fontFamily: 'Slack-Lato, Slack-Fractions, appleLogo, sans-serif', fontSize: '15px', color: 'rgb(29, 28, 29)' }}/>
      </div>
      <div style={{ marginLeft: '20px', textAlign: 'left', color: 'rgb(34, 34, 34)', fontStyle: 'normal', fontVariantLigatures: 'normal', fontVariantCaps: 'normal', fontWeight: 400, letterSpacing: 'normal', orphans: 2, textIndent: 0, textTransform: 'none', widows: 2, wordSpacing: 0, WebkitTextStrokeWidth: 0, whiteSpace: 'normal', backgroundColor: 'rgb(255, 255, 255)', textDecorationThickness: 'initial', textDecorationStyle: 'initial', textDecorationColor: 'initial', fontFamily: '"Google Sans", Roboto, RobotoDraft, Helvetica, Arial, sans-serif', fontSize: 'medium' }}>
        <br />
        <span style={{ fontStyle: 'normal', fontVariantLigatures: 'normal', fontVariantCaps: 'normal', fontWeight: 400, letterSpacing: 'normal', orphans: 2, textIndent: 0, textTransform: 'none', widows: 2, wordSpacing: 0, WebkitTextStrokeWidth: 0, whiteSpace: 'normal', textDecorationThickness: 'initial', textDecorationStyle: 'initial', textDecorationColor: 'initial', fontFamily: '"Google Sans", Roboto, RobotoDraft, Helvetica, Arial, sans-serif', fontSize: 'medium', color: 'rgb(29, 28, 29)' }}><strong> Starack JSC.<br /></strong></span>
        
      </div>
      <div style={{ marginLeft: '20px', textAlign: 'left', color: 'rgb(34, 34, 34)', fontStyle: 'normal', fontVariantLigatures: 'normal', fontVariantCaps: 'normal', fontWeight: 400, letterSpacing: 'normal', orphans: 2, textIndent: 0, textTransform: 'none', widows: 2, wordSpacing: 0, WebkitTextStrokeWidth: 0, whiteSpace: 'normal', backgroundColor: 'rgb(255, 255, 255)', textDecorationThickness: 'initial', textDecorationStyle: 'initial', textDecorationColor: 'initial', fontFamily: '"Google Sans", Roboto, RobotoDraft, Helvetica, Arial, sans-serif', fontSize: 'medium' }}>
        <span style={{ color: 'rgb(29, 28, 29)' }}/>
        <div>
          <span style={{ color: 'rgb(29, 28, 29)' }}><strong> Address</strong></span>
          <strong><img data-emoji="🇻🇳"  alt="🇻🇳" aria-label="🇻🇳" draggable="false" src="https://fonts.gstatic.com/s/e/notoemoji/15.0/1f1fb_1f1f3/72.png" loading="lazy" style={{ height: '1.2em', width: '1.2em', verticalAlign: 'middle' }}/></strong><strong style={{ fontFamily: 'monospace', fontSize: 'large', color: 'rgb(29, 28, 29)' }}>:</strong><a href="https://goo.gl/maps/CCC7vk4tHJ62HR3Q8" target="_blank" style={{ color: 'rgb(17, 85, 204)', fontFamily: 'monospace', fontSize: 'large' }}>20/01 Tran Quoc Hoan Street, Ha Noi</a>
        </div>
        <div style={{ fontFamily: 'Slack-Lato, Slack-Fractions, appleLogo, sans-serif', fontSize: '15px' }}>
        <span style={{ color: 'rgb(29, 28, 29)', fontFamily: 'Slack-Lato, Slack-Fractions, appleLogo, sans-serif', fontSize: '15px' }}>
          Mobile - VN
        </span>
        <span style={{ color: 'rgb(29, 28, 29)', fontFamily: 'Slack-Lato, Slack-Fractions, appleLogo, sans-serif', fontSize: '15px' }}>:&nbsp;</span>
        <a href="tel:+84969666537" rel="noopener noreferrer" style={{ fontFamily: 'Slack-Lato, Slack-Fractions, appleLogo, sans-serif', fontSize: '15px' }} target="_blank">+84 969 666 537</a>
        <br />
        <b style={{ color: 'rgb(29, 28, 29)', fontSize: '15px' }}>Email</b>
        <span style={{ color: 'rgb(29, 28, 29)', fontFamily: 'Slack-Lato, Slack-Fractions, appleLogo, sans-serif', fontSize: '15px' }}>:&nbsp;</span>
        <a href="mailto:justin.nguyen@starack.net" rel="noopener noreferrer" style={{ fontFamily: 'Slack-Lato, Slack-Fractions, appleLogo, sans-serif', fontSize: '15px' }} target="_blank">justin.nguyen@starack.net</a>
        <br />
        <b style={{ color: 'rgb(29, 28, 29)', fontSize: '15px' }}>Web</b>
        <span style={{ color: 'rgb(29, 28, 29)', fontFamily: 'Slack-Lato, Slack-Fractions, appleLogo, sans-serif', fontSize: '15px' }}>:&nbsp;</span>
        <a href="https://starack.net/" target="_blank">starack.net</a>
      </div>
      {/* <div style={{ fontFamily: '"Google Sans", Roboto, RobotoDraft, Helvetica, Arial, sans-serif', fontSize: 'medium' }}>
        <img
          src="https://ci3.googleusercontent.com/mail-sig/AIorK4zSobH0BirH1dsgFBSBPWCmRFMcUQrQRKvkEZy9bJzBnQD2CX89N3pMOPyoB6JkBKUniLdC8yI"
          width="200"
          height="200"
          data-aii="CiExNVlmb1o3OGd6dDdqVlpXTGlKYUZxSzZVU1FfbWFvQ1g"
          data-os="https://lh3.googleusercontent.com/d/15YfoZ78gzt7jVZWLiJaFqK6USQ_maoCX"
          alt="logo"
        />
      </div> */}
      </div>
    </div>
  );
};

export default HRRejectedEmailTemplate;
